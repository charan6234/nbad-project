import React, { useState, useEffect } from "react";
import { Col, Row, Spinner } from "reactstrap";
import ReportsChart from "../chart/reports";
import axios from "axios";
import ReportMultiLineChart from "../chart/reports_multiline_chart";
import { motion } from "motion/react";

const Reports = () => {
  const [bar, setBar] = useState([]);
  const apiCall = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/chart/funding_trends`
      );
      setBar(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  if (bar.length === 0) {
    return (
      <div
        className="py-5 my-5 d-flex justify-content-center"
        style={{ height: "80vh" }}
      >
        <Spinner color="success" />
      </div>
    );
  }
  return (
    <div className="container">
      <Row className="mt-5 py-5 m-auto g-1">
        <Col md={8}>
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }}>
            <ReportsChart data={bar} />
          </motion.div>
        </Col>
        <Col md={4} className="d-flex align-self-center">
          <motion.div
            initial={{ x: 400 }}
            className="card report-card-shadow"
            animate={{ x: 100 }}
          >
            <h4 className="fs-2 p-2 text-center">
              Total <br />Funding by Research<br />Area<br /> (2019-2023)
            </h4>
          </motion.div>
        </Col>
        <Col md={4} className="d-flex align-self-center">
          <motion.div
            initial={{ x: -400 }}
            className="card report-card-shadow"
            animate={{ x: -50 }}
          >
            <h4 className="fs-2 p-2 text-center">
              Research Funding Trends (2019-2023)
            </h4>
          </motion.div>
        </Col>
        <Col md={8}>
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
            <ReportMultiLineChart data={bar} />
          </motion.div>
        </Col>
        <Col md={12}>
          <h3 className="heading">Report on UNCC Research</h3>
          <p className="fs-5">
            The data represents funding allocations for various research areas
            at the University of North Carolina, Charlotte (UNCC) from 2019 to
            2023. The university has invested consistently across diverse
            fields, showcasing its commitment to fostering innovation and
            academic excellence.
            <br />
            <br />
            Prominent areas such as <b>Artificial Intelligence</b> and{" "}
            <b>Cyber Security</b> received the highest funding, starting at
            $250,000 and $230,000 in 2019 and increasing to $330,000 and
            $310,000 by 2023, respectively. This reflects UNCC’s focus on
            emerging technologies and addressing critical challenges in modern
            computing and security.
            <br />
            <br />
            Other key fields like <b>Internet of Things</b> and{" "}
            <b>Electrical & Electronic Engineering</b> saw steady growth, with
            funding amounts reaching $280,000 and $260,000, respectively, by
            2023. Traditional sciences, including <b>Physics</b> and{" "}
            <b>Chemistry</b>, also received substantial support, with funding
            increases aligning with the university’s dedication to foundational
            research.
            <br />
            <br />
            The <b>Aerospace</b> and <b>Construction & Urban Planning</b>{" "}
            domains demonstrated moderate but consistent growth, highlighting
            UNCC’s contribution to infrastructure development and advanced
            engineering.
            <br />
            <br />
            Overall, the data showcases UNCC's strategic investment in
            interdisciplinary research, balancing advancements in technology
            with core sciences. By maintaining steady growth across these areas,
            the university underscores its role as a leading institution driving
            innovation and societal impact.
            <br />
            <br />
          </p>
        </Col>
        <Col md={12}>
            <p className="text-muted fs-5">
              Source:{" "}
              <code>
                {" "}
                <a href="https://www.charlotte.edu/research" target="blank">
                  <i>UNCC Research News Reports</i>
                </a>
              </code>
            </p>
          </Col>
      </Row>
    </div>
  );
};

export default Reports;
