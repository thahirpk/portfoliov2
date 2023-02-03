import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abuthahir pk </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I am pursuing MCA  from Marian college kuttikkanam Idukki. I have done my BCA in MES college Vatakara,
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Badminton Player
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Table Tennis
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Thahir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
