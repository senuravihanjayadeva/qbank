import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="FooterBackground">
        <div class="container-fluid">
          <div class="card cardFooter">
            <div class="heading text-center">
              <div class="head1">QUIZ MASTER</div>
              <p class="bdr"></p>
            </div>
            <div class="card-body">
              <div class="row m-0 pt-5">
                <div class="card col-12 col-md-3 cardFooter">
                  <div class="card-content">
                    {" "}
                    <i class="fas fa-hand-holding-usd fa-3x"></i>
                    <div class="card-title"> RECHARGE REPEAT CUSTOMER </div>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing
                      </small>
                    </p>
                    <div class="learn-more">
                      <p>
                        {" "}
                        <small>
                          {" "}
                          LEARN MORE{" "}
                          <label>
                            <i class="fas fa-angle-right"></i>
                          </label>{" "}
                        </small>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card col-12 col-md-3 cardFooter">
                  <div class="card-content">
                    {" "}
                    <i class="far fa-handshake fa-3x"></i>
                    <div class="card-title"> ACCEPT ELECTRONIC CHECK </div>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing
                      </small>
                    </p>
                    <div class="learn-more">
                      <p>
                        {" "}
                        <small>
                          {" "}
                          LEARN MORE{" "}
                          <label>
                            <i class="fas fa-angle-right"></i>
                          </label>{" "}
                        </small>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card col-12 col-md-3 cardFooter">
                  <div class="card-content">
                    {" "}
                    <i class="fas fa-mobile-alt fa-3x"></i>
                    <div class="card-title"> STREAMLINE PHONE PAYMENTS </div>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing
                      </small>
                    </p>
                    <div class="learn-more">
                      <p>
                        {" "}
                        <small>
                          {" "}
                          LEARN MORE{" "}
                          <label>
                            <i class="fas fa-angle-right"></i>
                          </label>{" "}
                        </small>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card col-12 col-md-3 cardFooter">
                  <div class="card-content">
                    {" "}
                    <i class="fas fa-user-secret fa-3x"></i>
                    <div class="card-title">
                      {" "}
                      STAY
                      <br /> SECURE{" "}
                    </div>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing
                      </small>
                    </p>
                    <div class="learn-more">
                      <p>
                        {" "}
                        <small>
                          {" "}
                          LEARN MORE{" "}
                          <label>
                            <i class="fas fa-angle-right"></i>
                          </label>{" "}
                        </small>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer row m-0">
              <p>
                {" "}
                <label>
                  {" "}
                  <i class="fas fa-phone fa-rotate-90 text-primary"></i>{" "}
                </label>{" "}
                800-601-0230
              </p>
              <div>
                <p>
                  {" "}
                  <small class="follow-text">
                    FOLLOW US ON SOCIAL MEDIA
                  </small>{" "}
                  <label class="footer-right">
                    {" "}
                    <i class="fab fa-instagram"></i>{" "}
                    <i class="fab fa-facebook-square"></i>{" "}
                    <i class="fab fa-linkedin"></i>{" "}
                    <i class="fab fa-twitter-square"></i>{" "}
                  </label>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
