import { Col, Row } from "antd";
import React from "react";
import "./formhireus.css";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2";
import Footer from "../Home/Footer/footer";

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];



function FormHireUs() {
  return (
    <>
    <Row>
      <Col xs={24}>
     
      <Row className="flex-row">
        <Row className="main_row_form">
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={18}>
            <span className="fill_this_heading">Fill this form for hiring</span>
          </Col>
          <Col lg={6} xs={5}></Col>
        </Row>

        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Full Name *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <input placeholder="Enter your full name" className="input-form" />
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Work Email *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <input placeholder="name@company.com" className="input-form" />
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Phone Number *</span>
          </Col>
          <Col lg={5} xs={5}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
          <PhoneInput
                            containerClass="input-form"
                            country={'us'}
            inputStyle={{
                                height: "100%",
                                width : "100%",
                                background: "#FFFFFF",
                                border : "none",
                                outline : "none "
            }}
            buttonStyle={{
                left : "-1px",
                background : "white"
            }}
                            />

          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Company Name *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <input placeholder="xyz company" className="input-form" />
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />

        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Company Location *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <input placeholder="address" className="input-form" />
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Company Size *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <input placeholder="100-200" className="input-form" />
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <button className="submit_button">Submit</button>
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
       
      </Row>
      </Col>
    </Row>
    
    </>
  );
}
export default FormHireUs;
