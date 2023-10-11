import { Col, Row } from "antd";
import React from "react";
import './mobilenavbar.css';
import logo from '../../assets/instant-hire-logo.svg'
import pic1 from '../../assets/menu icon.svg'
import white from '../../assets/instant_white.svg'
import pic3 from '../../assets/menu icon b.svg'
import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import pic2 from '../../assets/close icon.svg'
import down from '../../assets/down.svg'
import up from '../../assets/up.svg'

import image1 from '../../assets/navbar/project.svg'
import image2 from '../../assets/navbar/dollar.svg'
import image3 from '../../assets/navbar/tax.svg'
import image4 from '../../assets/navbar/Target.svg'
function MobileNavbar({black}) {

    console.log(black)
    const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const [listShown, setListShown] = useState(false)
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
    return(
    <>
        <div className="desktop_hide" style={{background : black ? "#302A39" : "white",position : "absolute", top : 0,width : "100%"}}>
           <Row style={{marginTop : "15px"}}>
            <Col xs={2}></Col>
            <Col xs={6}><img src={black !== true ?  logo : white}/></Col>
            <Col xs={12}></Col>
            <Col xs={2}><img src={black ? pic3 : pic1} loading={"lazy"} style={{marginTop : "10px"}} onClick={() => {
                showDrawer()
            }}/></Col>
            <Col xs={2}></Col>
           </Row>
        </div>
        <Drawer
        width={"100%"}
        title={<img src={ logo} style={{position : "relative", top : "15px", left : "-22px"}}/>}
        placement={placement}
        closable={true}
        onClose={onClose}
        open={open}
        closeIcon={<img style={{position : "absolute", right : "20px", }} src={black ? pic2 : pic1} />}
        key={placement}
      >
        <div>
            <Row style={{display : "flex", flexDirection : "column", justifyContent : "left", alignItems : "left", gap : 10}}>
                <Col xs={24}>
                    <ul style={{position : "relative", right : "10px",listStyleType : "none"}}>
                        <li className="text_navbar">Home</li>
                        <br />
                        <br />
                        <li className="text_navbar">Jobs</li>
                        <br />
                        <br />
                        <li className="text_navbar">Services </li><button style={{border : "none", background : "transparent", position : "absolute", right : "-10px", marginTop : "-25px"}}>{listShown === false ? <img onClick={() => {
                            setListShown(true)
                            console.log('hello')

                        }} width={"24px"} src={down}/> : <img width={"24px"} src={up} onClick={() => {
                            setListShown(false)
                            console.log('hello')
                        }}/>}</button>
                   <br />
                        {listShown === true ? 
                        <div>
                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={22}><button style={{width : "100%"}} className="button_dropdown"><img style={{position : "relative", right : "22%", width : "15%", top : "2px"}} src={image1}/><span style={{position : "relative", bottom : "15px", right : "21%"}}>Project Consultancy</span></button></Col>
                                <Col xs={1}></Col>
                            </Row>
                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={22}><button style={{width : "100%"}} className="button_dropdown"><img style={{position : "relative", right : "19%", width : "15%", top : "2px"}} src={image4}/><span style={{position : "relative", bottom : "15px", right : "18%"}}>Technical Recruitment</span></button></Col>
                                <Col xs={1}></Col>
                            </Row>
                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={22}><button style={{width : "100%"}} className="button_dropdown"><img style={{position : "relative", right : "20.9%", width : "15%", top : "2px"}} src={image2}/><span style={{position : "relative", bottom : "15px", right : "19%"}}>Payroll Management</span></button></Col>
                                <Col xs={1}></Col>
                            </Row>
                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={22}><button style={{width : "100%", borderBottom : "0px"}} className="button_dropdown"><img style={{position : "relative", right : "26%", width : "15%", top : "2px",}} src={image3}/><span style={{position : "relative", bottom : "15px", right : "23.5%"}}>Tax Consultancy</span></button></Col>
                                <Col xs={1}></Col>
                            </Row>
                         
                    
                        </div>
                        : null}
                        <br />
                      
                        <li className="text_navbar">About Us</li>
                        <br />
                        <br />
                        <li className="text_navbar">Watch A Demo</li>


                    </ul>
                </Col>
            </Row>
            <Row >
                <Col xs={1}></Col>
                <Col xs={22}>
                    <button style={{width : "100%", position : "absolute",marginTop : "70%"}} className="contact_us_button">Contact Us</button>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </div>
      </Drawer>
    </>
    )
}

export default MobileNavbar;