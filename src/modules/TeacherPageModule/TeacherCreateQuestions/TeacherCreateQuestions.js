import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionActions";

const TeacherCreateQuestions = () => {
  const [questionText, setquestionText] = useState("");

  function onCreateQuestion(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div className="container mt-2 mb-2">
        <form onSubmit={onCreateQuestion}>
          <div className="form-group mt-2">
            <label>Question</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Question"
              onChange={(e) => {
                setquestionText(e.target.value);
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapActionToProps = {
  createquestion: actions.create,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TeacherCreateQuestions);
