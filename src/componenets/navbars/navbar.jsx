import { Col, Row } from "antd";
import React from "react";
import logo from '../../assets/instant-hire-logo.svg'
import { Button, Dropdown } from 'antd';
import './navbar.css'
import image1 from '../../assets/navbar/project.svg'
import image2 from '../../assets/navbar/dollar.svg'
import image3 from '../../assets/navbar/tax.svg'
import image4 from '../../assets/navbar/Target.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";





function NavbarDekstop() {
  const navigate = useNavigate();
  const location=useLocation()
  const navigateToPage = (path) => {
    navigate(path)
  }
  console.log("location:::",location)
  
  const items = [
    {
      key: '1',
      label: (
        <Row>
          <Col lg={0}></Col>
          <Col lg={24}>
            <Row className="buttons_services">
            
            <Col lg={6}><img src={image1} className="image-service" /></Col>  
            <Col lg={18}>
              <span className="text_col_span" onClick={() => {
                navigateToPage("/project-consultancy")
              }}>Project Consultancy</span>
            </Col>
            </Row>
          </Col>
        </Row>
      ),
    },
    {
      key: '2',
      label: (
        <Row>
        <Col lg={0}></Col>
        <Col lg={24}>
          <Row className="buttons_services">
          
          <Col lg={6}><img src={image4} className="image-service" /></Col>  
          <Col lg={18}>
            <span className="text_col_span"  onClick={() => {
                navigateToPage("/technical-recruitment")
              }}>Technical Recruitment</span>
          </Col>
          </Row>
        </Col>
      </Row>
      ),
    },
    {
      key: '3',
      label: (
        <Row>
          <Col lg={0}></Col>
          <Col lg={24}>
            <Row className="buttons_services">
            
            <Col lg={6}><img src={image2} className="image-service" /></Col>  
            <Col lg={18}>
              <span className="text_col_span" onClick={() => {
                navigateToPage("/payroll-management")
              }}>Payroll Management</span>
            </Col>
            </Row>
          </Col>
        </Row>
      ),
    },
    {
      key: '4',
      label: (
        <Row>
          <Col lg={0}></Col>
          <Col lg={24}>
            <Row className="buttons_services">
            
            <Col lg={6}><img src={image3} className="image-service" /></Col>  
            <Col lg={18}>
              <span className="text_col_span" onClick={() => {
                navigateToPage("/taxconsultancy")
              }}>Tax Consultancy</span>
            </Col>
            </Row>
          </Col>
        </Row>
      ),
    },
  ];
  return (
    <div>
      <Row style={{ paddingTop: "15px", gap:"2rem" }}>
        <Col lg={1}></Col>
        <Link to='/'>
        
        <Col lg={4}>
          <img
            style={{ display: "flex", margin: "auto" }}
            src={logo}
            alt="logo"
          />
        </Col>
</Link>
        <Col lg={1}></Col>
        <Col lg={1}>
          <Link to='/'>
          <button style={{color:location.pathname==='/'?'purple':""}}  className="buttons_text">HOME</button>
          </Link>
        </Col>
        
        <Col lg={1}>
          <Link to='/all-jobs'>
          <button style={{color:location.pathname==='/all-jobs'?'purple':""}} className="buttons_text">JOBS</button>
          </Link>
        </Col>
        
        <Col lg={1}>
              <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow={{
        pointAtCenter: true,
      }}
      
    >
          <button style={{color:location.pathname==='/project-consultancy || /payroll-management'  ?'purple':""}}  className="buttons_text" style={{position : "relative", right : "15%"}}>SERVICES</button>
    </Dropdown>
          
        </Col>

        
        <Col lg={2}>
        <Link to='/about-us'>

          <button style={{color:location.pathname==='/about-us'?'purple':""}} className="buttons_text">ABOUT US</button>
          </Link>
        </Col>
        <Col lg={3} style={{marginLeft:"auto", zIndex:"1", marginRight:"2rem", cursor:"pointer"}}>
        <Link to='/find-talent'>
        
          <button className="contact_us_button">Contact Us</button>
          </Link>
     
        </Col>
      </Row>
    </div>
  );
}

export default NavbarDekstop;
