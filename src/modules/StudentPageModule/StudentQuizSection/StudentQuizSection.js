import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionPoolActions";
import * as answeractions from "../../../actions/CheckAnswerActions";
import * as scoreboardactions from "../../../actions/ScoreBoardActions";
import StudentQuizOptions from "./StudentQuizOptions";
import StudentScoreBoard from "./StudentScoreBoard";
import StudentQuizHeroSection from "../StudentHeroSection/StudentQuizHeroSection";

class StudentQuizSection extends Component {
  constructor(props) {
    super(props);
    this.finishAttempt = this.finishAttempt.bind(this);
    this.state = {
      AttemptQuizObjID: localStorage.getItem("AttemptQuizObjID"),
      AttemptQuizObjisAttempting: localStorage.getItem(
        "AttemptQuizObjisAttempting"
      ),
      AttemptQuizObjName: localStorage.getItem("AttemptQuizObjName"),
      finishStatus: false,
      finishStatusAlert: "",
      finishStatusMessage: "",
    };
  }

  componentDidMount() {
    if (
      !this.state.AttemptQuizObjisAttempting ||
      this.state.AttemptQuizObjID !== this.props.match.params.quizid
    ) {
      window.location = "/student";
    } else {
      this.props.fetchQuestionPoolByID(this.state.AttemptQuizObjID);
      this.props.fetchAnsweredQuestionIDs(
        this.props.user.id,
        this.state.AttemptQuizObjID,
        () => {},
        () => {}
      );
      this.props.getCurrentUserScoreBoard(
        this.props.user.id,
        this.state.AttemptQuizObjID,
        () => {},
        () => {}
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.checkAnswer !== nextProps.checkAnswer) {
      this.props.fetchAnsweredQuestionIDs(
        this.props.user.id,
        this.state.AttemptQuizObjID,
        () => {},
        () => {}
      );
    }

    if (
      this.props.checkAnswer !== nextProps.checkAnswer ||
      this.props.isFinished !== nextProps.isFinished
    ) {
      this.props.getCurrentUserScoreBoard(
        this.props.user.id,
        this.state.AttemptQuizObjID,
        () => {},
        () => {}
      );
    }
  }

  finishAttempt() {
    this.props.finishQuiz(
      this.props.user.id,
      this.state.AttemptQuizObjID,
      () => {
        localStorage.removeItem("AttemptQuizObjID");
        localStorage.removeItem("AttemptQuizObjisAttempting");
        localStorage.removeItem("AttemptQuizObjName");
        this.setState({
          finishStatus: true,
          finishStatusAlert: "alert alert-success",
          finishStatusMessage: "",
        });
      },
      () => {
        this.setState({
          finishStatus: true,
          finishStatusAlert: "alert alert-danger",
          finishStatusMessage: "Something went wrong",
        });
      }
    );
  }

  render() {
    return (
      <div>
        <StudentQuizHeroSection />

        <div className="container">
          <div>
            <h2>
              {this.props.questionPool
                ? this.props.questionPool.questionPoolName
                : ""}
            </h2>
            <hr />
          </div>
          <div>
            {this.props.questionPool !== ""
              ? this.props.questionPool.questions &&
                this.props.questionPool.questions.map((question, index) => {
                  return (
                    <div className="col-lg-12">
                      <div className="card cardDivQuestions">
                        {" "}
                        <div className="row">
                          <div>
                            {" "}
                            <h4>
                              ( {++index} ) {question.questionText}{" "}
                            </h4>
                          </div>
                        </div>
                        {this.props.answeredQuestions.includes(question.id) ||
                        this.props.currentUserScoreBoard.finished ? (
                          <>
                            <StudentQuizOptions
                              question={question}
                              isAnswered={true}
                            />
                            {this.props.answeredQuestions.includes(
                              question.id
                            ) ? (
                              <div class="alert alert-success" role="alert">
                                Answer submitted
                              </div>
                            ) : (
                              <div class="alert alert-danger" role="alert">
                                Not Answered
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            <StudentQuizOptions
                              question={question}
                              isAnswered={false}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>

          <div>
            {this.props.currentUserScoreBoard.finished ? (
              <button
                class="btn btn-warning"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseViewResult"
                aria-expanded="false"
                aria-controls="multiCollapseViewResult"
              >
                VIEW RESULT
              </button>
            ) : (
              <button className="btn btn-primary" onClick={this.finishAttempt}>
                Finish Attempt
              </button>
            )}

            {this.props.currentUserScoreBoard.finished ? (
              <div class="collapse multi-collapse" id="multiCollapseViewResult">
                <StudentScoreBoard
                  quizID={this.state.AttemptQuizObjID}
                  scoreBoard={this.props.currentUserScoreBoard}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  checkAnswer: state.checkAnswerReducer.checkAnswer,
  questionPool: state.questionPoolReducer.currentQuestionPool,
  answeredQuestions: state.checkAnswerReducer.answeredQuestions,
  isFinished: state.scoreboardReducer.isFinished,
  currentUserScoreBoard: state.scoreboardReducer.currentUserScoreBoard,
});

const mapActionToProps = {
  finishQuiz: scoreboardactions.finishQuiz,
  getCurrentUserScoreBoard: scoreboardactions.getCurrentUserScoreBoard,
  fetchQuestionPoolByID: actions.fetchById,
  fetchAnsweredQuestionIDs: answeractions.fetchAnsweredQuestionIDs,
};

export default connect(mapStateToProps, mapActionToProps)(StudentQuizSection);
