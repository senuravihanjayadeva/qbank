import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionActions";

class TeacherEditQuestion extends Component {
  constructor(props) {
    super(props);

    this.onUpdateQuestion = this.onUpdateQuestion.bind(this);

    this.state = {
      id: this.props.dataQuestion.id,
      questionText: this.props.dataQuestion.questionText,
      updatedStatus: false,
      updatedStatusAlert: "",
      updatedStatusMessage: "",
    };
  }

  onUpdateQuestion(e) {
    e.preventDefault();

    this.setState({
      updatedStatus: true,
      updatedStatusAlert: "alert alert-warning",
      updatedStatusMessage: "Please Wait...",
    });

    const updatedQuestion = {
      id: this.state.id,
      questionText: this.state.questionText,
    };

    this.props.updatequestion(
      updatedQuestion,
      () => {
        this.setState({
          updatedStatusAlert: "alert alert-success",
          updatedStatusMessage: "Question updated successfully",
        });
        setTimeout(
          () =>
            this.setState({
              updatedStatus: false,
            }),
          3000
        );
      },
      () => {
        this.setState({
          updatedStatusAlert: "alert alert-danger",
          updatedStatusMessage: "Something went wrong. Please try again.",
        });
        setTimeout(
          () =>
            this.setState({
              updatedStatus: false,
            }),
          3000
        );
      }
    );
  }

  render() {
    return (
      <div className="container mt-2 mb-2">
        <form onSubmit={this.onUpdateQuestion}>
          <div class="form-group formDiv">
            {this.state.updatedStatus ? (
              <div class={this.state.updatedStatusAlert} role="alert">
                {this.state.updatedStatusMessage}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mt-2">
            <label>Question Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.questionText}
              onChange={(e) => {
                this.setState({ questionText: e.target.value });
              }}
            />
          </div>
          <div className="form-group mt-2">
            <button type="submit" className="btn btn-primary">
              EDIT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapActionToProps = {
  updatequestion: actions.updateQuestion,
};

export default connect(null, mapActionToProps)(TeacherEditQuestion);
