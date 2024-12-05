import React from "react";
import "./index.css";
import { Col, Row } from "reactstrap";
import { FaBuilding } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer pt-4 dark">
      <Row className="m-auto text-center">
        <Col md={12}>
          <FaBuilding size={70} className="py-2" />
          <h1>University of North Carolina, Charlotte</h1>
          <p>
            The University of North Carolina at Charlotte 9201 University City
            Blvd,
            <br /> Charlotte, NC 28223-0001 704-687-8622
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
