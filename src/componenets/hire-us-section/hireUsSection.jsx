import { Col, Row } from "antd";
import React from "react";
import "./hireUsSection.css";
import girlimage from '../../assets/perks/perk-girl.svg'
import FormHireUs from "../form-hire-us/formhireus";

function HireUsSection({top}) {
  return (
    <div className="content">
    <div className="main_container payroll_container project_container tax_container technical_container" style={{position : "relative", top : `${top}px`}}>
      <Row className="div_top">
        <Col lg={2} xs={2}></Col>
        <Col lg={7} xs={17} style={{display : "flex", flexDirection : "column", gap : 20}} className="mt_hire">
          <span className="hire_us_section_heading">
            Hire us to boost your business
          </span>
         
          <span className="hire_us_section_description">
          Scaling a business is challenging that's why we offer our services to help you boost your business and take it to new heights.
          </span>
          
          
        </Col>
        <Col lg={5} xs={0}></Col>
        <Col lg={8} xs={0} className="main_div_form">
            <FormHireUs />
        </Col>
        <Col lg={3} xs={0}></Col>
      </Row>
      <Col lg={0} xs={1}></Col>
        <Col lg={0} xs={23} className="main_div_form mobile_al">
            <FormHireUs />
        </Col>
        <Col lg={0} xs={0}></Col>
        <Col lg={0} xs={0}></Col>
      <Row>
        <Col lg={2} xs={3}></Col>
        <Col lg={12} xs={20} className="girl_size">
            <img src={girlimage} className="girl_image"  />
        </Col>
        <Col lg={10} xs={1}></Col>
      </Row>
      
    </div>
    </div>
  );
}

export default HireUsSection;
