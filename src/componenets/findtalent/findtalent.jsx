import React from "react";
import './findtalent.css';
import NavbarBlackDekstop from "../navbars/navbar-black";
import { Col, Row } from "antd";
import FormHireUs from "../form-hire-us/formhireus";
import pic1 from '../../assets/pics_aunty/pic4.svg'
import Footer from "../Home/Footer/footer";

function FindTalent() {
    return (
        <>
        <NavbarBlackDekstop />
        <div>
            <Row className="main_div_extended_height">
                 <Col lg={24}>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8}  style={{marginTop : "180px"}}>
                            <span className="text_main_div_heading">Find a talent to boost your business</span>
                            <br />
                            <br />
                            <span className="text_main_div_desc">Looking to hire top talent for your business? Instant Hire's Find Talent page connects you with skilled professionals across a range of industries and specialties.</span>
                            <br />
                            <img src={pic1} style={{width : "100%", marginTop : "10%"}}/>
                        </Col>
                        <Col lg={4}></Col>
                        <Col lg={8} style={{background : "white", borderRadius : "12px", boxShadow : "-12px 12px 30px rgba(0, 0, 0, 0.12)", height : "1050px", marginTop : "180px"}}>
                            <FormHireUs />
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                 </Col>
            </Row>
        </div>
        {/* <div style={{paddingTop : "40vh"}}><Footer /></div> */}
        </>
    )
}

export default FindTalent;