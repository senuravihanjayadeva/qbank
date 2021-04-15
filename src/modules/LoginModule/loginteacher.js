import React from "react";

const LoginTeacher = () => {
  return (
    <div>
      <div>
        <div>
          <div className="container">
            <form>
              <div class="form-group formDiv">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter username"
                />
              </div>
              <div class="form-group formDiv">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
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
    </div>
  );
};
export default LoginTeacher;
