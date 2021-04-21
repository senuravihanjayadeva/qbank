import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionPoolActions";

const TeacherEditQuestionPool = ({ ...props }) => {
  const [id, setid] = useState("");
  const [questionPoolName, setquestionPoolName] = useState("");
  const [enrollmentKey, setenrollmentKey] = useState("");

  //states for alerts
  const [updateStatus, setupdateStatus] = useState("");
  const [updateStatusAlert, setupdateStatusAlert] = useState("");
  const [updateStatusMessage, setupdateStatusMessage] = useState("");

  useEffect(() => {
    if (props.dataPoolId != 0) {
      const updateToBeQuestionPool = props.teacherQuestionPoolList.find(
        (x) => x.id == props.dataPoolId
      );
      setid(updateToBeQuestionPool.id);
      setquestionPoolName(updateToBeQuestionPool.questionPoolName);
      setenrollmentKey(updateToBeQuestionPool.enrollmentKey);
    }
  }, []);

  function onEditQuestionPool(e) {
    e.preventDefault();

    setupdateStatus(true);
    setupdateStatusAlert("alert alert-warning");
    setupdateStatusMessage("Please Wait...");

    const updatedQuestionPool = {
      id,
      questionPoolName,
      enrollmentKey,
    };

    console.log(updatedQuestionPool);

    props.updatequestionpool(
      updatedQuestionPool,
      () => {
        setupdateStatusAlert("alert alert-success");
        setupdateStatusMessage("Updated successfully");
      },
      () => {
        setupdateStatusAlert("alert alert-danger");
        setupdateStatusMessage("Something went wrong. Please try again.");
      }
    );
  }

  return (
    <div className="container mt-2 mb-2">
      <form onSubmit={onEditQuestionPool}>
        <div class="form-group formDiv">
          {updateStatus ? (
            <div class={updateStatusAlert} role="alert">
              {updateStatusMessage}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mt-2">
          <label>Question Pool Name</label>
          <input
            type="text"
            className="form-control"
            value={questionPoolName}
            onChange={(e) => {
              setquestionPoolName(e.target.value);
            }}
          />
        </div>
        <div className="form-group mt-2">
          <label>Enrollment Key</label>
          <input
            type="text"
            className="form-control"
            value={enrollmentKey}
            onChange={(e) => {
              setenrollmentKey(e.target.value);
            }}
          />
        </div>
        <div className="form-group mt-2">
          <button type="submit" className="btn btn-primary">
            EDIT
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  teacherQuestionPoolList: state.questionPoolReducer.teacherQuestionPoolList,
});

const mapActionToProps = {
  updatequestionpool: actions.update,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TeacherEditQuestionPool);
