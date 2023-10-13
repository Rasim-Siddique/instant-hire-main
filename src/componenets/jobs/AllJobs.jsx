import { Col, Row, Tabs, Tag } from "antd";
import React, { useEffect, useState } from "react";
import NavbarDekstop from "../navbars/navbar";
import "./alljobs.css";
import { Input } from "antd";
import search from "../../assets/jobs/search-normal.svg";
import arrow from "../../assets/jobs/arrow-square-down.svg";
import JCard from "../Home/jobs/job-card/jCard";
import Footer from "../Home/Footer/footer";
import MobileNavbar from "../navbars/mobilenavbar";
import MobileFooter from "../footer/MobileFooter";
import { Link, useLocation, useNavigate } from "react-router-dom";

const { Search } = Input;

const allJobsArr = [
  { jobTitle: 'Senior UI/UX Designer', jobOpportunity: "hybrid", jobDate: "22/Jan/2022", jobDes: "Remote UTCo to UTC8 | Competitive Package" },
  { jobTitle: 'Graphic Designer', jobOpportunity: "hybrid", jobDate: "10/dec/2999", jobDes: "Remote UTCo to UTC8 | Competitive Package" },

  { jobTitle: 'React js', jobOpportunity: "remote", jobDate: "2/oct/2021", jobDes: "remote UTCo to UTC8 | Competitive Package" },
  { jobTitle: 'React Native', jobOpportunity: "remote", jobDate: "33/nov/1999", jobDes: "remote UTCo to UTC8 | Competitive Package" },
  { jobTitle: '.net', jobOpportunity: "onsite", jobDate: "11/dec/2999", jobDes: "Remote UTCo to UTC8 | Competitive Package" },
  { jobTitle: 'wordpress', jobOpportunity: "onsite", jobDate: "17/apr/2000", jobDes: "Remote UTCo to UTC8 | Competitive Package" },




]



function AllJobs() {
  const [data, setData] = useState(allJobsArr)
  const [searchValue, setSearchValue] = useState("")

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



  console.log("data::",data)




const searchHandleChange=(e)=>{
  setSearchValue(e.target.value)

  let value=e.target.value;
  if(value){
      setSearchValue(value);
  
      // Filter data based on the search value
      const filteredData = data.filter((job) =>
        job.jobTitle.toLowerCase().includes(value.toLowerCase()) ||
        job.jobOpportunity.toLowerCase().includes(value.toLowerCase())||
        job.jobDate.toLowerCase().includes(value.toLowerCase()) ||
        job.jobDes.toLowerCase().includes(value.toLowerCase())
      );
  
      setFilteredData(filteredData);
  }
  else{
    setFilteredData(data)
  }
}

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
      <Row style={{ marginTop: "15px" }} >

        <div className="config_dekstop">
          <Col lg={2}></Col>
          <Col lg={8} xs={20} style={{ height: "62px", position: "relative", right: "0.8%" }}>
            <Input
value={searchValue}
onChange={searchHandleChange}
              placeholder="Search Your Jobs"
              suffix={<img src={search} alt="search-img" />}
              height={"62px"}
              style={{
                background: "#FFFFFF",
                /* border */

                border: "1px solid #E1E4E8",
                borderRadius: "12px",
              }}
            />
          </Col>

          <Col lg={5} xs={20} style={{ height: "62px", position: "relative", right: "0.8%" }}>
            <Input
              placeholder="Job Type"
              suffix={<img src={arrow} alt="arrow-img" />}
              height={"62px"}
              style={{
                background: "#FFFFFF",
                /* border */

                border: "1px solid #E1E4E8",
                borderRadius: "12px",
              }}
            />
          </Col>

          <Col lg={5} xs={20} style={{ height: "62px", position: "relative", right: "0.8%" }}>
            <Input
              placeholder="Job Location"
              suffix={<img src={arrow} alt="location-img" />}
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
</Row>
        <Row style={{ marginTop: "50px", paddingBottom:100 }}>
          <Col lg={3} xs={1}></Col>
          <Col lg={18} xs={21}>
            <div className="tabs-main" style={{ display: 'flex', flexDirection: "column", gap: 30 }} >
              <div>
                <Link
                  to={{
                    pathname: "/all-jobs",
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
                        pathname: "/all-jobs",
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
                        <Col lg={12} xs={23} style={{marginBottom:40}}><JCard
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

    </>
  );
}

export default AllJobs;
