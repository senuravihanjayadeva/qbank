import React, { Component } from "react";
import { connect } from "react-redux";
import * as answeractions from "../../../actions/CheckAnswerActions";

class StudentScoreBoard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAnsweredScoreRecords(
      this.props.user.id,
      this.props.quizID,
      () => {},
      () => {}
    );
  }
  render() {
    return (
      <div>
        <div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div class="alert alert-primary" role="alert">
                Score :- {this.props.scoreBoard.score} Marks
              </div>
              <h6></h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  userQuestionPoolScoredBoard:
    state.checkAnswerReducer.userQuestionPoolScoredBoard,
  questionPool: state.questionPoolReducer.currentQuestionPool,
});

const mapActionToProps = {
  fetchAnsweredScoreRecords: answeractions.fetchAnsweredScoreRecords,
};

export default connect(mapStateToProps, mapActionToProps)(StudentScoreBoard);
