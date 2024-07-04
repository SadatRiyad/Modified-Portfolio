import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/aa.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.3em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{marginTop:"20px"}}>
              Assalamu Alaikum,<br/> I'm <b className="purple">Sadat Riyad.</b> 👋🏻
            </p>
            <p className="home-about-body">
              I'm a <b className="purple">Front-End Web Developer</b> with a passion for developing
              scalable web applications and products. I have experience working
              with modern technologies and frameworks like <i><b className="purple">React , Node.js ,
              Express.js , and MongoDB .</b></i>
              <br />
              <br />I am passionate about coding and have learned various
              technologies over the years. My journey started with <b className="purple">C</b> and <b className="purple">C++ </b>
              programming.
              Currently, I'm exploring Backend Development and diving deeper
              into the <i><b className="purple">MERN stack .</b></i>
            </p>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ 
              <br/>
              <br/>
              Whenever possible, I also apply my passion
              for developing products with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js .</b>
              </i>
              <br />
              <br />
              I am always looking for opportunities to work on projects that
              challenge me and allow me to learn new things. I am a quick
              learner and a team player who loves to work in a collaborative
              environment. <br/>
              I'm currently looking for <b className="purple">Remote Internships</b> and <b className="purple">Job opportunities</b> in the
              field of <b className="purple">Web Development. </b><br/> <br/>
              <i>
                <b className="purple">
                  {" "}
                  Feel free to reach out to me if you have any opportunities for
                  me.
                </b>
              </i>
            </p>
            <p className="home-about-body">
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid myImg" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><b className="purple">FIND ME</b> ON</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:
                  sadatriyad.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/SadatRiyad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/SadatRiyad_dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/SadatRiyad/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/SadatRiyad.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/SadatRiyad.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
