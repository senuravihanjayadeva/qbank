import React, { Component } from "react";

class StudentSearchQuestionPoolList extends Component {
  constructor(props) {
    super(props);

    this.attempQuizFunction = this.attempQuizFunction.bind(this);

    this.state = {
      questionPoolID: "",
      questionPoolName: "",
      inputEnrollKey: "",
      enrollKey: "",
    };
  }

  attempQuizFunction(e) {
    e.preventDefault();
    let checkEnrollKey = this.state.inputEnrollKey.localeCompare(
      this.state.enrollKey
    );

    if (checkEnrollKey === 0) {
      localStorage.setItem("AttemptQuizObjID", this.state.questionPoolID);
      localStorage.setItem("AttemptQuizObjName", this.state.questionPoolName);
      localStorage.setItem("AttemptQuizObjisAttempting", true);
      window.location = `/student/quiz/${this.state.questionPoolName}/${this.state.questionPoolID}`;
    } else {
      alert("Wrong");
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.props.qpoolList.map((questionPool) => {
            return (
              <div className="col-lg-4 p-2 mt-2">
                <div class="card TeacherQuestionPools">
                  <div class="card-body">
                    <h5 class="card-title">{questionPool.questionPoolName}</h5>
                    <form id="myForm" onSubmit={this.attempQuizFunction}>
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Enrollment Key"
                          onChange={(e) => {
                            this.setState({
                              inputEnrollKey: e.target.value,
                              enrollKey: questionPool.enrollmentKey,
                              questionPoolID: questionPool.id,
                              questionPoolName: questionPool.questionPoolName,
                            });
                          }}
                        />
                      </div>
                      <div className="form-group mt-2">
                        <button type="submit" className="btn btn-primary">
                          Attempt quiz
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default StudentSearchQuestionPoolList;
