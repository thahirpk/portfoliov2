import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/thahir.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            
            
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="CLOUD ADMINISTRATOR"
              date="May 2020 - January 2021"
              
              content={[
                     "DataField Consultancy Services (DFCS) First Floor, Bismi Tower, Vadakara, Calicut, Kerala, India.",
              ]}

            />
            <Resumecontent
              title="JAVA AND ANDROID DEVELOPER "
              date="February 2017 - May 2018"
              content={[
                "Quest Innovative Solutions Pvt Ltd       Aydeed Complex, 1st Floor, YMCA Cross Rd, Kozhikode, Kerala 673001",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Master of Computer Applications [MCA] "
              date="2018 - 2020"
              content={[`Marian College Kuttikkanam (Autonomous) `]}
            />
            <Resumecontent
              title="Bachelor of Computer Application [BCA]"
              date="2013 - 2016"
              content={["MES College Vatakara"]}
            />
            <Resumecontent
              title="PLUS TWO KERALA BOARD  "
              date="2011 - 2013"
              content={["Jawaharlal Nehru Memmorial Government Higher Seconday School"]}
            />
            <h3 className="resume-title">Certification</h3>
            <Resumecontent
              title=""
              content={[
                `Red Hat Certified System Administrator (RHCSA®) `,
                `Oracle Application Express [APEX] foundation course`,
                "REDHAT D0180 Openshift [Course currently Entrolled]",
                "AWS Certified Solutions Architect - Associate [Course currently undergoing]",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
