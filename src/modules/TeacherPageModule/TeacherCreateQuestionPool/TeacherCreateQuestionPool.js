import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionPoolActions";

const TeacherCreateQuestionPool = ({ ...props }) => {
  const [questionPoolName, setquestionPoolName] = useState("");
  const [enrollmentKey, setenrollmentKey] = useState("");

  //states for alerts
  const [createStatus, setcreateStatus] = useState("");
  const [createStatusAlert, setcreateStatusAlert] = useState("");
  const [createStatusMessage, setcreateStatusMessage] = useState("");

  function onCreateQuestionPool(e) {
    e.preventDefault();

    setcreateStatus(true);
    setcreateStatusAlert("alert alert-warning");
    setcreateStatusMessage("Please Wait...");

    const newQuestionPool = {
      user: {
        id: props.user.id,
      },
      questionPoolName,
      enrollmentKey,
    };

    props.createquestionpool(
      newQuestionPool,
      () => {
        setcreateStatusAlert("alert alert-success");
        setcreateStatusMessage("Question Pool created successfully");
      },
      () => {
        setcreateStatusAlert("alert alert-danger");
        setcreateStatusMessage("Something went wrong. Please try again.");
      }
    );
  }

  return (
    <div className="container mt-2 mb-2">
      <form id="myForm" onSubmit={onCreateQuestionPool}>
        <div class="form-group formDiv">
          {createStatus ? (
            <div class={createStatusAlert} role="alert">
              {createStatusMessage}
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
            placeholder="Enter Question Pool Name"
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
            placeholder="Enter Enrollment Key"
            onChange={(e) => {
              setenrollmentKey(e.target.value);
            }}
          />
        </div>
        <div className="form-group mt-2">
          <button type="submit" className="btn btn-primary">
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapActionToProps = {
  createquestionpool: actions.create,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TeacherCreateQuestionPool);
