import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/AuthActions";

const LoginStudent = ({ ...props }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  //states for alerts
  const [loginStatus, setloginStatus] = useState("");
  const [loginStatusAlert, setloginStatusAlert] = useState("");
  const [loginStatusMessage, setloginStatusMessage] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    setloginStatus(true);
    setloginStatusAlert("alert alert-warning");
    setloginStatusMessage("Please Wait...");

    const loginStudentObject = {
      username,
      password,
    };

    props.loginstudent(
      loginStudentObject,
      () => {
        setloginStatusAlert("alert alert-success");
        setloginStatusMessage("Login successful");
        window.location = "/student";
      },
      () => {
        setloginStatusAlert("alert alert-danger");
        setloginStatusMessage(
          "Username or password incorrect. Please try again."
        );
      }
    );
  };

  return (
    <div>
      <div>
        <div className="container">
          <form onSubmit={handleRegistration}>
            <div class="form-group formDiv">
              {loginStatus ? (
                <div class={loginStatusAlert} role="alert">
                  {loginStatusMessage}
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
              <button type="submit" class="btn btn-primary">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapActionToProps = {
  loginstudent: actions.loginstudent,
};

export default connect(null, mapActionToProps)(LoginStudent);
