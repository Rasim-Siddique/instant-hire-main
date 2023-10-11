import { Col, Row } from "antd";
import React from "react";
import "./footer.css";
import map from "../../../assets/footer/map.svg";
import mail from "../../../assets/footer/mail.svg";
import ws from "../../../assets/footer/ws.svg";
import logo_footer from "../../../assets/footer/logo-footer.png";
import face from  "../../../assets/footer/face.svg"
import insta from  "../../../assets/footer/insta.svg"
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location=useLocation()
  return (
    
    <div className="main_div" style={{marginTop:location.pathname==='/project-consultancy'?"650px":location.pathname==='/technical-recruitment'?"550px":
    location.pathname==='/payroll-management'?"990px": location.pathname==='/tax-consultancy'?"490px":location.pathname==='/find-talent'?"490px":""
    }} >
     
      <footer className="footer_class">
      <Row className="footer_section_sub">
        <Col lg={2}></Col>
        <Col lg={20} className="above_div">
          <Row>
            <Col lg={1}></Col>
            <Col lg={10}>
              <span className="find_span">Find your next star</span>
              <br />
              <span className="sub_find">
                From Pakistan to UAE-Dozens of Product Companies chose
                instantHire{" "}
              </span>
            </Col>
            <Col lg={5}></Col>
            <Col lg={5}>
        <Link to='/find-talent'>

              <button style={{cursor:"pointer"}} className="btn_main">Contact Us</button>
           </Link>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Col>
        <Col lg={2}></Col>
      </Row>
      <Row>
        <Col lg={24} className="main_footer">
          <Row style={{ marginTop: "100px" }}>
            <Col lg={2}></Col>
            <Col lg={5} style={{ display: "flex", gap: 10 }}>
              <img src={map} />
              <span className="desc_footer">
                Suite no 507,508 5th floor Sharjah Trade Center near HBL New
                Chali Karachi.
              </span>
            </Col>
            <Col lg={3}></Col>
            <Col lg={5} style={{ display: "flex", gap: 10 }}>
              <img src={mail} style={{ width: "10%" }} />
              <span className="desc_footer_1">instanthire@gmail.com</span>
            </Col>
            <Col lg={3}></Col>
            <Col lg={5} style={{ display: "flex", gap: 10 }}>
              <img src={ws} style={{ width: "10%" }} />
              <span className="desc_footer_1">(+92) 330 99999999</span>
            </Col>
          </Row>
          <br />
          <br />
          <Row style={{ position: "relative", top: "5%" }}>
            <Col lg={2}></Col>
            <Col lg={6}>
              <img src={logo_footer} />
              <br />
              <br />
              <span className="logo_span">
                InstantHire is a leading tech recruitment agency founded in 2022
                with a mission to connect top tech talent with leading
                companies. We partner with <b>Inaequo Solutions</b>
              </span>
            </Col>
            <Col lg={8}></Col>

            <Col
              lg={3}
              className="selection_div_1"
              style={{
                position: "relative",
                top: "50px",
                display: "flex",
                flexDirection: "column",
                gap: 15,
              }}
            >
              <button className="button_div">Home</button>
              <button className="button_div">Services</button>
              <button className="button_div">Jobs</button>
              <button className="button_div">Careers</button>
            </Col>
            <Col lg={1}></Col>
            <Col
              lg={3}
              className="selection_div_2"
              style={{
                position: "relative",
                top: "50px",
                display: "flex",
                flexDirection: "column",
                gap: 15,
              }}
            >
              <button className="button_div_1">Privacy Policy</button>
              <button className="button_div_1">Help and Support</button>
              <button className="button_div_1">Terms & Conditions</button>
              <button className="button_div_1">Contact Us</button>
            </Col>
          </Row>
          <br />
          <br />
          <Row style={{ position : "relative", top : "5%", display :"flex", justifyContent : "center", margin : "auto", alignItems : "center", textAlign : "center"}}>
            <Col lg={2}></Col>
            <Col lg={20} style={{color : "#3E3747", width : "100%", border : "1px solid #3E3747"}}>

            </Col>
            <Col lg={2}></Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}><span className="span_copyright">© Copyright 2012 - 2023 | INSTANT HIRE | All Rights Reserved</span></Col>
            <Col lg={9}></Col>
            <Col lg={3} style={{display : "flex", gap : 20}}>
            <img src={face}/>
            <img src={insta}/>
            <img src={ws}/>

            </Col>
            <Col lg={2}></Col>
          </Row>
          <br />
          <br />
        </Col>
      </Row>
      </footer>
    </div>
  );
}
export default Footer;
