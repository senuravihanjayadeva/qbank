import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/AuthActions";

import "./registerstyle.css";

function RegisterComponent({ ...props }) {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userRole, setuserRole] = useState("");

  //states for alerts
  const [registerStatus, setregisterStatus] = useState("");
  const [registerStatusAlert, setregisterStatusAlert] = useState("");
  const [registerStatusMessage, setregisterStatusMessage] = useState("");

  function onRegisterStudent(e) {
    e.preventDefault();

    setregisterStatus(true);
    setregisterStatusAlert("alert alert-warning");
    setregisterStatusMessage("Please Wait...");

    const role = [userRole];

    const newStudent = {
      username,
      email,
      password,
      role,
    };

    props.registerstudent(
      newStudent,
      () => {
        setregisterStatusAlert("alert alert-success");
        setregisterStatusMessage("Account created successfully");
      },
      () => {
        setregisterStatusAlert("alert alert-danger");
        setregisterStatusMessage(
          "Something went wrong. Please try again with different username"
        );
      }
    );
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={onRegisterStudent}>
          <div class="form-group formDiv">
            {registerStatus ? (
              <div class={registerStatusAlert} role="alert">
                {registerStatusMessage}
              </div>
            ) : (
              ""
            )}
          </div>
          <div class="form-group formDiv">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter username"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div class="form-group formDiv">
            <label>Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <small class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group formDiv">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div class="form-group formDiv">
            <label>Account Type</label>
            <select
              class="form-control"
              onChange={(e) => {
                setuserRole(e.target.value);
              }}
            >
              <option value="user">Student</option>
              <option value="mod">Teacher</option>
            </select>
          </div>
          <div class="form-group formDiv">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapActionToProps = {
  registerstudent: actions.register,
};

export default connect(null, mapActionToProps)(RegisterComponent);
