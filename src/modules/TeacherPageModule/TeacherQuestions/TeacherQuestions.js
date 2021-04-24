import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionPoolActions";
import * as questionActions from "../../../actions/QuestionActions";
import "./TeacherQuestions.css";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import QueueIcon from "@material-ui/icons/Queue";
import SettingsIcon from "@material-ui/icons/Settings";
import TeacherCreateOptions from "../TeacherCreateOptions/TeacherCreateOptions";
import TeacherCreateQuestions from "../TeacherCreateQuestions/TeacherCreateQuestions";
import TeacherOptions from "../TeacherOptions/TeacherOptions";
import TeacherAnswerForQuestion from "../TeacherAnswerForQuestion/TeacherAnswerForQuestion";
import TeacherQuestionHeroSection from "../TeacherQuestionHeroSection/TeacherQuestionHeroSection";
import TeacherEditQuestion from "../TeacherEditQuestion/TeacherEditQuestion";

class TeacherQuestions extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleEditQuestion = this.toggleEditQuestion.bind(this);
    this.toggleQuestionAlert = this.toggleQuestionAlert.bind(this);

    this.state = {
      modal: false,
      modalEditQuestion: false,
      questionID: "",
      questionObj: "",
      questionpoolname: this.props.match.params.questionpoolname,
      id: this.props.match.params.id,
      modalQuestionAlert: false,
      deleteStatusAlert: "",
      deleteStatusMessage: "",
    };
  }

  componentDidMount() {
    this.props.fetchQuestionPoolByID(this.state.id);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.newOption !== nextProps.newOption ||
      this.props.newQuestion !== nextProps.newQuestion ||
      this.props.deletedOption !== nextProps.deletedOption ||
      this.props.deletedQuestion !== nextProps.deletedQuestion ||
      this.props.newAnswer !== nextProps.newAnswer ||
      this.props.updatedQuestion !== nextProps.updatedQuestion
    ) {
      this.props.fetchQuestionPoolByID(this.state.id);
    }
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  toggleEditQuestion() {
    this.setState({ modalEditQuestion: !this.state.modalEditQuestion });
  }

  toggleQuestionAlert() {
    this.setState({ modalQuestionAlert: !this.state.modalQuestionAlert });
  }

  deleteQuestionByID(id) {
    this.setState({
      modalQuestionAlert: !this.state.modalQuestionAlert,
      deleteStatusAlert: "alert alert-warning",
      deleteStatusMessage: "Please Wait...",
    });
    this.props.deleteQuestionByID(
      id,
      () => {
        this.setState({
          deleteStatusAlert: "alert alert-danger",
          deleteStatusMessage: "Successfully Removed",
        });
      },
      () => {
        this.setState({
          deleteStatusAlert: "alert alert-warning",
          deleteStatusMessage: "Something Went Wrong",
        });
      }
    );
  }

  render() {
    return (
      <div>
        <TeacherQuestionHeroSection />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3> {this.state.questionpoolname}</h3>
              </div>

              <hr />

              <div className="container">
                <div>
                  {this.props.questionPool !== ""
                    ? this.props.questionPool.questions &&
                      this.props.questionPool.questions.map(
                        (question, index) => {
                          return (
                            <div className="col-lg-12">
                              <div className="card cardDivQuestions">
                                {" "}
                                <div className="row">
                                  <div>
                                    {" "}
                                    <h4>
                                      ( {++index} ) {question.questionText}{" "}
                                      <button
                                        className="btn btnBackgroundNone btn-sm"
                                        onClick={() => {
                                          this.setState({
                                            questionID: question.id,
                                          });
                                          this.toggle();
                                        }}
                                      >
                                        <QueueIcon className="btnBackgroundNoneIcons" />
                                      </button>
                                      <button
                                        className="btn btnBackgroundNone btn-sm"
                                        onClick={() => {
                                          this.setState({
                                            questionObj: question,
                                          });
                                          this.toggleEditQuestion();
                                        }}
                                      >
                                        <SettingsIcon className="btnBackgroundNoneIcons" />
                                      </button>
                                      <button
                                        className="btn btnBackgroundNone btn-sm"
                                        onClick={() => {
                                          this.deleteQuestionByID(question.id);
                                        }}
                                      >
                                        <DeleteOutlineRoundedIcon className="btnBackgroundNoneIcons" />
                                      </button>
                                    </h4>
                                  </div>
                                </div>
                                <TeacherOptions question={question} />
                                <TeacherAnswerForQuestion question={question} />
                              </div>
                            </div>
                          );
                        }
                      )
                    : ""}
                </div>
              </div>

              <div>
                <TeacherCreateQuestions poolId={this.state.id} />
              </div>
            </div>
          </div>
          {/* <!-- Modal For Create Question Pool Details--> */}
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>CREATE | OPTION</ModalHeader>
            <ModalBody>
              <TeacherCreateOptions dataQuestionID={this.state.questionID} />
            </ModalBody>
          </Modal>
          {/* <!--End of Modal For Create Question Pool Details--> */}
          {/* <!-- Modal For Edit Question Pool Details--> */}
          <Modal
            isOpen={this.state.modalEditQuestion}
            toggle={this.toggleEditQuestion}
          >
            <ModalHeader toggle={this.toggleEditQuestion}>
              EDIT | QUESTION
            </ModalHeader>
            <ModalBody>
              <TeacherEditQuestion dataQuestion={this.state.questionObj} />
            </ModalBody>
          </Modal>
          {/* <!--End of Modal For Edit Question Pool Details--> */}
          {/* <!-- Modal For Delete Question --> */}
          <Modal
            isOpen={this.state.modalQuestionAlert}
            toggle={this.toggleQuestionAlert}
          >
            <ModalHeader toggle={this.toggleQuestionAlert}>
              REMOVE QUESTION
            </ModalHeader>
            <ModalBody>
              {" "}
              <div class={this.state.deleteStatusAlert} role="alert">
                {this.state.deleteStatusMessage}
              </div>
            </ModalBody>
          </Modal>
          {/* <!--End of Modal For Delete Question --> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionPool: state.questionPoolReducer.currentQuestionPool,
  newOption: state.optionReducer.newOption,
  deletedOption: state.optionReducer.deletedOption,
  newQuestion: state.questionReducer.newQuestion,
  updatedQuestion: state.questionReducer.updatedQuestion,
  deletedQuestion: state.questionReducer.deletedQuestion,
  newAnswer: state.answerReducer.newAnswer,
});

const mapActionToProps = {
  fetchQuestionPoolByID: actions.fetchById,
  deleteQuestionByID: questionActions.DeleteQuestion,
};

export default connect(mapStateToProps, mapActionToProps)(TeacherQuestions);
