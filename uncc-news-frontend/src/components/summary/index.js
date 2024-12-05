import React, { useEffect, useState } from "react";
import PieChart from "../chart/summary_pie";
import axios from "axios";
import { Col, Row, Spinner } from "reactstrap";
import { motion } from "motion/react";

const Summary = () => {
  const [data, setdata] = useState([]);
  const apiCall = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/chart/research_areas`
    );
    setdata(res.data.data);
  };
  useEffect(() => {
    apiCall();
  }, []);
  if (data.length === 0) {
    return (
      <div
        className="pt-5 my-5 d-flex justify-content-center"
        style={{ height: "80vh" }}
      >
        <Spinner color="success" />
      </div>
    );
  }
  return (
    <div>
      <Row className="m-auto my-5 pt-5">
        <Col md={5}>
          <div>
            <span className="text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <PieChart data={data} />
              </motion.div>
            </span>
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }}>
              <h3 className="fs-3 text-center fw-bold">
                Project Distribution By Research Area
              </h3>
            </motion.div>
          </div>
        </Col>
        <Col md={7}>
          <h3 className="fs-3 fw-bold">Summary</h3>
          <br />
          <p className="fs-5">
            At the University of North Carolina at Charlotte, research is at the
            heart of innovation and discovery. As a leading urban research
            institution, we are committed to addressing real-world challenges
            through groundbreaking studies and interdisciplinary collaboration.
            Our vibrant research community is fueled by dedicated faculty,
            ambitious students, and strategic partnerships with industries and
            organizations locally and globally.
            <br />
            <br />
            From pioneering advancements in artificial intelligence, renewable
            energy, and healthcare to transformative studies in education, urban
            planning, and social sciences, UNC Charlotte leads the way in
            shaping the future. With state-of-the-art facilities and access to
            competitive funding opportunities, our researchers drive impactful
            projects that address critical global issues.
            <br />
            <br />
            We recognize and support excellence by providing funding for select,
            high-potential research projects, ensuring that innovative ideas
            have the resources they need to thrive. Our initiatives empower
            scholars at all levels—from undergraduates to doctoral candidates—to
            contribute meaningfully to their fields while preparing for
            impactful careers. Explore our research achievements, connect with
            leading experts, and discover how UNC Charlotte drives progress and
            knowledge. Together, we are transforming lives and building a better
            tomorrow. Welcome to the cutting edge of innovation at UNC
            Charlotte.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Summary;
