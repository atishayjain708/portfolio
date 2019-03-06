import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile.jpeg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Hi, I am Atishay Jain - a Computer Science engineering Junior year student. I have experience working with Python and using and deploying end to end solutions, mostly using web as the platform. Currently I’m working in and increasing my knowledge of the machine learning and data-science domain. I have experience working with Django, Docker, using Jekyll templates and Tensorflow.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Atishay Jain</span><br />
                  <span>1600 Shiv Nadar University<br />
                    Gautam Buddha Nagar, UP - 203207.
                  </span><br />
                  <span>+91-8791355940</span><br />
                  <span>atishayjain708@gmail.com</span>
                  <span>aj771@snu.edu.in</span>

                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> 
      }
      </React.Fragment>
    );
  }
}