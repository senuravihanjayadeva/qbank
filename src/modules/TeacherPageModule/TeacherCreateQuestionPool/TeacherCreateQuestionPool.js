import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionPoolActions";

const TeacherCreateQuestionPool = ({ ...props }) => {
  const [questionPoolName, setquestionPoolName] = useState("");
  const [enrollmentKey, setenrollmentKey] = useState("");

  function onCreateQuestionPool(e) {
    e.preventDefault();

    const newQuestionPool = {
      user: {
        id: props.user.id,
      },
      questionPoolName,
      enrollmentKey,
    };

    console.log(newQuestionPool);

    props.createquestionpool(
      newQuestionPool,
      () => {
        alert("succeess");
      },
      () => {
        alert("fail");
      }
    );
  }

  return (
    <div className="container mt-2 mb-2">
      <form onSubmit={onCreateQuestionPool}>
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
            Create
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
