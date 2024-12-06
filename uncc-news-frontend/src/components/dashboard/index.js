import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import "./index.css";
import chemical from "../../assets/chemical.webp";
import chemistryBanner from "../../assets/chemistry-banner.webp";
import constructionBanner from "../../assets/construction-banner.webp";
import cyber from "../../assets/cyber.webp";
import ai from "../../assets/ai.webp";
import construction from "../../assets/construction.webp";
import electrical from "../../assets/electronic.webp";
import iot from "../../assets/iot.webp";
import physics from "../../assets/physics.webp";
import aerospace from "../../assets/aerospace.webp";
import { Link } from "react-router";

const Dashboard = () => {
  useEffect(() => {
    return () => {
      window.localStorage.getItem("image")
      window.localStorage.getItem("tagLine")
      window.localStorage.getItem("title")
      window.localStorage.getItem("content")
    }
  }, [])
  return (
    <div>
      <div className="container my-5 pt-5">
        <Row className="g-3">
          <Col md={12}>
            <h3 className="heading"> Major Research Areas</h3>
          </Col>
          <Col md={3}>
            <Link
              to="/research/chemistry"
              style={{ textDecoration: "none" }}
            >
              <Card  >
                <div className="zoom">

                  <CardImg
                    className="image"
                    src={chemical}
                    top={true}
                    alt="Chemical"
                  />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Chemistry</CardTitle>
                  <CardText>
                    Chemistry Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/cyber-security"
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">

                  <CardImg src={cyber} className="image" alt="Cyber" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Cyber Security</CardTitle>

                  <CardText>
                    Cybersecurity Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/artificial-intelligence"
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">

                  <CardImg className="image" src={ai} alt="AI" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Artificial Intelligence</CardTitle>
                  <CardText>
                    Artificial Intelligence Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/construction"
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  <CardImg className="image" src={construction} alt="AI" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Construction & Urban Plan</CardTitle>

                  <CardText>
                    Construction & Urban Planning Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/electric-electronics"
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  <CardImg
                    className="image"
                    src={electrical}
                    alt="Electrical"
                    top
                  />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Electrical & Electronic</CardTitle>
                  <CardText>
                    Electrical & Electronic Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/physics"
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  <CardImg className="image" src={physics} alt="Physics" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Physics </CardTitle>
                  <CardText>
                    Physics Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/internet-of-things"
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  <CardImg className="image" src={iot} alt="iot" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Internet of Things </CardTitle>
                  <CardText>
                    IoT Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/aerospace"
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  <CardImg
                    className="image"
                    src={aerospace}
                    alt="aerospace"
                    top
                  />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Aerospace </CardTitle>
                  <CardText>
                    Aerospace Engineering Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={12}>
            <h3 className="heading">
              Research at University of North Carolina, Charlotte
            </h3>
            <p className="fs-5">
              <br />
              At the University of North Carolina at Charlotte, research fuels
              our mission to address global challenges and drive innovation. As
              a premier urban research institution, we blend academic rigor with
              practical solutions, creating meaningful impact across diverse
              disciplines. Our faculty, students, and partners collaborate to
              pioneer advancements that shape industries, communities, and
              lives.
              <br />
              <br />
              Our research spans groundbreaking areas like artificial
              intelligence, renewable energy, advanced healthcare solutions, and
              urban development, alongside transformative work in education,
              social sciences, and the arts. With cutting-edge facilities and
              resources, we empower scholars to explore bold ideas and solve
              complex problems. UNC Charlotte is committed to fostering a
              culture of excellence and inclusivity, where diverse perspectives
              inspire breakthrough discoveries. Recognizing outstanding
              potential, we offer competitive funding and institutional support
              for select high-impact projects, enabling our researchers to turn
              ideas into reality. From undergraduate students to seasoned
              experts, our vibrant research community is united in the pursuit
              of knowledge and innovation.
              <br />
              <br />
              Join us at UNC Charlotte to explore a world of opportunities,
              connect with visionary thinkers, and witness how our research is
              shaping the future. Together, we’re redefining the boundaries of
              discovery and making a lasting impact on society. Welcome to UNC
              Charlotte—where research meets possibility.
              <br />
            </p>
          </Col>
          <Col md={12}>
            <p className="text-muted fs-5">
              Source:{" "}
              <code>
                {" "}
                <a href="https://www.charlotte.edu/research" target="blank">
                  UNCC Research News
                </a>
              </code>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
