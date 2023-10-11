import { Col, Row } from "antd";
import react from "react";
import "./MobileFooter.css";
import map from "../../assets/footer/map.svg";
import mail from "../../assets/footer/mail.svg";
import ws from "../../assets/footer/ws.svg";
import logo_footer from "../../assets/footer/logo-footer.png";
import face from "../../assets/footer/face.svg";
import insta from "../../assets/footer/insta.svg";
const MobileFooter = () => {
  return (
    <>
      <div style={{ position: "relative", minHeight: "100%",color : 'white' }}>
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Row style={{ height: "100%" }}>
            <Col xs={1}></Col>
            <Col xs={22} className="styling_div">
              <Row>
                <Col xs={1}></Col>
                <Col xs={20}>
                  <br />
                  <span className="find_text">Find your next star</span>
                </Col>
                <Col xs={3}></Col>
              </Row>
              <br />

              <Row>
                <Col xs={1}></Col>
                <Col xs={22}>
                  <span className="text_desc_find">
                    From Pakistan to UAE-Dozens of Product Companies chose
                    instantHire{" "}
                  </span>
                </Col>
                <Col xs={1}></Col>
              </Row>
              <br />
              <Row>
                <Col xs={1}></Col>
                <Col xs={22}>
                  <button className="button_footer_p">Contact Us</button>
                </Col>
                <Col xs={1}></Col>
              </Row>
              <br />
              <br />
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row style={{ background: "#302A39", width: "100%" }}>
            <Row style={{ marginTop: "50px", width: "100%" }}>
              <Col xs={2}></Col>
              <Col xs={3}>
                <img src={map} />
              </Col>
              <Col xs={1}></Col>
              <Col xs={16}>
                <span className="logo_text">
                  Suite no 502, 5th floor Mehdi Tower Shahrah-e-Faisal Karachi.
                </span>
              </Col>
              <Col xs={1}></Col>
            </Row>
            <br />
            <Row style={{ marginTop: "50px", width: "100%" }}>
              <Col xs={2}></Col>
              <Col xs={3}>
                <img src={mail} />
              </Col>
              <Col xs={1}></Col>
              <Col xs={16}>
                <span
                  className="logo_text"
                  style={{ position: "relative", top: "0.8vh" }}
                >
                  instanthire@gmail.com
                </span>
              </Col>
              <Col xs={1}></Col>
            </Row>
            <br />
            <Row style={{ marginTop: "50px", width: "100%" }}>
              <Col xs={2}></Col>
              <Col xs={3}>
                <img src={ws} />
              </Col>
              <Col xs={1}></Col>
              <Col xs={16}>
                <span
                  className="logo_text"
                  style={{ position: "relative", top: "1vh" }}
                >
                  (+92) 330 99999999
                </span>
              </Col>
              <Col xs={1}></Col>
            </Row>
            <Row style={{ width: "100%", position: "relative", top: "2vh" }}>
              <Col xs={2}></Col>
              <Col xs={6}>
                <img src={logo_footer} />
              </Col>
            </Row>
            <br />
            <Row style={{ marginTop: "30px" }}>
              <Col xs={2}></Col>
              <Col xs={18}>
                <span className="desc_instant_logo">
                  InstantHire is a leading tech recruitment agency founded in
                  2022 with a mission to connect top tech talent with leading
                  companies. We partner with Inaequo Solutions
                </span>
              </Col>
              <Col xs={4}></Col>
            </Row>
            <br />

            <Row style={{ marginTop: "30px",width : '100%' }}>
            <Col xs={2}></Col>
            <Col xs={8}>
            <ul style={{listStyleType : "none"}} className="list_mobile">
                <li style={{paddingLeft : "12px"}}>Home</li>
                <br />
                <li style={{paddingLeft : "12px"}}>Services</li>
                <br />
                <li style={{paddingLeft : "12px"}}>Jobs</li>
                <br />
                <li style={{paddingLeft : "12px"}}>Careers</li>
              </ul>
            </Col>
            <Col xs={14}></Col>
            
            </Row>
            <br />
            <br />
            <br />
            <Row style={{ marginTop: "30px",width : '100%' }}>
            <Col xs={2}></Col>
            <Col xs={12}>
            <ul style={{listStyleType : "none"}} className="list_mobile">
                <li style={{paddingLeft : "12px"}}>Privacy Policy</li>
                <br />
                <li style={{paddingLeft : "12px"}}>Help and Support</li>
                <br />
                <li style={{paddingLeft : "12px"}}>Terms & Condition</li>
                <br />
                <li style={{paddingLeft : "12px"}}>Contact Us</li>
              </ul>
            </Col>
            <Col xs={10}></Col>
            
            </Row>
            
            <Row style={{width : "100%",marginTop : "30px"}}>
                <Col xs={1}></Col>
                <Col xs={22 }>
                    <br />
                <div style={{height : "1px", border : "1px solid #3E3747"}}></div>

                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row style={{marginTop : "30px"}}>
                <Col xs={2}></Col>
                <Col xs={20}><span className="copy_text">© Copyright 2012 - 2023 | INSTANT HIRE | All Rights Reserved</span></Col>
                <Col xs={2}></Col>
            </Row>
            <Row style={{marginTop : "30px",paddingBottom : "10px"}}>
                <Col xs={6}></Col>
                <Col xs={10} style={{display : "flex", flexDirection : "row",gap : 10}}>
                    <img src={face}/>
                    <img src={insta}/>
                    <img src={ws}/>
                </Col>
                <Col xs={8}></Col>
            </Row>
            
          </Row>
          
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
