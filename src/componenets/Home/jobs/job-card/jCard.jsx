import { Row, Col } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./jCard.css";


function JCard({tagged,jobTitle,jobOpportunity,jobDate,jobDes}) {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Row>
        <Col lg={1} xs={1}></Col>
        <Col className="margin_left" lg={22} xs={24}>
          <Row className="card_main">
            <Col lg={18} xs={24}>
              <div>
                <Row>
                  <Col lg={1} xs={1}></Col>
                  <Col lg={13} xs={18}>
                    <span className="job_title">{jobTitle}</span>
                  </Col>
                  <Col lg={9} xs={1}></Col>

                  <Col lg={1} xs={9}>
                    
                   {tagged ? <div className="hybrid-tag_1"><span className="hybrid-text_1">{jobOpportunity}</span></div> : null
}                    
                    <span className="date_span">{jobDate}</span>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col lg={1} xs={1}></Col>
                  <Col lg={21} xs={22}>
                    <span className="description_span_2">
                      {jobDes}
                    </span>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={1} xs={1}></Col>
                  <Col lg={10} xs={11}>
                  <Link
  to={{
    pathname: "/apply-to-job",
    search: `?jobs=${jobTitle.replace(/ /g, '-')}` // Replace spaces with hyphens
  }}
>
  <button className="button_apply">
    <span className="apply_text">Apply</span>
  </button>
</Link>
                  </Col>
                  <Col lg={1} xs={1}></Col>
                  <Col lg={10} xs={10}>
                  <Link
                    to={{
                      pathname: "/apply-to-job",
                      search: `?jobs=${jobTitle}`,
                    }}

                  >
                    <button className="button_refer"
                
                    >
                      <span className="refer_text" >Refer</span>
                    </button>
                    </Link>
                  </Col>
                  <Col lg={2} xs={1}></Col>
                </Row>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </div>
  );
}

export default JCard;
