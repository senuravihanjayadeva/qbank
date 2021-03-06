import React, { Component } from "react";
import { connect } from "react-redux";
import * as answeractions from "../../../actions/CheckAnswerActions";
import * as scoreboardactions from "../../../actions/ScoreBoardActions";

class StudentScoreBoard extends Component {
  componentDidMount() {
    this.props.finishedUserScoreBoard(
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
              {this.props.finishedScoreBoard.questionPoolName} | SCORE BOARD
              <hr />
              <div class="alert alert-primary" role="alert">
                Score :- {this.props.finishedScoreBoard.score} Marks
              </div>
              <div className="row">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Question</th>
                      <th scope="col">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.finishedScoreBoard &&
                      this.props.finishedScoreBoard.userScoreRecordList.map(
                        (questionScoreRecord, index) => {
                          let tableRowColor = "#03ab00";
                          if (questionScoreRecord.score === 0) {
                            tableRowColor = "#d1000a";
                          }
                          return (
                            <tr
                              style={{
                                backgroundColor: "#f0f0f0",
                              }}
                            >
                              <td>{++index}</td>
                              <td>{questionScoreRecord.questionName}</td>
                              <td
                                style={{
                                  backgroundColor: tableRowColor,
                                  color: "#fff",
                                }}
                              >
                                {" "}
                                {questionScoreRecord.score}
                              </td>
                            </tr>
                          );
                        }
                      )}
                  </tbody>
                </table>
              </div>
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
  finishedScoreBoard: state.scoreboardReducer.finishedUserScoreBoard,
});

const mapActionToProps = {
  fetchAnsweredScoreRecords: answeractions.fetchAnsweredScoreRecords,
  finishedUserScoreBoard: scoreboardactions.finishedUserScoreBoard,
};

export default connect(mapStateToProps, mapActionToProps)(StudentScoreBoard);
