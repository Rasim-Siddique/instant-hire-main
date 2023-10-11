import React from "react";
import PerkScreenTemplate from "../perks-screen/perk-screen";
import "./payroll.css";
import image1 from "../../assets/perks/payroll-perk.svg";
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
import nine from "../../assets/numbers/nine.svg";

import HireUsSection from "../hire-us-section/hireUsSection";
import Footer from "../Home/Footer/footer";
import NavbarBlackDekstop from "../navbars/navbar-black";
import MobileNavbar from "../navbars/mobilenavbar";
import MobileFooter from "../footer/MobileFooter";

function PayrollOnScreen({black}) {
  return (
    <>
    <div className="mobile_hide">
    <NavbarBlackDekstop />
    </div>
    <div className="dekstop_hide">
      <MobileNavbar black={black}/> 
    </div>
      <div>
        <div className="perk_screen_parent">
        <PerkScreenTemplate
          image={image1}
          title="Payroll Management"
          description={
            "Our comprehensive payroll management services help businesses simplify and accurate their payroll processes."
          }
        />
        </div>
       
        <div className="cards_section">
          <br />
          <br />
          <Row>
            <Col lg={8}></Col>
            <Col
              lg={8}
              style={{
                display: "flex",
                textAlign: "center",
                margin: "auto",
                justifyContent: "center",
              }}
            >
              <span className="text_what_we_offer">What We Offer</span>
            </Col>
            <Col lg={8}></Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            <Col lg={2} xs={1}></Col>
            <Col lg={6} xs={22} className="pay_card_1">
              <PerkCard
                number={one}
                title="Payroll Processing"
                text="Handling and executing payroll for employees"
              />
            </Col>
            <Col lg={1} xs={1}></Col>
            <Col lg={6} xs={22} className="pay_card_2">
              {" "}
              <PerkCard
                number={two}
                title="Employee Benefits Administration"
                text="Management of employee benefits packages"
              />
            </Col>
            <Col lg={1} xs={1}></Col>
            <Col lg={6} xs={22} className="pay_card_3">
              {" "}
              <PerkCard
                number={three}
                title="Tax Filling & Compliance"
                text="Ensuring compliance with tax laws and regulations"
              />
            </Col>
            <Col lg={2} xs={1}></Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col lg={2} xs={1}></Col>
            <Col lg={6} xs={22} className="pay_card_4">
              <PerkCard
                number={four}
                title="Time & Attendance Management"
                text="Tracking employee work hours and attendance"
              />
            </Col>
            <Col lg={1} xs={1}></Col>
            <Col lg={6} xs={22} className="pay_card_5">
              {" "}
              <PerkCard
                number={five}
                title="Paid Time Off (PTO) Tracking"
                text="Managing employee paid time off requests and balances"
              />
            </Col>
            <Col lg={1} xs={1}></Col>
            <Col lg={6} xs={22} className="pay_card_6">
              {" "}
              <PerkCard
                number={six}
                title="Payroll Reporting & Analytics"
                text="Generating reports and analyzing payroll data"
              />
            </Col>
            <Col lg={2} xs={1}></Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col lg={2} xs={1}></Col>
            <Col lg={6} xs={22} className="pay_card_7">
              <PerkCard
                number={seven}
                title="Wage Garnishments & Deductions Management"
                text="Managing wage garnishments and other payroll deductions"
              />
            </Col>
            <Col lg={1} xs={1}></Col>
            <Col lg={6} xs={22} className="pay_card_8">
              {" "}
              <PerkCard
                number={eight}
                title="Employee Self-Service Portal"
                text="Providing employees access to their payroll and benefits information"
              />
            </Col>
            <Col lg={1} xs={1}></Col>
            <Col lg={6} xs={22} className="pay_card_9">
              {" "}
              <PerkCard
                number={nine}
                title="Record Keeping & Document Management"
                text="Maintaining records and managing documents related to payroll and employee benefits."
              />
            </Col>
            <Col lg={2} xs={1}></Col>
          </Row>
        </div>
       
        <Row className="container_hire_us">
          <Col lg={24}>
            <HireUsSection top={200}/>
          </Col>
        </Row>
      {/* <div className="mobile_hide" style={{paddingTop : "90vh"}}>
        <Footer />
      </div>
      <div className="dekstop_hide" style={{paddingTop : "320vh"}}>
            <MobileFooter />
      </div> */}

        {/* <Row >
                        <Col lg={24} >
                            <Footer />
                        </Col>
                    </Row> */}
      </div>
    </>
  );
}

export default PayrollOnScreen;
