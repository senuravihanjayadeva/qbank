import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/AuthActions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logoutUserFunc = this.logoutUserFunc.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn !== nextProps.isLoggedIn) {
      window.location = "/";
    }
  }

  logoutUserFunc() {
    this.props.logoutUser();
  }
  render() {
    return (
      <div>
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">
              MCQ MASTER
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/">
                  Home
                </a>

                {this.props.isLoggedIn ? (
                  this.props.user.roles[0] === "ROLE_USER" ? (
                    <a class="nav-item nav-link" href="/student">
                      {this.props.user.username}
                    </a>
                  ) : (
                    <a class="nav-item nav-link" href="/teacher">
                      {this.props.user.username}
                    </a>
                  )
                ) : (
                  ""
                )}
                {this.props.isLoggedIn ? (
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={this.logoutUserFunc}
                  >
                    Logout
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isLoggedIn: state.authReducer.isLoggedIn,
});

const mapActionToProps = {
  logoutUser: actions.logout,
};

export default connect(mapStateToProps, mapActionToProps)(Navbar);
