import React from "react";
import ProjectCarousel from "../../projects/ProjectCarousel";

const SectionMain = () => {
  return (
    <section class="main-wrap">
      <div class="main-inner">
        <div class="left-block">
          <div class="container">
            <h2>
              <span>Full</span>
              <span>Stack</span>
              <span>Developer</span>
            </h2>
            <div class="work-list">
              <ul>
                <li>
                  <a
                    href="https://github.com/AmandaRaphael"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/amanda-maricia-raphael-254951217/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/AmandaRapahel/pen/abyOaWe"
                    rel="noreferrer"
                    target="_blank"
                  >
                    codepen
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-content">
            <div class="banner-title">
              <div class="bg-block"></div>
            </div>
            <div class="photo-exhibition">
              <p class="exh-date">
                Education:{" "}
                <span class="text-red">
                  {" "}
                  Web development Graduate | Master's in Engineering ( VLSI
                  design )
                </span>
              </p>
              <div class="main-title">
                <h1>
                  <p>
                    <span>Hi,</span>
                  </p>
                  <p>
                    <span>
                      I am Amanda, a passionate Full Stack developer.{" "}
                    </span>
                  </p>
                  <p>
                    <span>
                      I love to develop beautiful and responsive applications.{" "}
                    </span>
                  </p>
                </h1>
                <p class="details">
                  <a href="javascript:void(0)">Projects</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="right-block">
          <div class="right-banner">
            <ProjectCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMain;
