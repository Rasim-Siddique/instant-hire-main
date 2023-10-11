import { Col, Input, Row } from "antd";
import React from "react";
import NavbarDekstop from "../navbars/navbar";
import "./applytojob.css";
import TagJob from "./tag/tag";
import image1 from "../../assets/applytojob/image2.svg";
import PhoneInput from "react-phone-input-2";
import search from "../.././assets/document-upload.svg"
import Footer from "../../componenets/Home/Footer/footer"

function ApplyToJob() {
  return (
    <>
      <NavbarDekstop />
      <Row>
        <Col lg={24}>
          <TagJob jobType={"Hybrid"} />
        </Col>
      </Row>
      <Row>
        <Col lg={2}></Col>

        <Col lg={8}>
          <span className="job-title-1">Senior UI/UX Designer</span>
        </Col>
      </Row>
      <Row style={{ position: "relative", top: "50px", left: "-1.8%" }}>
        <Col lg={3}></Col>
        <Col lg={2} style={{ display: "flex", flexDirection: "row", gap: 25 }}>
          <div>
            <img src={image1} />
          </div>
          <div>
            <span className="job-type-text">Job Type</span>
            <br />
            <span className="full-time-text">Full time</span>
          </div>
        </Col>
        <Col lg={1}></Col>
        <Col lg={2} style={{ display: "flex", flexDirection: "row", gap: 25 }}>
          <div>
            <img src={image1} />
          </div>
          <div>
            <span className="job-type-text">Job Location</span>
            <br />
            <span className="full-time-text">United States</span>
          </div>
        </Col>
        <Col lg={1}></Col>
        <Col lg={2} style={{ display: "flex", flexDirection: "row", gap: 25 }}>
          <div>
            <img src={image1} />
          </div>
          <div>
            <span className="job-type-text">Date Posted</span>
            <br />
            <span className="full-time-text">22/Jan/2023</span>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "100px" }}>
        <Col lg={2}></Col>
        <Col lg={2} style={{ position: "relative", left: "1.5%" }}>
          <span className="headings_intro">Introduction: </span>
        
        </Col>
        <Col lg={19}></Col>
      </Row>
      <br />
      <Row style={{ width: "100%", height : "200%" }}>
        <Col lg={3} className="max_width_ad"></Col>
        <Col lg={10} style={{}}>
          <span className="text-description">
            The company was founded by compliance and risk management
            professionals with well over 100 years of experience to address the
            need for a results driven intelligence based modular platform that
            addresses key regulatory challenges for the financial services
            companies globally. Since the system is built by practitioners, it
            takes into account the structural, policy and operational
            difficulties faced by different types of financial services firms of
            various sizes and complexity. Our solution is available as a SaaS or
            as an onsite solution. Regional offices are in Karachi, Doha, Qatar,
            Canada and Bahrain.
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />  
          <span className="job_req">Job Requirments : </span>
          <br />
          <br />
          <span className="text-description">
            Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process.
          </span>

          <br />
          <br />
          <br />
          <br />
          <span className="job_req">Responsibilities : </span>


          <br />
          <br />
          <br />
          <br />
          <ul>
            <li className="text-description">Work with other developers to ensure that the website is functional and visually appealing.</li>
            <li className="text-description">Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.</li>
            <li className="text-description">Make strategic design and user-experience decisions related to core, and new, functions and features.</li>
            <li className="text-description">Collaborate with other team members and stakeholders. Be a great team player, experienced in working with agile teams.</li>
            <li className="text-description">Be a great team player, experienced in working with agile teams. Ability to collaborate closely with developers, copywriters and UX designers.</li>
            <li className="text-description">Present and defend your design decisions. All your design decisions should be based on the overall design roadmap as well as your own design thinking and fundamental principles</li>
            <li className="text-description">Present and defend your design decisions. All your design decisions should be based on the overall design roadmap as well as your own design thinking and fundamental principles</li>
            <li className="text-description">Present and defend your design decisions. All your design decisions should be based on the overall design roadmap as well as your own design thinking and fundamental principles</li>
            <li className="text-description">Present and defend your design decisions. All your design decisions should be based on the overall design roadmap as well as your own design thinking and fundamental principles</li>
            <li className="text-description">Present and defend your design decisions. All your design decisions should be based on the overall design roadmap as well as your own design thinking and fundamental principles</li>

          </ul>
          <br />
          <br />
          <br />
          <br />
          
          <span className="job_req">Requirments : </span>
          <br />
          <br />
          <br />
          <br />
          <ul>
            <li className="text-description">Work with other developers to ensure that the website is functional and visually appealing.</li>
            <li className="text-description">Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.</li>
            <li className="text-description">Make strategic design and user-experience decisions related to core, and new, functions and features.</li>
            <li className="text-description">Collaborate with other team members and stakeholders. Be a great team player, experienced in working with agile teams.</li>
            <li className="text-description">Be a great team player, experienced in working with agile teams. Ability to collaborate closely with developers, copywriters and UX designers.</li>
            <li className="text-description">Present and defend your design decisions. All your design decisions should be based on the overall design roadmap as well as your own design thinking and fundamental principles</li>
       
          </ul>
          <br />
          <br />
          <ul>
            <li className="text-description">Work with other developers to ensure that the website is functional and visually appealing.</li>
            <li className="text-description">Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.</li>
            <li className="text-description">Make strategic design and user-experience decisions related to core, and new, functions and features.</li>
            <li className="text-description">Collaborate with other team members and stakeholders. Be a great team player, experienced in working with agile teams.</li>
            <li className="text-description">Be a great team player, experienced in working with agile teams. Ability to collaborate closely with developers, copywriters and UX designers.</li>
            <li className="text-description">Present and defend your design decisions. All your design decisions should be based on the overall design roadmap as well as your own design thinking and fundamental principles</li>
       
          </ul>
          <br />
          <br/>
          <br/>
          <span className="job_req">Other Details: </span>
          <br/>
          <br/> 
         
          <ul>
            <li className="text-description">Work with other developers to ensure that the website is functional and visually appealing.</li>
            <li className="text-description">Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.</li>
        
          </ul>
        </Col>
        <Col lg={2}></Col>
        <Col lg={8} className="main_form_div_1_2">
          <Row>
            <Col lg={1}></Col>
            <Col lg={14}>
              <br />
              <br />
              <span className="apply_for_this">Apply for this position</span>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Row style={{ width: "100%" }}>
              <Col lg={1} xs={1}></Col>
              <Col lg={17} xs={17}>
                <span className="full_name_text">Full Name *</span>
              </Col>
              <Col lg={6} xs={6}></Col>
            </Row>
            <br />
            <br />
          <Row style={{width : "100%",marginTop : "2vh"}}>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <input placeholder="Enter your full name" className="input-form" />
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <Row style={{ width: "100%", marginTop : "5vh" }}>
              <Col lg={1} xs={1}></Col>
              <Col lg={17} xs={17}>
                <span className="full_name_text">Email *</span>
              </Col>
              <Col lg={6} xs={6}></Col>
            </Row>
            <Row style={{width : "100%",marginTop : "2vh"}}>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <input placeholder="Enter your email" className="input-form" />
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <Row style={{ width: "100%", marginTop : "5vh" }}>
              <Col lg={1} xs={1}></Col>
              <Col lg={17} xs={17}>
                <span className="full_name_text">Phone Number *</span>
              </Col>
              <Col lg={6} xs={6}></Col>
            </Row>
            <Row style={{width : "100%", marginTop : "2vh"}}>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
          <PhoneInput
                            containerClass="input-form"
                            country={'us'}
            inputStyle={{
                                height: "100%",
                                width : "100%",
                                background: "#FFFFFF",
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

        

 <Row style={{ width: "100%", marginTop : "5vh" }}>
              <Col lg={1} xs={1}></Col>
              <Col lg={17} xs={17}>
                <span className="full_name_text">CV *</span>
              </Col>
              <Col lg={6} xs={6}></Col>
            </Row>
        
          </Row>
          <Row style={{width : "100%", marginTop : "2vh"}}>
              <Col lg={1}></Col>
              <Col lg={22}>
              <Input
            placeholder="Search Your Jobs"
            suffix={<img src={search} />}
            height={"62px"}
         className="input-form"
          />
              </Col>  
              <Col lg={1}></Col>
          </Row>
          <Row style={{width : "100%", marginTop: "4.5vh"}}>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <button className="submit_button">Submit</button>
          </Col>
          <Col lg={1} xs={1}></Col>
          </Row>
        </Col>
      </Row>
      {/* <br />
      <br /> */}
     {/* <Footer /> */}
    </>
  );
}

export default ApplyToJob;
