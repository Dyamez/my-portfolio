import React, { Component } from "react";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <button
              className="mobile-btn"
              type="button"
              class="btn btn-primary"
              title="Show navigation"
            >
              Show navigation
            </button>
            <button
              className="mobile-btn"
              type="button"
              class="btn btn-secondary"
              href="#"
              title="Hide navigation"
            >
              Hide navigation
            </button>
            <ul id="nav" className="nav">
              <li className="current">
                <button
                  className="smoothscroll"
                  href="#home"
                  class="btn btn-info"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="smoothscroll"
                  href="#resume"
                  class="btn btn-success"
                >
                  Resume
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="smoothscroll"
                  href="#portfolio"
                  class="btn btn-warning"
                >
                  Works
                </button>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I am {resumeData.name}.</h1>
              <h3 style={{ color: "#468499", fontFamily: "sans-serif" }}>
                I am a {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothcontrol" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
