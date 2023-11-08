import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              imgPath={chatify}
              isBlog={false}
              title="Not taker"
              description="A app use to make and delete notes via usage of a site and being save locally"
              ghLink="https://github.com/DimitrBoldon/NoteTaker"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Employee tracker"
              description="his app is a employee tracker application that allows to update a employee, roles and departments"
              ghLink="https://github.com/DimitrBoldon/Employee-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Book search"
              description="Created a book search using java, react and schemas. Able to search for books in your local saves"
              ghLink="https://github.com/DimitrBoldon/book-search"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Track"
              description="This work being a group project done with my fellow coders, using all we learn for site track app built from the ground up"
              ghLink="https://github.com/rgadewar/track"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;