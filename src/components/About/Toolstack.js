import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Git</h6>
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Visual studio</h6>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Postman</h6>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Slack</h6>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Jira</h6>
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Vercel</h6>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
