import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import resmueBuild from "../../assets/resume app.png";
import sportify from "../../assets/spoty.png";
import shivamportfolio from "../../assets/Screenshot (6).png";
import newsApp from '../../assets/newsapp.png'
import khanakhajan from '../../assets/khana khajana.png'
import dport from '../../assets/3d portfolio.png'
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          MY PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I have developed projects using JavaScript, HTML, CSS, React, Node.js,
          Express, MongoDB, Bootstrap, and Tailwind. As a MERN stack developer,
          I create dynamic and responsive frontends with React, styled using
          Bootstrap and Tailwind. On the backend, I use Node.js, Express, and
          MongoDB to build robust and efficient server-side applications.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      E-commerce Shopping Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/shivamch023/E-commerce"
                    target="__blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fronted app</span>
                  <img src={resmueBuild} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>

                  <span className="card-detail-badge">Javscript</span>
                  <span className="card-detail-badge">Tailwind</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Resume Builder App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="http://buildyourresumewithshivam.netlify.app"
                    target="__blank"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={sportify} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Spotify Clone music App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="http://clonespotifymus.netlify.app"
                    target="__blank"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fronted</span>
                  <img src={shivamportfolio} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Tailwind</span>
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Css</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Shivam Portfolio</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://shivamchauhanportfolio.netlify.app/"
                    target="__blank"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fronted-Backend</span>
                  <img src={newsApp} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Next.js</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Node js</span>
                  <span className="card-detail-badge">MongoDb</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">News App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/shivamch023/news-app"
                    target="__blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full-Stack</span>
                  <img src={khanakhajan} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Node js</span>
                  <span className="card-detail-badge">MongoDb</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Khana khajana App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/shivamch023/khanaKhajaana"
                    target="__blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fronted</span>
                  <img src={dport} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">MUI</span>
                  <span className="card-detail-badge">Canva</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">3D portfolio</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/shivamch023/3D-shivam-portfolio"
                    target="__blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
