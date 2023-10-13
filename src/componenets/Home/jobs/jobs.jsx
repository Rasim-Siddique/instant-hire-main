import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import './jobs.css'
import JCard from "./job-card/jCard";
import { Link, useLocation, useNavigate } from "react-router-dom";

const allJobsArr = [
  { jobTitle: 'Senior UI/UX Designer', jobOpportunity: "hybrid", jobDate: "22/Jan/2022", jobDes: "Remote UTCo to UTC8 | Competitive Package" },
  { jobTitle: 'Graphic Designer', jobOpportunity: "hybrid", jobDate: "10/dec/2999", jobDes: "Remote UTCo to UTC8 | Competitive Package" },

  { jobTitle: 'React js', jobOpportunity: "remote", jobDate: "2/oct/2021", jobDes: "remote UTCo to UTC8 | Competitive Package" },
  { jobTitle: 'React Native', jobOpportunity: "remote", jobDate: "33/nov/1999", jobDes: "remote UTCo to UTC8 | Competitive Package" },
  { jobTitle: '.net', jobOpportunity: "onsite", jobDate: "11/dec/2999", jobDes: "Remote UTCo to UTC8 | Competitive Package" },
  { jobTitle: 'wordpress', jobOpportunity: "onsite", jobDate: "17/apr/2000", jobDes: "Remote UTCo to UTC8 | Competitive Package" },




]
function Jobs() {
  const [data, setData] = useState(allJobsArr)
  const [filteredData, setFilteredData] = useState([])
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get('jobs');

  console.log("paramValue:::", paramValue)

  const defaultParam = 'all';
  useEffect(() => {
    if (!paramValue) {
      searchParams.set('jobs', defaultParam);
      navigate(`?${searchParams.toString()}`);
    }
  }, [paramValue, navigate, defaultParam]);

  useEffect(() => {
    setFilteredData(data)
  }, [data])


  useEffect(() => {
    const updatedData = data.filter((values) => {
      return (paramValue !== 'all' ? values.jobOpportunity === paramValue : values);

    })
    setFilteredData(updatedData);
  }, [paramValue, data]);

  return (
    <>
      <div className="div_1_heading">
        <Row>
          <Col lg={3} xs={2}></Col>
          <Col lg={6} xs={21}><span className="vaccancy_heading">Job Vacancies</span></Col>
          <Col lg={0} xs={1}></Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col lg={3} xs={1}></Col>
          <Col lg={18} xs={21}>
            <div className="tabs-main" style={{ display: 'flex', flexDirection: "column", gap: 30 }} >
            <div>
  <Link
    to={{
      pathname: "/",
      search: `?jobs=all`,
    }}
    
  >
    <span
    className={paramValue === "all" ? "active-link key_1_all" : "key_1_all"}
    >All</span>
  </Link>
  {data &&
    [...new Set(data.map((jobOppo) => jobOppo.jobOpportunity))].map((uniqueJobOpportunity) => (
      <Link
        key={uniqueJobOpportunity}
        to={{
          pathname: "/",
          search: `?jobs=${uniqueJobOpportunity}`,
        }}
        
      >
        <span 
    className={paramValue === uniqueJobOpportunity ? "active-link key_1_all" : "key_1_all"}
        
        >{uniqueJobOpportunity}</span>
      </Link>
    ))}
</div>
              <div className="jobs_container">
                <Row>

                  {filteredData && filteredData?.map((jobs) => {
                    const { jobTitle, jobOpportunity, jobDate, jobDes } = jobs
                    return (
                      <>
                        <Col lg={12} xs={23}><JCard
                          jobTitle={jobTitle}
                          jobOpportunity={jobOpportunity}
                          jobDate={jobDate}
                          jobDes={jobDes}
                        /></Col>

                      </>
                    )
                  })}





                </Row>




              </div>
            </div>
          </Col>
          <Col lg={1} xs={2}></Col>
        </Row>
      </div>
    </>
  )
}
export default Jobs