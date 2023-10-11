import { Col, Dropdown, Row } from "antd";
import React from "react";
import logo from '../../assets/footer/logo-footer.png'
import './navbar-black.css'
import image1 from '../../assets/navbar/project.svg'
import image2 from '../../assets/navbar/dollar.svg'
import image3 from '../../assets/navbar/tax.svg'
import image4 from '../../assets/navbar/Target.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";


function NavbarBlackDekstop() {
  const location=useLocation()

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
                navigateToPage("/tax-consultancy")
              }}>Tax Consultancy</span>
            </Col>
            </Row>
          </Col>
        </Row>
      ),
    },
  ];
  const navigate = useNavigate();
  const navigateToPage = (path) => {
    navigate(path)
  }
  
  return (
    <div>
      <Row style={{ paddingTop: "15px", background : "#302A39" }}>
        <Col lg={1}></Col>
        <Col lg={4}>
          <img
            style={{ display: "flex", margin: "auto" }}
            src={logo}
            alt="logo"
          />
        </Col>
        <Col lg={1}></Col>
        <Col lg={1} >
        <Link to='/' >
          
          <button style={{cursor:'pointer'}} className="buttons_text_1">HOME</button>
          </Link>
        </Col>
        <Col lg={1}></Col>
        <Col lg={1}>
        <Link to='/all-jobs'>
          <button style={{cursor:'pointer'}} className="buttons_text_1">JOBS</button>
          </Link>
        </Col>

        <Col lg={1}></Col>
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
          <button  className="buttons_text_1" style={{position : "relative", right : "15%",color:location.pathname==='/all-jobs'?'purple':""}}>SERVICES</button>
    </Dropdown>
                  </Col>

        <Col lg={1}></Col>
        <Col lg={2}>
        <Link to='/about-us'>
          <button style={{cursor:'pointer'}} className="buttons_text_1">ABOUT US</button>
          </Link>
        </Col>
        <Col lg={2}>
        <Link to='/tax-consultancy'>

          <button style={{cursor:'pointer'}} className="buttons_text_1">Watch A Demo</button>
      </Link>
        </Col>
        <Col lg={2}></Col>
        <Col lg={3}>
        <Link to='/'>

          <button style={{cursor:'pointer'}} className="contact_us_button_1">Contact Us</button>
     </Link>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  );
}

export default NavbarBlackDekstop;
