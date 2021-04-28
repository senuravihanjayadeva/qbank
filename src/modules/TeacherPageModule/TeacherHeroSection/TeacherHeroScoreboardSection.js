import React, { Component } from "react";
import Navbar from "../../../components/common/Navbar/navbar";
import ScoreboardImage from "../../../assets/images/TeacherPage/scoreboard.svg";

class TeacherHeroScoreboardSection extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="mb-5">
            <Navbar />
            <div className="row HeroSectionStudent">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img
                  src={ScoreboardImage}
                  className="img-fluid header-img"
                  alt="userwelcomeimg"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                <h4>
                  “Nothing is impossible. The word itself says ‘I’m Possible’”
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherHeroScoreboardSection;
