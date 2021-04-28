import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/AnswerActions";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class TeacherAnswerForQuestion extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      optionID: "",
      questionID: this.props.question.id,
      modal: false,
      createStatusAlert: "",
      createStatusMessage: "",
    };
  }

  addAnswer(id) {
    this.setState({
      modal: !this.state.modal,
      createStatusAlert: "alert alert-warning",
      createStatusMessage: "Please Wait...",
    });
    const newAnswer = {
      question: {
        id: this.state.questionID,
      },
      optionID: id,
    };
    this.props.addAnswer(
      newAnswer,
      () => {
        this.setState({
          createStatusAlert: "alert alert-success",
          createStatusMessage: "Answer Added Successfully",
        });
      },
      () => {
        this.setState({
          createStatusAlert: "alert alert-warning",
          createStatusMessage: "Something Went Wrong",
        });
      }
    );
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <div class="form-group">
              <label class="mb-2">
                {this.props.question.options.forEach((option) => {
                  if (
                    this.props.question.answer &&
                    this.props.question.answer.optionID === option.id
                  ) {
                    return (
                      <h6>
                        Answer :-
                        <span style={{ color: "rgb(0, 114, 180)" }}>
                          {" "}
                          {option.optionText}
                        </span>
                      </h6>
                    );
                  }
                })}
              </label>
              <select
                class="form-control"
                onChange={(e) => {
                  this.addAnswer(e.target.value);
                }}
              >
                <option>Select Answer</option>
                {this.props.question.options.map((option) => {
                  return <option value={option.id}>{option.optionText}</option>;
                })}
              </select>
            </div>
          </form>
        </div>
        {/* <!-- Modal For Create Answer  --> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>ADD ANSWER</ModalHeader>
          <ModalBody>
            {" "}
            <div class={this.state.createStatusAlert} role="alert">
              {this.state.createStatusMessage}
            </div>
          </ModalBody>
        </Modal>
        {/* <!--End of Modal For Create Answer --> */}
      </div>
    );
  }
}

const mapActionToProps = {
  addAnswer: actions.createanswer,
};

export default connect(null, mapActionToProps)(TeacherAnswerForQuestion);
