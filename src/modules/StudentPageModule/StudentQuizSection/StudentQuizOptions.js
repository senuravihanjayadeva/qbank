import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/CheckAnswerActions";

class StudentQuizOptions extends Component {
  constructor(props) {
    super(props);
    this.onSubmitAnswer = this.onSubmitAnswer.bind(this);
    this.state = {
      user_id: this.props.user.id,
      question_pool_id: localStorage.getItem("AttemptQuizObjID"),
      question_id: "",
      answered_id: "",
    };
  }

  onSubmitAnswer(questionID, optionID) {
    const newAnswer = {
      user_id: this.state.user_id,
      question_pool_id: this.state.question_pool_id,
      question_id: questionID,
      answered_id: optionID,
    };

    console.log(newAnswer);

    this.props.checkAnswerForQuestion(
      newAnswer,
      () => {},
      () => {}
    );
  }
  render() {
    return (
      <div>
        {this.props.question.options.map((option) => {
          return (
            <div className="col-lg-12">
              <h6>
                <input
                  class="form-check-input"
                  type="radio"
                  name={this.props.question.id}
                  id={this.props.question.id}
                  onChange={() => {
                    this.onSubmitAnswer(this.props.question.id, option.id);
                  }}
                  disabled={this.props.isAnswered}
                />{" "}
                {option.optionText}
              </h6>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapActionToProps = {
  checkAnswerForQuestion: actions.checkAnswer,
};

export default connect(mapStateToProps, mapActionToProps)(StudentQuizOptions);
