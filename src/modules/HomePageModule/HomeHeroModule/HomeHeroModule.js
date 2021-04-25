import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterPageComponent from "../../../pages/RegisterPage.component";
import LoginPage from "../../../pages/LoginPage.component";
import Navbar from "../../../components/common/Navbar/navbar";
import "./HomeHeroModule.css";
import ExamLogo from "../../../assets/images/HomePage/examlogo.svg";

export class HomeHeroModule extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="mb-5">
          <div className="overlay">
            <div className="hero-section-bg" />
            <Navbar />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 p-5">
                <h1 className="mb-5">QUIZ MASTER</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                {this.props.user ? (
                  ""
                ) : (
                  <div className="row">
                    <div className="col-lg-2 col-sm-6 mt-2 mb-2">
                      <LoginPage />
                    </div>
                    <div className="col-lg-2 col-sm-6 mt-2 mb-2">
                      <RegisterPageComponent />
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 text-center">
                <img
                  src={ExamLogo}
                  className="img-fluid header-img d-none d-md-block"
                  alt="examlogoimg"
                />
              </div>
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

export default connect(mapStateToProps, null)(HomeHeroModule);
