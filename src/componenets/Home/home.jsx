import "./Home.css";
import { Row, Col } from "antd";

import gif1 from "../../assets/gifs/Home-1.gif";
import Jobs from "./jobs/jobs";
import pic1 from "../../assets/services/services_1.svg";
import pic2 from "../../assets/services/services_2.svg";
import pic3 from "../../assets/services/services_3.svg";
import pic4 from "../../assets/services/services_4.svg";
import ServicesWeOffer from "./Services/servicesweoffer";
import Leading_div from "./leading-div/leading";
import Footer from "./Footer/footer";
import NavbarDekstop from "../navbars/navbar";
import { Link, useNavigate } from "react-router-dom";
import MobileNavbar from "../navbars/mobilenavbar";
import MobileFooter from "../footer/MobileFooter";
import PleasureWork from "../../componenets/pleasureWork/pleasureWork"
function Home({black}) {
  console.log(black)
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="mobile_hide">
        <NavbarDekstop />
      </div>
      <div className="desktop_hide">
        <MobileNavbar black={black}/>
      </div>

      <div className="section_2">
        <Row style={{height:"60vh"}}>
          <Col style={{paddingLeft: '5%', display:"flex",flexDirection:'column', justifyContent:"space-around"}} lg={10} xs={24}>
            <h1 className="start_your_career_text">
              Start your career today with Instant Hire
            </h1>
            <p className="description_text_1">
              The ultimate platform connecting talented candidates with
              top-notch companies. Discover your dream job, showcase your
              skills, and embark on a path to professional growth.
            </p>
            <div>
              <Row className="buttons_row">
                <Col lg={10} xs={11}>
                  <Link to='/all-jobs'>
                  <button style={{cursor:"pointer"}} className="find_jobs_button" >Find Jobs</button>
                  </Link>
                </Col>
                <Col lg={10} xs={11}>
                <Link to='/find-talent'>
                  
                  <button style={{cursor:"pointer"}} className="find_talent_button">Find Talent</button>
                </Link>
                </Col>
                {/* <Col lg={4} xs={0}></Col> */}
              </Row>
            </div>
          
          </Col>
          <Col className="gif-container" xs={0} lg={14}>
            <img alt="img-mine" src={gif1} className="gifs" />
          </Col>
        </Row>
      </div>
      <div className="pleasure_wrapper">
      <PleasureWork/>
      </div>
      <div className="jobs_tab" style={{ background: "#FFFFF" }}>
        <Jobs />
      </div>
      <br />
      <br />
      <div className="services_tab" style={{ background: "#FCFCFC" }}>
        <Row>
          <Col lg={3} xs={1}></Col>
          <Col lg={20} xs={22}>
            <span className="text_services">Services We Offer</span>
            <br />
            <br />
            <br />
            <Row>
              <Col
                onClick={() => {
                  navigateToPage("/project-consultancy");
                }}
                lg={11}
              >
                {" "}
                <ServicesWeOffer
                  image={pic1}
                  subheading="Project Consultancy"
                  description="We help businesses achieve their objectives by offering expertise and guidance throughout the project lifecycle."
                />
              </Col>
              <Col lg={2}></Col>
              <Col
               onClick={() => {
                navigateToPage("/project-consultancy");
              }}
              lg={11}>
                {" "}
                <ServicesWeOffer
                  image={pic2}
                  subheading="Technical Recruitment"
                  description="Our technical recruitment service helps companies find and hire the best candidates for their technical positions."
                />
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <br />
        <Row>
          <Col lg={3} xs={1}></Col>
          <Col lg={20} xs={22}>
            <Row>
              <Col
               onClick={() => {
                navigateToPage("/project-consultancy");
              }}
              lg={11}>
                {" "}
                <ServicesWeOffer
                  image={pic3}
                  subheading="Payroll management"
                  description="Our comprehensive payroll management services help businesses simplify and accurate their payroll processes."
                />
              </Col>
              <Col lg={2}></Col>
              <Col
               onClick={() => {
                navigateToPage("/project-consultancy");
              }}
              lg={11}>
                {" "}
                <ServicesWeOffer
                  image={pic4}
                  subheading="Tax Consultancy"
                  description="We provide tax consultancy services to assist our clients in managing their tax obligations effectively."
                />
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </div>
      <div className="leading_div">
          <Row className="main_div_1">
            <Col lg={24}>
              <Row>
                <Col lg={2} xs={1}></Col>
                <Col lg={20} xs={22}>
                  <Leading_div />
                </Col>
                <Col lg={2} xs={1}></Col>
              </Row>
            </Col>
          </Row>
        </div> 
        <br />
        <br />
        <div>
        </div>
        {/* <div>
          <div className="mobile_hide"><Footer /></div>

          <div className="dekstop_hide" style={{paddingTop : "160vh", width : "100%"}}><MobileFooter /></div>
        </div> */}
       
    </div>
  );  
}

export default Home;
