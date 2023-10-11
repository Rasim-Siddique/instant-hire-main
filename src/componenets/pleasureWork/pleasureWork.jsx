import { Col, Row } from "antd";
import React from "react";
import './pleasureWork.css';
import tkxel from "../../assets/pleasureWork/tkxel.png"
import speedoy from "../../assets/pleasureWork/speedoy.png"
import xcape from "../../assets/pleasureWork/xcape.png"
import iomechs from "../../assets/pleasureWork/iomechs.png"
import tecinyx from "../../assets/pleasureWork/tecinyx.png"

function pleasureWork() {
    return (
        <div className="pleasure_work">
        <Row style={{display:"flex", flexDirection:"column", justifyContent:"space-around",
       alignItems:"center", textAlign:"center", gap:32}} >
          <Col lg={12}>
            <h2 className="pleasure_heading">Pleasure to work with</h2>
          </Col>
          <Col className="brand-list" lg={12} style={{display:"flex", columnGap:64}}>
            <div>
              <img src={tkxel} />
              <p style={{fontSize:18}}>Tkxel</p>
            </div>
            <div>
              <img src={speedoy} />
              <p style={{fontSize:18}}>Speedoy</p>
            </div>
            <div>
              <img src={xcape} />
              <p style={{fontSize:18}}>XCape</p>
            </div>
            <div>
              <img src={iomechs} />
              <p style={{fontSize:18}}>IOMechs</p>
            </div>
            <div>
              <img src={tecinyx} />
              <p style={{fontSize:18}}>TECINYX</p>
            </div>
          </Col>
        </Row>
      </div>
    )
}

export default pleasureWork