import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionActions";
import "./TeacherCreateQuestions.css";

const TeacherCreateQuestions = ({ ...props }) => {
  const [questionText, setquestionText] = useState("");

  //states for alerts
  const [createStatus, setcreateStatus] = useState("");
  const [createStatusAlert, setcreateStatusAlert] = useState("");
  const [createStatusMessage, setcreateStatusMessage] = useState("");

  function onCreateQuestion(e) {
    e.preventDefault();

    setcreateStatus(true);
    setcreateStatusAlert("alert alert-warning");
    setcreateStatusMessage("Please Wait...");

    const newQuestion = {
      questionPool: {
        id: props.poolId,
      },
      questionText,
    };

    props.createquestion(
      newQuestion,
      () => {
        setquestionText("");
        setcreateStatusAlert("alert alert-success");
        setcreateStatusMessage("Question created successfully");
        setTimeout(() => setcreateStatus(false), 3000);
      },
      () => {
        setquestionText("");
        setcreateStatusAlert("alert alert-danger");
        setcreateStatusMessage("Something went wrong. Please try again.");
        setTimeout(() => setcreateStatus(false), 3000);
      }
    );
  }
  return (
    <div>
      <div className="container mt-2 mb-2 p-2 divCreateQuestion">
        <form onSubmit={onCreateQuestion}>
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
            <input
              type="text"
              className="form-control"
              placeholder="Add Question"
              value={questionText}
              onChange={(e) => {
                setquestionText(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-2">
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapActionToProps = {
  createquestion: actions.create,
};

export default connect(null, mapActionToProps)(TeacherCreateQuestions);
