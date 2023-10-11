import { Col, Row } from 'antd';
import React from 'react';
import NavbarDekstop from '../navbars/navbar';
import './aboutus.css';
import MobileFooter from '../footer/MobileFooter'
import one from '../../assets/grey-numbers/01.svg'
import two from '../../assets/grey-numbers/02.svg'
import three from '../../assets/grey-numbers/03.svg'
import pic1 from '../../assets/pics_aunty/pic1.svg'
import pic2 from '../../assets/pics_aunty/pic2.svg'
import pic3 from '../../assets/pics_aunty/pic3.svg'
import MobileNavbar from '../navbars/mobilenavbar';
import Footer from '../Home/Footer/footer';
import PleasureWork from '../../componenets/pleasureWork/pleasureWork';
import mission from '../../assets/aboutUs/mission.jpg'

function AboutUs() {
    return (
        <>
            <Row>
                
                <Col lg={24} className="mobile_hide">
                    <NavbarDekstop />
                </Col>
                <Col lg={24} xs={24} className="dekstop_hide">
                    <MobileNavbar />
                </Col>
            </Row>
            <div>
                <Row className='banner'>
                    <Col lg={5} xs={2}></Col>
                    <Col lg={14} xs={20} className="main_hero_about">
                        <span className='about_us_hero'>Instant Hire Connects The Fast & Easy Way To Hire Top Tech Talents.</span>
                    </Col>
                    <Col lg={5} xs={2} className="main_hero_background"></Col>
                </Row>
            </div>
            <PleasureWork />
            <Row className='row_color_main'>
                <Col lg={24}>
                    <Row className='our_mission_row'>
                        <Col lg={2} xs={2}></Col>
                        <Col lg={8} xs={22}>
                            <span className='our_mission_text'>
                            OUR MISSION
                            </span>
                        </Col>
                        <Col lg={14} xs={0}></Col>
                    </Row>

                    <Row className='our_mission_row_1'>
                    <Col lg={2} xs={2}></Col>
                        <Col lg={12} xs={18}>
                            <span className='our_mission_text_1'>
                            We aim to bridge the hiring gap by providing efficient and effective recruitment solutions.
                            </span>
                        </Col>
                        <Col className='mission-img-wrapper' lg={6} xs={4}>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
                <Col lg={9} xs={2}></Col>
                <Col lg={6} xs={20} style={{textAlign : "center"}}>
                    <span className='our_process_text'>
                    Our process
                    </span>
                </Col>
                <Col lg={9} xs={2}></Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row className='mt_mobile_1'>
                <Col lg={2} xs={1}></Col>
                <Col lg={3} style={{display : "flex", justifyContent : "center", alignItems : "center", }}><img src={one}  className="image-aunty"/></Col>
                <Col lg={12} xs={22}>
                    <Row className='main_row_hr'>
                        <Col lg={1} xs={1}></Col>
                            <Col lg={22} xs={22}>
                                <span className='hr_text'>HR Screening</span>
                                <br />
                                <span className='hr_subtext'>We conduct an initial screening to evaluate candidates' qualifications and compatibility with the job requirements.</span>
                            </Col>
                        <Col lg={1} xs={1} ></Col>
                    </Row>
                </Col>
                <Col lg={3} xs={24}>
                    <img className='pic_1_aunty' src={pic1}/>
                </Col>
            </Row>


            <Row className='mt_mobile_2'>
                <Col lg={2} xs={1}></Col>
                <Col lg={3} style={{display : "flex", justifyContent : "center", alignItems : "center", }}><img src={two}  className="image-aunty"/></Col>
                <Col lg={12} xs={22}>
                    <Row className='main_row_hr'>
                        <Col lg={1} xs={1}></Col>
                            <Col lg={22} xs={22}>
                                <span className='hr_text'>Technical Interview</span>
                                <br />
                                <span className='hr_subtext'>Candidates undergo in-depth interviews to assess their technical skills, problem-solving abilities, and domain knowledge.</span>
                            </Col>
                        <Col lg={1} xs={1}></Col>
                    </Row>
                </Col>
                <Col lg={3} xs={24}>
                    <img className='pic_1_aunty'src={pic2}/>
                </Col>
            </Row>
      
            <Row>
                <Col lg={2} xs={1}></Col>
                <Col lg={3} style={{display : "flex", justifyContent : "center", alignItems : "center", }}><img src={three} className="image-aunty image-aunty-ds"/></Col>
                <Col lg={12} xs={22}>
                    <Row className='main_row_hr main_row_hr_1'>
                        <Col lg={1} xs={1}></Col>
                            <Col lg={22} xs={22}>
                                <span className='hr_text'>Final Interview By Client</span>
                                <br />
                                <span className='hr_subtext hr_subtext_1'>The client directly interviews shortlisted candidates to evaluate their fit with the team, assess their technical expertise, and make the final hiring decision. </span>
                           
                            </Col>
                        <Col lg={1} xs={1}></Col>
                    </Row>
                </Col>
                <Col lg={3} xs={24}>
                <br />
                    <br />   <br />
                    <br />
                    <img className='pic_1_aunty' src={pic3}/>
                </Col>
            </Row>
            {/* <div className='mobile_hide'><Footer /></div> */}
            {/* <div className='dekstop_hide' style={{paddingTop : "130vh"}}><MobileFooter /></div> */}

        </>
    )
}

export default AboutUs;