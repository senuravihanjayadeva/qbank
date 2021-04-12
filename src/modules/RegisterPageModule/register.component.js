import React from "react";

import "./registerstyle.css";

export default function RegisterComponent() {
  return (
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
            <label>Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
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
            />
          </div>
          <div class="form-group formDiv">
            <label>Account Type</label>
            <select class="form-control">
              <option>Student</option>
              <option>Teacher</option>
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
