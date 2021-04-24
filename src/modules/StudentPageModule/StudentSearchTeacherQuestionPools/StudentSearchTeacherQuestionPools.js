import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/TeacherActions";
import StudentSearchQuestionPoolList from "./StudentSearchQuestionPoolList";

class StudentSearchTeacherQuestionPools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedQuestionPool: [],
      searchStatus: false,
      searchStatusAlert: "",
      searchStatusMessage: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllQuestionPoolsByUserName();
  }

  searchQuestionPools(username) {
    this.setState({
      searchStatus: true,
      searchStatusAlert: "alert alert-danger",
      searchStatusMessage: "No Results",
      searchedQuestionPool: [],
    });

    this.props.allTeachersQuestionPools.map((teacher) => {
      let checkUsername = teacher.username.localeCompare(username);
      if (checkUsername === 0) {
        if (teacher.questionPools.length > 0) {
          this.setState({
            searchedQuestionPool: teacher.questionPools,
            searchStatusAlert: "alert alert-success",
            searchStatusMessage: `Found ${teacher.questionPools.length} results`,
          });
        } else {
          setTimeout(
            () =>
              this.setState({
                searchStatus: false,
              }),
            6000
          );
        }
      } else {
        setTimeout(
          () =>
            this.setState({
              searchStatus: false,
            }),
          6000
        );
      }
    });
  }
  render() {
    return (
      <div>
        <div className="container mt-2 mb-2  cardCreateQuestionPool p-4 pt-2 pb-4 pr-2 ">
          <form id="myForm">
            <div class="form-group formDiv">
              {this.state.searchStatus ? (
                <div class={this.state.searchStatusAlert} role="alert">
                  {this.state.searchStatusMessage}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="SEARCH BY TEACHER USERNAME"
                onChange={(e) => {
                  this.searchQuestionPools(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div>
          <StudentSearchQuestionPoolList
            qpoolList={this.state.searchedQuestionPool}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allTeachersQuestionPools:
    state.teacherReducer.teacherQuestionPoolListByUsername,
});

const mapActionToProps = {
  fetchAllQuestionPoolsByUserName: actions.fetchAllQuestionPoolsByUserName,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(StudentSearchTeacherQuestionPools);
