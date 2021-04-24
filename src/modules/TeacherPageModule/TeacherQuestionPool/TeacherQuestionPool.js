import React, { Component } from "react";
import "./TeacherQuestionPool.css";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionPoolActions";
import { Link } from "react-router-dom";
import TeacherEditQuestionPool from "../TeacherEditQuestionPool/TeacherEditQuestionPool";

import QueueIcon from "@material-ui/icons/Queue";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class TeacherQuestionPool extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleQuestionPoolAlert = this.toggleQuestionPoolAlert.bind(this);

    this.state = {
      modal: false,
      poolID: "",
      modalQuestionPoolAlert: false,
      deleteStatusAlert: "",
      deleteStatusMessage: "",
    };
  }
  componentDidMount() {
    this.props.fetchallquestionpoolsbyteacher(this.props.user.id);
  }

  toggle() {
    this.setState({ modal: !this.state.model });
  }

  toggleQuestionPoolAlert() {
    this.setState({
      modalQuestionPoolAlert: !this.state.modalQuestionPoolAlert,
    });
  }
  deleteQuestionPoolByID(id) {
    this.setState({
      modalQuestionPoolAlert: !this.state.modalQuestionPoolAlert,
      deleteStatusAlert: "alert alert-warning",
      deleteStatusMessage: "Please Wait...",
    });
    this.props.deleteQuestionPoolByID(
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
        <div>
          <div className="mt-5">
            <div className="container">
              <h3>YOUR QUESTION POOLS</h3>
              <hr />
              <div className="row">
                {this.props.teacherQuestionPoolList.map((questionPool) => {
                  return (
                    <div className="col-lg-4 p-2 mt-2">
                      <div class="card TeacherQuestionPools">
                        <div class="card-body">
                          <h5 class="card-title">
                            {questionPool.questionPoolName}
                          </h5>
                          <p class="card-text">
                            Enrollment Key : {questionPool.enrollmentKey}
                          </p>
                          <div className="row rowCards">
                            <div className="col-lg-4 col-md-4 col-sm-4 colCards">
                              <button className="btn btn-success">
                                <Link
                                  to={`/qpool/${questionPool.questionPoolName}/${questionPool.id}`}
                                >
                                  <QueueIcon className="btnIcons" />
                                </Link>
                              </button>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 colCards">
                              <button
                                className="btn btn-warning"
                                onClick={() => {
                                  this.toggle();
                                  this.setState({ poolID: questionPool.id });
                                }}
                              >
                                <EditIcon />
                              </button>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 colCards">
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  this.deleteQuestionPoolByID(questionPool.id);
                                }}
                              >
                                <DeleteIcon />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <!-- Modal For Edit Question Pool Details--> */}
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>EDIT | QUESTION POOL</ModalHeader>
            <ModalBody>
              <TeacherEditQuestionPool dataPoolId={this.state.poolID} />
            </ModalBody>
          </Modal>
          {/* <!--End of Modal For Edit Question Pool Details--> */}
          {/* <!-- Modal For Delete Question --> */}
          <Modal
            isOpen={this.state.modalQuestionPoolAlert}
            toggle={this.toggleQuestionPoolAlert}
          >
            <ModalHeader toggle={this.toggleQuestionPoolAlert}>
              REMOVE OPTION
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
  teacherQuestionPoolList: state.questionPoolReducer.teacherQuestionPoolList,
  user: state.authReducer.user,
});

const mapActionToProps = {
  fetchallquestionpoolsbyteacher: actions.fetchAllByTeacher,
  deleteQuestionPoolByID: actions.DeleteQuestionPool,
};

export default connect(mapStateToProps, mapActionToProps)(TeacherQuestionPool);
