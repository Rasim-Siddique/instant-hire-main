import { Col, Row } from "antd";
import React from "react";
import './perkscard.css'

function PerkCard({number,title,text}) {

    return (
        <>
            <Row className="main_row_border">
               <Col lg={1} xs={1}></Col> 
               <Col lg={23} xs={23}>
                <Row style={{marginTop : "20px"}}>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={6} xs={6}><img className="number_card" src={number}/></Col>
                    <Col lg={17} xs={17}></Col>
                </Row>
                <Row style={{marginTop : "10px"}}>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={16} xs={16}><span className="title_text">{title}</span></Col>
                    <Col lg={7} xs={7}></Col>
                </Row>
                <Row style={{marginTop : "5px"}}>
                    <Col lg={1} xs={1}></Col>
                    <Col lg={21} xs={21}><span className="desc_text_card">{text}</span></Col>
                    <Col lg={2} xs={1}></Col>
                </Row>
                </Col>
            </Row>
            
        </>
        
    )
}

export default PerkCard