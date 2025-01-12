import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Evluate from "../../Assets/Projects/evluate.png";
import AssestPanda from "../../Assets/Projects/assestpanda.png";
import Nandani from "../../Assets/Projects/nandani.png";
import Augment from "../../Assets/Projects/augmentt.png";

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
              imgPath={Evluate}
              isBlog={false}
              title="Evluate"
              description="The AI-Based Applicant Response Assessment System aims to leverage artificial intelligence to evaluate 
and analyze applicants' responses during interviews and assessments. This project is designed to 
overcome the burden on interviewers by automating the evaluation process, and to provide flexibility 
for applicants to complete assessments from anywhere. By utilizing advanced AI techniques, this 
system ensures accurate, consistent, and efficient assessment of applicant responses."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://evluate.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AssestPanda}
              isBlog={false}
              title="Assest Panda"
              description="Asset Panda has designed an asset-tracking platform that’s far ahead of the competition when it comes 
to technology, flexibility, power, and ease of use. It’s the simplest tool you’ll find on the market, and 
yet the most versatile and cost-effective. Based on free mobile iOS and Android apps that sync with the 
cloud, Asset Panda requires nothing but the smartphones and tablets employees already carry. The AI Based Applicant Response Assessment System aims to leverage artificial intelligence to evaluate and 
analyze applicants' responses during interviews and assessments. This project is designed to overcome 
the burden on interviewers by automating the evaluation process, and to provide flexibility for 
applicants to complete assessments from anywhere. By utilizing advanced AI techniques, this system 
ensures accurate, consistent, and efficient assessment of applicant responses."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.assetpanda.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nandani}
              isBlog={false}
              title="Nandani Enterprises"
              description="The overall project covers a wide range of features like login, QR code scanner, user (creation, list, 
detail), attendance reports (daily, monthly), payment reports, station List / QR generator."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink=""
              isGit={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Augment}
              isBlog={false}
              title="Augmentt"
              description="Augmentt is a SaaS Security Management platform for MSPs that gives MSPs visibility across all end-users to 
easily audit, protect and detect security threats facing the Microsoft environment and manage SaaS. "
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.augmentt.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
