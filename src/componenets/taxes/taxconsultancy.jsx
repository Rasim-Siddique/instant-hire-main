import React from "react";
import PerkScreenTemplate from "../perks-screen/perk-screen";
import image1 from  '../../assets/perks/Tax Calendar.svg'
import { Col, Row } from "antd";
import PerkCard from "../Home/card-perks/perkscard";
import one from "../../assets/numbers/one.svg";
import two from "../../assets/numbers/two.svg";
import three from "../../assets/numbers/three.svg";
import four from "../../assets/numbers/four.svg";
import five from "../../assets/numbers/five.svg";
import six from "../../assets/numbers/six.svg";

import HireUsSection from "../hire-us-section/hireUsSection";
import Footer from "../Home/Footer/footer";
import NavbarBlackDekstop from "../navbars/navbar-black";
import MobileNavbar from "../navbars/mobilenavbar";
import MobileFooter from "../footer/MobileFooter";

function TaxConsultancy(black){
    return(
        <>
        <div className="mobile_hide">
        <NavbarBlackDekstop />

        </div>
        <div className="dekstop_hide">
            <MobileNavbar black={true}/> 
        </div>
         <PerkScreenTemplate image={image1} title="Tax Consultancy" description={"We provide tax consultancy services to assist our clients in managing their tax obligations effectively."}/>
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
                    <Col lg={6} xs={22} className="tax_card_1"><PerkCard number={one} title="Tax Planning" text="Helping clients minimize tax liabilities and optimize tax structures."/></Col>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={6} xs={22} className="tax_card_2"> <PerkCard number={two} title="Tax Compliance" text="Ensuring clients comply with tax laws and regulations to avoid penalties."/></Col>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={6} xs={22} className="tax_card_3"> <PerkCard number={three} title="Tax Reporting" text="Preparing and filing accurate tax returns and related reports."/></Col>
                    <Col lg={2} xs={1}></Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                 <Row>

                     <Col lg={2} xs={1}></Col>
                    <Col lg={6} xs={22} className="tax_card_4"><PerkCard number={four} title="Tax Audit Support" text="Assisting clients during tax audits and investigations."/></Col>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={6} xs={22} className="tax_card_5"> <PerkCard number={five} title="Tax Dispute Resolution" text="Representing clients in tax disputes and negotiations with tax authorities."/></Col>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={6} xs={22} className="tax_card_6"> <PerkCard number={six} title="Tax Staff Posting" text="Providing tax professionals to support clients' tax functions and operations."/></Col>
                    <Col lg={2} xs={1}></Col>
                </Row>
                
                
            </div>
            <Row  className="container_hire_us">
                   <Col lg={24}>
                   <HireUsSection top={-300}/>    
                   </Col>
                </Row>

            <br />
            {/* <div style={{paddingTop : "315vh"}} className="dekstop_hide">
                <MobileFooter />
            </div>
            <div className="mobile_hide" style={{paddingTop : "22vh"}}>
                <Footer />
            </div> */}
        </>
    )
}

export default TaxConsultancy