import React, { useEffect, useState } from "react";
import PerkScreenTemplate from "../perks-screen/perk-screen";
import "./project-consultancy.css";
import image1 from "../../assets/perks/project-con.svg";
import { Col, Row } from "antd";
import PerkCard from "../Home/card-perks/perkscard";
import one from "../../assets/numbers/one.svg";
import two from "../../assets/numbers/two.svg";
import three from "../../assets/numbers/three.svg";
import four from "../../assets/numbers/four.svg";
import five from "../../assets/numbers/five.svg";
import HireUsSection from "../hire-us-section/hireUsSection";

import Footer from "../Home/Footer/footer";
import NavbarBlackDekstop from "../navbars/navbar-black";
import MobileFooter from "../footer/MobileFooter";
import MobileNavbar from "../navbars/mobilenavbar";

function ProjectConScreen({black}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
      const isViewportMobile = window.innerWidth <= 768; // You can adjust this value based on your needs

      setIsMobile(isMobileDevice || isViewportMobile);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <div>
      <div className="mobile_hide"><NavbarBlackDekstop  /></div>
      <div className="dekstop_hide"><MobileNavbar black={black} /></div>
      <div className="parent_project">
        <PerkScreenTemplate
          top={200}
          image={image1}
          title="Project Consultancy"
          description={
            "We help businesses achieve their objectives by offering expertise and guidance throughout the project lifecycle."
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
          <Col lg={6} xs={22} className="project_card_1">
            <PerkCard
              number={one}
              title="Planning & Management"
              text="Developing and executing a comprehensive plan for a project from start to finish."
            />
          </Col>
          <Col lg={1} xs={1}></Col>
          <Col lg={6} xs={22} className="project_card_2">
            {" "}
            <PerkCard
              number={two}
              title="Risk Management & Analysis"
              text="Identifying, assessing, and mitigating potential risks that could impact project outcomes."
            />
          </Col>
          <Col lg={1} xs={1}></Col>

          <Col lg={6} xs={22} className="project_card_3">
            {" "}
            <PerkCard
              number={three}
              title="Resource Allocation & Management"
              text="Assigning and utilizing resources in an efficient and effective manner to achieve project objectives."
            />
          </Col>
          <Col lg={2} xs={1}></Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img srcSet="" />
        <Row>
          <Col lg={2} xs={1}></Col>
          <Col lg={6} xs={22} className="project_card_4">
            <PerkCard
              number={four}
              title="Process Improvement & Optimization"
              text="Enhancing an existing process or system to increase efficiency, productivity, and overall performance"
            />
          </Col>
          <Col lg={1} xs={1}></Col>
          <Col lg={6} xs={22} className="project_card_5">
            {" "}
            <PerkCard
              number={five}
              title="Project Evaluation & Reporting"
              text="Assessing project performance and providing insights for improvement through various reports and analysis."
            />
          </Col>
          <Col lg={11} xs={1}></Col>
        </Row>

        <br />
        <br />
      </div>
      <Row className="container_hire_us">
        <Col lg={24} xs={24}>
          <HireUsSection top={-130} />
        </Col>
      </Row>

      
    
    </div>
  );
}

export default ProjectConScreen;
