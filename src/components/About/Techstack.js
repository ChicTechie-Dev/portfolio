import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  // DiGit,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { MdOutlineHtml } from "react-icons/md";
import { MdOutlineCss } from "react-icons/md";
import { SiRedux } from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineHtml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineCss />
      </Col>
    </Row>
  );
}

export default Techstack;
