import { Col, Row } from "antd";
import React from "react";
import "./watchademo.css";

function WatchADemo() {
  return (
    <>
      <Row>
        <Col lg={9}></Col>
        <Col lg={6}>
          <span className="span_watch">Watch A Demo</span>
        </Col>

        <Col lg={7}></Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <Col lg={2}></Col>
        <Col lg={20} style={{ background: "black", height: "500px" }}>
          hello
        </Col>
        <Col lg={2}></Col>
      </Row>
      
    </>
  );
}

export default WatchADemo;
