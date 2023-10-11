import { Col, Row, Tabs, Tag } from "antd";
import React from "react";
import NavbarDekstop from "../navbars/navbar";
import "./alljobs.css";
import { Input } from "antd";
import search from "../../assets/jobs/search-normal.svg";
import arrow from "../../assets/jobs/arrow-square-down.svg";
import JCard from "../Home/jobs/job-card/jCard";
import Footer from "../Home/Footer/footer";
import MobileNavbar from "../navbars/mobilenavbar";
import MobileFooter from "../footer/MobileFooter";

const { Search } = Input;
const items = [
    {
      key: '1',
      label: <span className="key_1_all">All</span>,
      children: (
      <div>
        <Row>
          
          <Col lg={11} xs={22}><JCard /></Col>
          
          <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={11} xs={22}><JCard /></Col>
          <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
        </Row>
        <br />
        <br />
        <Row>
          
          <Col lg={11} xs={22}><JCard /></Col>
          <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
        </Row>
        <br />
        <br />
        <Row>
          
          <Col lg={11} xs={22}><JCard /></Col>
          <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
        </Row>
        <br />
        <br />
        <Row>
          
          <Col lg={11} xs={22}><JCard /></Col>
          <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={9} xs={8}></Col>
          <Col lg={4} xs={8}>
            <button className="see_all_jobs_button">
              Load More
            </button>
          </Col>
          <Col lg={11} xs={8}></Col>
        </Row>
      </div>),
    },
    {
      key: '2',
      label: <span className="key_1_remote">Remote</span>,
      children: (
        <div>
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row> <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row> <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22}className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          
        <br />
        <Row>
          <Col lg={9} xs={8}></Col>
          <Col lg={4} xs={8}>
            <button className="see_all_jobs_button">
              Load More
            </button>
          </Col>
          <Col lg={11} xs={8}></Col>
        </Row>
        </div>),
    },
    {
      key: '3',
      label: <span className="key_1_onsite">Onsite</span>,
      children: (
        <div>
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
        <br />
        <Row>
          <Col lg={9} xs={8}></Col>
          <Col lg={4} xs={8}>
            <button className="see_all_jobs_button">
              Load More
            </button>
          </Col>
          <Col lg={11} xs={8}></Col>
        </Row>
        </div>),
    },
    {
        key: '4',
        label: <span className="key_1_hybrid">Hybrid</span>,
        children: (
          <div>
            <Row>
              <Col lg={11} xs={22}><JCard /></Col>
              <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
            </Row>
            <br />
            <br />
            <Row>
              
              <Col lg={11} xs={22}><JCard /></Col>
              <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
            </Row>
            <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>
          <br />
          <br />
          <Row>
            
            <Col lg={11} xs={22}><JCard /></Col>
            <Col lg={11} xs={22} className="padding_mobile"><JCard /></Col>
          </Row>

            <br />
        <br />
        <Row>
          <Col lg={9} xs={8}></Col>
          <Col lg={4} xs={8}>
            <button className="see_all_jobs_button last_button">
              Load More
            </button>
          </Col>
          <Col lg={11} xs={8}></Col>
        </Row>
          </div>),
      },
  ];
function AllJobs() {
  return (
    <>
    <div className="mobile_hide">
      <NavbarDekstop />
      </div>
      <div className="dekstop_hide">
          <MobileNavbar />
      </div>
      <br />
      <br />
      <br />
      <Row className="mt_row_text">
        <Col lg={2} xs={2}></Col>
        <Col lg={6} xs={22}>
          <span className="job-text-vaccancy">Job Vacancies</span>
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={2} xs={2}></Col>
        <Col lg={20} xs={20}>
          <span className="description_text_job">
            Discover the latest job vacancies across a range of industries and
            job functions. Apply now and take the next step in your career.
          </span>
        </Col>
        <Col lg={2} xs={2}></Col>
      </Row>
      <br />
      <Row style={{marginTop : "15px"}} >
       
        <div className="config_dekstop">
      <Col lg={2}></Col>
        <Col lg={8} xs={20} style={{height : "62px", position :"relative", right : "0.8%"}}>
          <Input
            placeholder="Search Your Jobs"
            suffix={<img src={search} />}
            height={"62px"}
            style={{
              background: "#FFFFFF",
              /* border */

              border: "1px solid #E1E4E8",
              borderRadius: "12px",
            }}
          />
        </Col>
   
        <Col lg={5} xs={20} style={{height : "62px", position :"relative", right : "0.8%"}}>
        <Input
            placeholder="Job Type"
            suffix={<img src={arrow} />}
            height={"62px"}
            style={{
              background: "#FFFFFF",
              /* border */

              border: "1px solid #E1E4E8",
              borderRadius: "12px",
            }}
          />
        </Col>
        
        <Col lg={5} xs={20} style={{height : "62px", position :"relative", right : "0.8%"}}>
        <Input
            placeholder="Job Location"
            suffix={<img src={arrow} />}
            height={"62px"}
            style={{
              background: "#FFFFFF",
              /* border */

              border: "1px solid #E1E4E8",
              borderRadius: "12px",
            }}
          />
        </Col>
        </div>
                
            <Row className="mt_top_1">
                    <Col lg={3} xs={2}></Col>
                    <Col lg={18} xs={19} >
                    <Tabs style={{}} defaultActiveKey="1" items={items}  size="large" className="custom-tabs"/>

                    </Col>
                    <Col lg={1} xs={3}></Col>
                </Row>
            
        </Row>
        {/* <div className="mobile_hide">
          <Footer />
        </div>
        <div className="dekstop_hide" style={{paddingTop : "170vh"}}>
            <MobileFooter />
        </div> */}
    </>
  );
}

export default AllJobs;
