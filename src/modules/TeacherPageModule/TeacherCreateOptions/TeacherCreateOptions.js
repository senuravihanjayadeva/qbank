import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../../actions/OptionActions";

const TeacherCreateOptions = ({ ...props }) => {
  const [optionText, setoptionText] = useState("");
  let { id } = useParams();

  //states for alerts
  const [createStatus, setcreateStatus] = useState("");
  const [createStatusAlert, setcreateStatusAlert] = useState("");
  const [createStatusMessage, setcreateStatusMessage] = useState("");

  function onCreateOption(e) {
    e.preventDefault();
    setcreateStatus(true);
    setcreateStatusAlert("alert alert-warning");
    setcreateStatusMessage("Please Wait...");

    const newOption = {
      question: {
        id: props.dataQuestionID,
      },
      optionText,
    };

    props.createoption(
      id,
      newOption,
      () => {
        setcreateStatusAlert("alert alert-success");
        setcreateStatusMessage("Option created successfully");
        setoptionText("");
        setTimeout(() => setcreateStatus(false), 2000);
      },
      () => {
        setcreateStatusAlert("alert alert-danger");
        setcreateStatusMessage("Something went wrong. Please try again.");
        setoptionText("");
        setTimeout(() => setcreateStatus(false), 2000);
      }
    );
  }

  return (
    <div>
      <div className="container mt-2 mb-2">
        <form onSubmit={onCreateOption}>
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
              value={optionText}
              placeholder="Enter an Option"
              onChange={(e) => {
                setoptionText(e.target.value);
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
  createoption: actions.createoption,
};

export default connect(null, mapActionToProps)(TeacherCreateOptions);
