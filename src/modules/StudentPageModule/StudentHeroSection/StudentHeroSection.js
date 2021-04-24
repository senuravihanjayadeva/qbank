import React, { Component } from "react";
import { connect } from "react-redux";
import "./StudentHeroSection.css";
import WelcomeImage from "../../../assets/images/StudentPage/welcome.svg";
import Navbar from "../../../components/common/Navbar/navbar";

class StudentHeroSection extends Component {
  render() {
    return (
      <div>
        <div className="mb-5">
          <Navbar />
          <div className="row HeroSectionStudent">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="img-fluid header-img"
                alt="userwelcomeimg"
                src={WelcomeImage}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-5">
              <h3>Hello {this.props.user.username}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps, null)(StudentHeroSection);
