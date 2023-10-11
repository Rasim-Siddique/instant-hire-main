import React from "react";
import PerkScreenTemplate from "../perks-screen/perk-screen";
import image1 from  '../../assets/perks/Target.svg'
import { Col, Row } from "antd";
import PerkCard from "../Home/card-perks/perkscard";
import one from "../../assets/numbers/one.svg";
import two from "../../assets/numbers/two.svg";
import three from "../../assets/numbers/three.svg";
import four from "../../assets/numbers/four.svg";
import five from "../../assets/numbers/five.svg";
import six from "../../assets/numbers/six.svg";
import seven from "../../assets/numbers/seven.svg";
import eight from "../../assets/numbers/eight.svg";
import HireUsSection from "../hire-us-section/hireUsSection";
import './technical.css'
import Footer from "../Home/Footer/footer";
import NavbarBlackDekstop from "../navbars/navbar-black";
import MobileNavbar from "../navbars/mobilenavbar";
function TechnicalRec({black}) {
    return (
        <>
        <div className="dekstop_hide">
        <MobileNavbar black={black}/>
        </div>
        <div className="mobile_hide">
        <NavbarBlackDekstop/>
        </div>
        <div className="div_perk_tech">
        <PerkScreenTemplate image={image1} title="Technical Recruitment" description={"Our technical recruitment service helps companies find and hire the best candidates for their technical positions."}/>

        </div>
        <div className="cards_section">
                <br />
                <br />
                <Row>
                    <Col lg={8}></Col>
                    <Col lg={8} style={{display : "flex",textAlign : "center", margin : "auto", justifyContent : "center"}}><span className="text_what_we_offer">What We Offer</span></Col>
                    <Col lg={8}></Col>
                </Row>
                <br />
                <br />
                <br />
                <Row>

                    <Col lg={2} xs={1}></Col>
                    <Col lg={6} xs={22} className="techical_card_1"><PerkCard number={one} title="Job Analysis & Description" text="Analyzing and creating job descriptions for open positions."/></Col>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={6} xs={22}  className="techical_card_2"> <PerkCard number={two} title="Sourcing & Screening Of Candidates" text="Searching for potential candidates and evaluating their suitability for the position."/></Col>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={6} xs={22}  className="techical_card_3"> <PerkCard number={three} title="Interview Coordination & Management" text="Managing and organizing interviews with candidates"/></Col>
                    <Col lg={2} xs={1}></Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                 <Row>

                     <Col lg={2} xs={1}></Col>
                    <Col lg={6} xs={22}  className="techical_card_4"><PerkCard number={four} title="Technical Assessments & Evaluations" text="Evaluating the technical skills of candidates."/></Col>
                    <Col lg={1} xs={1}  ></Col>
                    <Col lg={6} xs={22}  className="techical_card_5"> <PerkCard number={five} title="Reference Checks & Background Verification" text="Verifying the references and backgrounds of potential candidates."/></Col>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={6} xs={22}  className="techical_card_6"> <PerkCard number={six} title="Offer Negotiation & Finalization" text="Negotiating job offers and finalizing the terms of employment."/></Col>
                    <Col lg={2} xs={1}></Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>

                    <Col lg={2} xs={1}></Col>
                    <Col lg={6} xs={22}  className="techical_card_7"><PerkCard number={seven} title="Onboarding & Orientation Of New Hires" text="Welcoming and integrating new employees into the company"/></Col>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={6} xs={22}  className="techical_card_8"> <PerkCard number={eight} title="Talent Market Analysis & Salary Benchmarking" text="Analyzing the talent market and benchmarking salaries for open positions."/></Col>
                    <Col lg={10} xs={1}></Col>
                  
                </Row>
                
                
            </div>
           
            <Row  className="container_hire_us">
                   <Col lg={24} xs={24}>
                   <HireUsSection top={100}/>    
                   </Col>
                </Row>
               
                <div className="mobile_hide" style={{paddingTop : "320px"}}>
        {/* <Footer /> */}
      </div>
    
        </>
    )
}

export default TechnicalRec