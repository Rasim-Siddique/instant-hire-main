import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import './jobs.css'
import JCard from "./job-card/jCard";
import { Link, useLocation, useNavigate } from "react-router-dom";

const allJobsArr = [
  { jobTitle: 'Senior UI/UX Designer', jobOpportunity: "hybrid", jobDate: "22/Jan/2022", jobDes: "Remote UTCo to UTC8 | Competitive Package",jobType:"Full Time",jobLocation:"Paksitan",jobIntro:"The company was founded UIUX by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."] , requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."] },
  { jobTitle: 'Graphic Designer', jobOpportunity: "hybrid", jobDate: "10/dec/2999", jobDes: "Remote UTCo to UTC8 | Competitive Package",jobType:"Part Time",jobLocation: "Canada",jobIntro:"The company was founded GRAPHIC by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."]  ,requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."] },

  { jobTitle: 'React js', jobOpportunity: "remote", jobDate: "2/oct/2021", jobDes: "remote UTCo to UTC8 | Competitive Package",jobType:"Full Time",jobLocation:"America" ,jobIntro:"The company was founded React js by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."] , requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."]},
  { jobTitle: 'React native', jobOpportunity: "remote", jobDate: "33/nov/1999", jobDes: "remote UTCo to UTC8 | Competitive Package",jobType:"Part Time",jobLocation: "England", jobIntro:"The company was founded React Native by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."] },
  { jobTitle: '.net', jobOpportunity: "onsite", jobDate: "11/dec/2999", jobDes: "Remote UTCo to UTC8 | Competitive Package",jobType:"Full Time",jobLocation:"India", jobIntro:"The company was founded .net by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."] , requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."] },
  { jobTitle: 'wordpress', jobOpportunity: "onsite", jobDate: "17/apr/2000", jobDes: "Remote UTCo to UTC8 | Competitive Package",jobType:"Part Time",jobLocation: "Pakistan" , jobIntro:"The company was founded wordpress by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."]},




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