import { Col, Row } from "antd";
import React from "react";

import "./servicesweoffer.css";
function ServicesWeOffer(props) {
  const { image, subheading, description } = props;
  return (
    <>
      <Row style={{background : "#FFFFFF"}}>
        <Col lg={20}>
          <div>
            <img src={image} />
          </div>
          <span className="subheading_text">{subheading}</span>
          <br />

          <Row><Col lg={24}><span className="description_text">{description}</span></Col></Row>
          <br />
         <Row> <Col lg={8} xs={22}><button style={{cursor:"pointer"}} className="hire_us_button">Hire Us</button></Col></Row>
        <br />
        </Col>
        <Col lg={2}></Col>
      </Row>
    </>
  );
}
export default ServicesWeOffer;
