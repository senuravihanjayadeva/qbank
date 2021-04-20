import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/AuthActions";

const LoginStudent = ({ ...props }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    const newStudent = {
      username,
      password,
    };

    console.log(newStudent);
    props.loginstudent(newStudent, () => {
      window.alert("Inserted Successfully");
    });
  };

  return (
    <div>
      <div>
        <div className="container">
          <form onSubmit={handleRegistration}>
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

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapActionToProps = {
  loginstudent: actions.login,
};

export default connect(mapStateToProps, mapActionToProps)(LoginStudent);
