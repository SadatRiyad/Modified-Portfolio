import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sadat Riyad </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />I have completed <span className="purple">Hafezi</span>{" "}
            (Quran), <span className="purple">Dhakil</span> (SSC) and{" "}
            <span className="purple">Alim</span> (HSC) from Madrasah.
            <br />
            Currently I am studing <span className="purple">BSC </span>in{" "}
            <span className="purple">CSE</span> at Dhaka International
            University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <span className="purple">
                <ImPointRight />
              </span>{" "}
              Playing Games
            </li>
            <li className="about-activity">
              <span className="purple">
                <ImPointRight />
              </span>{" "}
              Exploring New Tech
            </li>
            <li className="about-activity">
              <span className="purple">
                <ImPointRight />
              </span>{" "}
              Travelling
            </li>
          </ul>

          <div style={{backgroundColor:"purple", padding:"20px 10px 10px", marginTop: "50px", borderRadius:"20px", }}>
            <p>
              "Explore deeply, impact profoundly."{" "}
            </p>
            <footer className="blockquote-footer">
              <b>Sadat Riyad</b>
            </footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
