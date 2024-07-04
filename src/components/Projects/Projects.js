import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import artistry from "../../Assets/Projects/bb-artistry.png";
import matrimony from "../../Assets/Projects/bb-matrimony.png";
import queryhub from "../../Assets/Projects/bb-queryhub.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matrimony}
              isBlog={false}
              title="BB-Matrimony"
              description="Client-side for BB Matrimony, an online platform connecting people with potential life partners. Built with React, Tailwind CSS, shadcn ui, React Query, React Router, React Hook Form, React Toastify, and Stripe. Features secure user authentication, user/admin dashboard, biodata management, and responsive design."
              ghLink="https://github.com/SadatRiyad/PH-Assignment12-Client"
              demoLink="https://bb-matrimony.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={queryhub}
              isBlog={false}
              title="BB-QueryHub"
              description="BB-QueryHub is a web application built with React.js, firebase, mongoDB, Authentication, axios and tanstack-query. It is designed to allow users to add, update, and delete their queries and recommendations regarding alternative products. The system also enables users to view queries and recommendations from other users."
              ghLink="https://github.com/SadatRiyad/PH-Assignment11-Client"
              demoLink="https://PH-Assignment11-SadatRiyad.surge.sh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artistry}
              isBlog={false}
              title="BB-Artistry"
              description="Client-side for BB-Artistry, an Art & Craft Store website specializing in Painting and Drawing. Build with
              React.js for front-end development,
              React-simple-typewriter for dynamic text effects,
              React-tooltip for interactive tooltips,
              HTML5 , CSS3 & Tailwind for styling,
              Firebase Authentication for user management."
              ghLink="https://github.com/SadatRiyad/PH-Assignment10-Client"
              demoLink="https://ph-assignment10-sadatriyad.surge.sh"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
