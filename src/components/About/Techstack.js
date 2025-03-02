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
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Javascript</h6>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Typescript</h6>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Node Js</h6>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>React Js</h6>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Redux</h6>
        <SiRedux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h6>Express Js</h6>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>MongoDB</h6>
        <SiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h6>Python</h6>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>HTML</h6>
        <MdOutlineHtml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>CSS</h6>
        <MdOutlineCss />
      </Col>
    </Row>
  );
}

export default Techstack;
