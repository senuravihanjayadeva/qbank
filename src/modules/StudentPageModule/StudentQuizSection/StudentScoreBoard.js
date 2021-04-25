import React, { Component } from "react";
import { connect } from "react-redux";
import * as answeractions from "../../../actions/CheckAnswerActions";

class StudentScoreBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalMarks: this.props.NoOfQuestions * 10,
    };
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
                Score :- {this.props.scoreBoard.score} out of{" "}
                {this.state.totalMarks}
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
});

const mapActionToProps = {
  fetchAnsweredScoreRecords: answeractions.fetchAnsweredScoreRecords,
};

export default connect(mapStateToProps, mapActionToProps)(StudentScoreBoard);
