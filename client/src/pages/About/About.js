import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import shivam_abt from "../../assets/shivam abt.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={shivam_abt} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                My name is <b>Shivam Chauhan</b>, and I have completed a{" "}
                <b>B.Tech</b> in <b>Computer Science Engineering</b> in 2024. I
                am a proficient <b>MERN stack developer</b> with expertise in
                both <b>frontend</b> and <b>backend development</b>. With a
                solid foundation in modern <b>web technologies</b>, I am
                passionate about creating <b>dynamic</b> and <b>responsive web
                applications</b> that provide seamless user experiences. My
                technical skills, combined with a keen eye for detail, enable me
                to deliver high-quality solutions that meet and exceed client
                expectations. <br></br>I enjoy tackling complex problems and continuously
                improving my skills to stay current with industry trends. My
                collaborative approach ensures effective teamwork and successful
                project outcomes. I am dedicated to delivering innovative
                solutions that drive business growth and enhance user
                engagement.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
