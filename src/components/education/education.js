import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {
<section id="education">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Shiv Nadar university</h3>
                <p className="info">B.Tech in Computer Science <span>•</span> <em className="date">May 2020</em></p>
                <p>
                  During my time at the university I found myself in plenty of leadership roles - I have been a senator, headed the organization committee of various large scale events, taught junior students and taken workshops, been on the editorial board of the university e-newspaper and lots more.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>St. Peter's College, Agra</h3>
                <p className="info">Intermediate and High-School <span>•</span> <em className="date">April 2016</em></p>
                <p>
                  Twelve years of studying at a convent school helped mould my personality a lot. It was here that I developed my liking for debating, public speaking, writing and computer science.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
      </section>

      }
      </React.Fragment>
    );
  }
}