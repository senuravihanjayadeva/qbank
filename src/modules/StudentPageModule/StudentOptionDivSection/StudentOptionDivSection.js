import React, { Component } from "react";
import StudentSearchTeacherQuestionPools from "../StudentSearchTeacherQuestionPools/StudentSearchTeacherQuestionPools";

class StudentOptionDivSection extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 p-2 mt-2">
                <div class="card TeacherOptionCards">
                  <div class="card-body">
                    <h5 class="card-title">Question Pool</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button
                      className="btn btn-warning"
                      data-bs-toggle="collapse"
                      data-bs-target="#multiCollapseCreateQuestionPool"
                      aria-expanded="false"
                      aria-controls="multiCollapseCreateQuestionPool"
                    >
                      Create New Pool
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-2 mt-2">
                <div class="card TeacherOptionCards">
                  <div class="card-body">
                    <h5 class="card-title">Question Pool</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn btn-warning">Create New Pool</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-2 mt-2">
                <div class="card TeacherOptionCards">
                  <div class="card-body">
                    <h5 class="card-title">Question Pool</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn btn-warning">Create New Pool</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Collapse Section */}
          <div className="container mt-2">
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="collapse multi-collapse "
                  id="multiCollapseCreateQuestionPool"
                >
                  <div>
                    <StudentSearchTeacherQuestionPools />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Collapse Section */}
        </div>
      </div>
    );
  }
}

export default StudentOptionDivSection;
