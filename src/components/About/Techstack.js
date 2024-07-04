import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus, CgFigma } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJqueryLogo,
  DiWordpress,
  DiIllustrator,
} from "react-icons/di";
import {
  SiFirebase,
  SiTailwindcss,
  SiShopify,
  SiGithub,
  SiAdobephotoshop,
  SiAdobexd,
  SiCanva,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
      <h5
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          textAlign: "left",
          fontSize: "24px",
        }}
      >
        Programming Languages:
      </h5>
      <Col xs={4} md={2} className="tech-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
            clip-rule="evenodd"
          ></path>
          <path
            fill=""
            fill-rule="evenodd"
            d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <h5
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          textAlign: "left",
          fontSize: "24px",
        }}
      >
        Web Technologies:
      </h5>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5></DiHtml5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="white"
            d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
          ></path>
          <path
            fill="white"
            d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
          ></path>
        </svg>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
      </Col>

      <h5
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          textAlign: "left",
          fontSize: "24px",
        }}
      >
        Design Tools:
      </h5>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiAdobexd/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>

      <h5
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          textAlign: "left",
          fontSize: "24px",
        }}
      >
        Additional Skills:
      </h5>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.33333,5.33333)">
              <path d="M30.7,7.27l-2.37,1.83c-1.605,-2.067 -4.068,-3.209 -6.697,-3.092c-4.32,0.192 -7.633,3.945 -7.633,8.269v9.143l10.5,6.12l-1,1.72l-11.706,-6.827c-0.492,-0.287 -0.794,-0.813 -0.794,-1.382v-8.687c0,-6.264 5.129,-11.574 11.39,-11.357c3.279,0.113 6.29,1.656 8.31,4.263z"></path>
              <path d="M12.861,9.833l0.4,2.967c-2.592,0.357 -4.813,1.919 -6.026,4.254c-1.994,3.837 -0.4,8.582 3.345,10.745l7.918,4.571l10.55,-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282 -1.101,0.281 -1.594,-0.003l-7.523,-4.343c-5.426,-3.133 -7.46,-10.23 -4.142,-15.543c1.738,-2.784 4.58,-4.619 7.847,-5.065z"></path>
              <path d="M6.161,26.563l2.77,1.137c-0.987,2.423 -0.745,5.128 0.671,7.346c2.326,3.645 7.233,4.638 10.977,2.476l7.918,-4.572l0.05,-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569 -0.307,1.094 -0.8,1.379l-7.523,4.343c-5.425,3.132 -12.588,1.345 -15.531,-4.185c-1.541,-2.897 -1.71,-6.275 -0.463,-9.328z"></path>
              <path d="M17.3,40.73l2.37,-1.83c1.605,2.067 4.068,3.209 6.697,3.092c4.32,-0.192 7.633,-3.945 7.633,-8.269v-9.143l-10.5,-6.12l1,-1.72l11.706,6.827c0.492,0.287 0.794,0.813 0.794,1.382v8.687c0,6.264 -5.13,11.574 -11.39,11.358c-3.279,-0.114 -6.29,-1.657 -8.31,-4.264z"></path>
              <path d="M35.139,38.167l-0.4,-2.967c2.592,-0.357 4.813,-1.919 6.026,-4.254c1.994,-3.837 0.4,-8.582 -3.345,-10.745l-7.918,-4.571l-10.55,6.033l-0.99,-1.726l11.765,-6.724c0.494,-0.282 1.101,-0.281 1.594,0.003l7.523,4.343c5.425,3.132 7.459,10.229 4.141,15.543c-1.737,2.784 -4.579,4.619 -7.846,5.065z"></path>
              <path d="M41.839,21.437l-2.77,-1.137c0.987,-2.423 0.745,-5.128 -0.671,-7.346c-2.326,-3.645 -7.233,-4.638 -10.977,-2.476l-7.918,4.572l-0.05,12.153l-1.99,-0.006l0.059,-13.551c0.002,-0.569 0.307,-1.094 0.8,-1.379l7.523,-4.343c5.425,-3.132 12.588,-1.345 15.531,4.185c1.541,2.897 1.71,6.275 0.463,9.328z"></path>
            </g>
          </g>
        </svg>
      </Col>
    </Row>
  );
}

export default Techstack;
