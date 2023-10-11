import { Col,Row } from "antd";
import React from "react";
import './jobs.css'
import { Tabs } from 'antd';
import JCard from "./job-card/jCard";

const onChange = (key) => {
  console.log(key);
};
const items = [
    {
      key: '1',
      label: <span className="key_1_all">All</span>,
      children: (
      <div  className="jobs_container">
        <Row>
          
          <Col lg={12} xs={23}><JCard /></Col>
          
          <Col lg={12} xs={23} className="padding_mobile"><JCard /></Col>
        </Row>
      
        <br />
        <Row>
          
          <Col lg={12} xs={23}><JCard /></Col>
          <Col lg={12} xs={23} className="padding_mobile"><JCard /></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={9} xs={6}></Col>
          <Col lg={4} xs={12}>
            <button className="see_all_jobs_button">
              SEE ALL JOBS
            </button>
          </Col>
          <Col lg={11} xs={6}></Col>
        </Row>
      </div>),
    },
    {
      key: '2',
      label: <span className="key_1_remote">Remote</span>,
      children: (
        <div className="jobs_container">
          <Row>
            
            <Col lg={12} xs={23}><JCard /></Col>
            <Col lg={12} xs={23} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <Row>
            
            <Col lg={12} xs={23}><JCard /></Col>
            
            <Col lg={12} xs={23} className="padding_mobile"><JCard  /></Col>
          </Row>
          
          <br />
        <br />
        <Row>
        <Col lg={9} xs={6}></Col>
          <Col lg={4} xs={12}>
            <button className="see_all_jobs_button" >
              SEE ALL JOBS
            </button>
          </Col>
          <Col lg={11} xs={6}></Col>
        </Row>
        </div>),
    },
    {
      key: '3',
      label: <span className="key_1_onsite">Onsite</span>,
      children: (
        <div className="jobs_container">
          <Row>
            
            <Col lg={12} xs={23}><JCard /></Col>
            <Col lg={12} xs={23} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <Row>
            
            <Col lg={12} xs={23}><JCard /></Col>
            <Col lg={12} xs={23}className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
        <br />
        <Row>
          <Col lg={9} xs={6}></Col>
          <Col lg={4} xs={12}>
            <button style={{cursor:"pointer"}} className="see_all_jobs_button">
              SEE ALL JOBS
            </button>
          </Col>
          <Col lg={11} xs={6}></Col>
        </Row>
        </div>),
    },
    {
        key: '4',
        label: <span className="key_1_hybrid">Hybrid</span>,
        children: (
          <div className="jobs_container">
            <Row>
              
              <Col lg={12} xs={23}><JCard /></Col>
              <Col lg={12} xs={23} className="padding_mobile"><JCard /></Col>
            </Row>
            <br />
            <Row>
              
              <Col lg={12} xs={23}><JCard /></Col>
              <Col lg={12} xs={23} className="padding_mobile"><JCard /></Col>
            </Row>
            <br />
        <br />
        <Row>
          <Col lg={9} xs={6}></Col>
          <Col lg={4} xs={12}>
            <button className="see_all_jobs_button">
              SEE ALL JOBS
            </button>
          </Col>
          <Col lg={11} xs={6}></Col>
        </Row>
          </div>),
      },
  ];
function Jobs(){
  const tabUnderlineStyle = {
    backgroundColor: 'black',
  };
    return (
        <>
           <div className="div_1_heading">
                <Row>
                    <Col lg={3} xs={2}></Col>
                    <Col lg={6} xs={21}><span className="vaccancy_heading">Job Vacancies</span></Col>
                    <Col lg={0} xs={1}></Col>
                </Row>
                <Row style={{marginTop : "50px"}}>
                    <Col lg={3} xs={1}></Col>
                    <Col lg={18} xs={21}>
                    <div className="tabs-main"><Tabs style={{position : "relative", left :"17px", width : "95%"}}  defaultActiveKey="1" items={items} onChange={onChange} size="large" className="custom-tabs"/></div>
                    </Col>
                    <Col lg={1} xs={2}></Col>
                </Row>
           </div>
        </>
    )
}
export default Jobs