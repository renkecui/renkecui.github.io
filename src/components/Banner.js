import "../Styles/Banner.css";
import React, { useState, useEffect } from "react";
import profileImg from "../assets/Renke_at_Oia.webp";
import linkedinLogo from "../assets/LI-In-Bug.png";
import githubLogo from "../assets/github-mark.svg";
import { Col, Container, Row, Button } from "react-bootstrap";
const Banner = () => {
  const openResume = () => {
    window.open(`${process.env.PUBLIC_URL}/assets/Renke_Resume.pdf`, "_blank", "noopener,noreferrer");
  };


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="Home"
      className={`banner ${scrolled ? "banner-scrolled" : ""}`}
    >
      <Container>
        <Row>
          <Col className="banner-text d-flex align-items-center">
            <div>
              <h1 className="banner-name">Renke Cui</h1>
              <p className="banner-intro">
                I'm a senior at Northeastern University majoring in{" "}
                <strong>Computer Engineering and Computer Science</strong> with
                a minor in Business administration. I’m driven by the challenge
                of applying technology to create solutions that make life
                better.
              </p>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Button className="custom-button" onClick={openResume}>
                  Resume
                </Button>
                <a
                  href="https://github.com/renkecui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center"
                >
                  <img src={githubLogo} alt="GitHub" className="Icon-Links" />
                </a>
                <a
                  href="https://www.linkedin.com/in/renkecui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center"
                >
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="Icon-Links  LinkedIn-Icon"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <img src={profileImg} alt="Renke Cui standing in Oia, Santorini" className="banner-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
