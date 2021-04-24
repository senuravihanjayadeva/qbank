import React, { Component } from "react";
import QueueIcon from "@material-ui/icons/Queue";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class StudentSearchQuestionPoolList extends Component {
  constructor(props) {
    super(props);
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
                    <form id="myForm">
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Enrollment Key"
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
