import { Col, Row } from "antd";
import React from "react";
import NavbarBlackDekstop from "../navbars/navbar-black";
import './perk-screen.css';


function PerkScreenTemplate({image, title, description, top}) {


    return (
        <div>
            {/* <NavbarBlackDekstop /> */}
            <div style={{background : "#302A39"}}>
            <Row className="row_main">
                <Col lg={5} xs={3}></Col>
                <Col lg={14} xs={18} style={{display : "flex", alignItems : "center", justifyContent : "center"}}>
                    <img src={image} className="image_perk"/>
                </Col>
                <br />
                <br />
                
                <Col lg={5} xs={3}></Col>
            </Row>
            <br />
            <Row className="text_title_row">
                <Col lg={5} xs={2}></Col>
                <Col lg={14} xs={20} style={{textAlign : "center", display : "flex", justifyContent : "center"}}>
                <span className="title_perk">{title}</span>

                </Col>
                <Col lg={5} xs={2}></Col>
            </Row>
            <br />
            <Row style={{paddingBottom : "130px"}}>
                <Col lg={7} xs={3}></Col>
                <Col lg={10} xs={18}style={{textAlign : "center" , display : "flex", justifyContent : "center"}}>
                    <span className="text_desc_perk">{description}</span>
                </Col>
                <Col lg={7} xs={3}></Col>
            </Row>
          
            </div>
        </div>
    )
}


export default PerkScreenTemplate;

