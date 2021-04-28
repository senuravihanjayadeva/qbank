import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/ScoreBoardActions";
import TeacherHeroScoreboardSection from "../TeacherHeroSection/TeacherHeroScoreboardSection";

class TeacherQuestionPoolScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizID: this.props.match.params.quizid,
      quizName: this.props.match.params.quizname,
    };
  }

  componentDidMount() {
    this.props.getUserScoreboardListForGivenQuiz(
      this.state.quizID,
      () => {},
      () => {}
    );
  }

  render() {
    return (
      <div>
        <TeacherHeroScoreboardSection />
        <div className="container">
          <h3>{this.state.quizName} | Student Score Boards</h3>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            {this.props.userScoreBoardsListByQuiz.length === 0 ? (
              <div>
                <div className="row">
                  <div class="alert alert-danger" role="alert">
                    No Records Available
                  </div>
                </div>
              </div>
            ) : (
              this.props.userScoreBoardsListByQuiz.map(
                (userScoreBoard, index) => {
                  return (
                    <div
                      class="accordion-item"
                      style={{
                        backgroundColor: "#f0f0f0",
                      }}
                    >
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed btn-warning"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${index}`}
                        >
                          {userScoreBoard.user.username + " : "}
                          {userScoreBoard.score} Marks
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${index}`}
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">No</th>
                                <th scope="col">Question</th>
                                <th scope="col">Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              {userScoreBoard.userScoreRecordList.map(
                                (question, index) => {
                                  let tableRowColor = "#03ab00";
                                  if (question.score === 0) {
                                    tableRowColor = "#d1000a";
                                  }
                                  return (
                                    <tr
                                      style={{
                                        backgroundColor: "#f0f0f0",
                                      }}
                                    >
                                      <td>{++index}</td>
                                      <td>{question.questionName}</td>
                                      <td
                                        style={{
                                          backgroundColor: tableRowColor,
                                          color: "#fff",
                                        }}
                                      >
                                        {" "}
                                        {question.score}
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
                  );
                }
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userScoreBoardsListByQuiz: state.scoreboardReducer.userScoreBoardsListByQuiz,
});

const mapActionToProps = {
  getUserScoreboardListForGivenQuiz: actions.getUserScoreboardListForGivenQuiz,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TeacherQuestionPoolScoreBoard);
