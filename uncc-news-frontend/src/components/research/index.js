import React from "react";
import "./index.css";
import { Row, Col, Spinner } from "reactstrap";

const Research = ({ image, tagLine, title, content }) => {
  var list = [];
  if (content != null) {
    list = content.split("\n");
  }
  if (content == null) {
    return <Spinner />;
  } else {
    return (
      <div className="my-5 pt-4" id="research">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${image})`,
            width: "100%",
            height: "450px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div className="header px-5 d-flex justify-content-center align-items-center">
            <p>{tagLine}</p>
          </div>
        </div>
        <Row className="container mt-5 m-auto">
          <Col md={12}>
            <b>
              <span className="fw-bold fs-2"> {title}</span>
            </b>
            <p className="fs-5">
              <br />
              {list.map((data, i) => (
                <span key={i}>
                  {data.includes("—") ? (
                    <>
                      {data.split("—")[0]} — <i>{data.split("—")[1]}</i>{" "}
                    </>
                  ) : (
                    data
                  )}
                  <br />
                  <br />
                </span>
              ))}
              <br />
            </p>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Research;
