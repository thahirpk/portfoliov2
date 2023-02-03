import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import eeg from "../../Assets/Projects/eeg.gif";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

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
              imgPath={leaf}
              isBlog={false}
              title="Implemention of CI / CD Pipeline"
              description="In this project our objective is to create a CI CD (Continuous Integration Continuous Deployment ) pipeline in AWS cloud infrastructure. Here we use Git as a version control system for managing code of our application. After coding we upload our code to a source code management system called GitHub. From there we take our code and test the code for any errors.This is achieved by continuous integration server called Jenkins.After testing we will give feedback to the developer. This is continuous integration section in a nutshell. Now we have to create an image file using the compiled code file.For this we have to use Docker."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Web hosting using a 3-Tier Architecture"
              description="To keep up with the pace of change required to deliver a compelling software product and to leverage emerging technologies, a three-tier architecture provides numerous benefits. It allows a developer the opportunity to extend, modularize, and be able to configure their application. The architecture shortens time to market and reduces the cost to integrate new features into software as a service (SaaS), Cloud, and on-premise applications."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Web Hosting using Multi-Tier Architecture"
              description="Our aim of the project is to solve a Multi-Tier Architecture which should be highly available, fault tolerance and scalable. We solve this using various services of AWS. For solving this architecture we use a private network called VPC (Virtual Private Network). Here we need a VPC with Private and Public subnets. After that create an Internet Gateway and attach it to the VPC to access public internet."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="VPC Implementation Using  Terraform and  Deployment on Different Cloud  Providers"
              description="I’m going to create a VPC,  public subnet, Internet gateway,  security group and  EC2. In addition, I need to create Custom Route Tables and associate them with subnets. All this infrastructure will be in create an AWS (or GCP, Azure)i will be creating a complete infrastructure in a secont using Terraform code which can run your whole application. "
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="Implementation of VPN Tunnel"
              description="In this project, you will learn how to Implementation of VPN tunnel between a VPC in AWS and virtual network in Azure. For a secured communication across the internet we go with VPN. Two offices can communicate through internet. But since the internet is a public media, there is no security for the data. In order to provide security, we can configure VPN gateway at both ends."
              link="#"
            />
          </Col>
          

        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
