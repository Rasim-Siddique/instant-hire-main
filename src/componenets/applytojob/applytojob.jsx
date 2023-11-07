import { Col, Input, Row, message, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import NavbarDekstop from "../navbars/navbar";
import "./applytojob.css";
import image1 from "../../assets/applytojob/image2.svg";
import PhoneInput from "react-phone-input-2";
import search from "../.././assets/document-upload.svg"
import { useLocation } from "react-router-dom";
import axios from "axios";


const allJobsArr = [
  { jobTitle: 'Senior-UI/UX-Designer', jobOpportunity: "hybrid", jobDate: "22/Jan/2022", jobDes: "Remote UTCo to UTC8 | Competitive Package",jobType:"Full Time",jobLocation:"Paksitan",jobIntro:"The company was founded UIUX by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."] , requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."] },
  { jobTitle: 'Graphic-Designer', jobOpportunity: "hybrid", jobDate: "10/dec/2999", jobDes: "Remote UTCo to UTC8 | Competitive Package",jobType:"Part Time",jobLocation: "Canada",jobIntro:"The company was founded GRAPHIC by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."]  ,requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."] },

  { jobTitle: 'React-js', jobOpportunity: "remote", jobDate: "2/oct/2021", jobDes: "remote UTCo to UTC8 | Competitive Package",jobType:"Full Time",jobLocation:"America" ,jobIntro:"The company was founded React js by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."] , requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."]},
  { jobTitle: 'React-native', jobOpportunity: "remote", jobDate: "23/nov/1999", jobDes: "remote UTCo to UTC8 | Competitive Package",jobType:"Part Time",jobLocation: "England", jobIntro:"The company was founded React Native by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."] },
  { jobTitle: '.net', jobOpportunity: "onsite", jobDate: "11/dec/2999", jobDes: "Remote UTCo to UTC8 | Competitive Package",jobType:"Full Time",jobLocation:"India", jobIntro:"The company was founded .net by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."] , requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."] },
  { jobTitle: 'wordpress', jobOpportunity: "onsite", jobDate: "17/apr/2000", jobDes: "Remote UTCo to UTC8 | Competitive Package",jobType:"Part Time",jobLocation: "Pakistan" , jobIntro:"The company was founded wordpress by compliance and risk management professionals with well over 100 years of experience to address the need for a results driven intelligence based modular platform that addresses key regulatory challenges for the financial services companies globally. Since the system is built by practitioners, it takes into account the structural, policy and operational difficulties faced by different types of financial services firms of various sizes and complexity. Our solution is available as a SaaS or as an onsite solution. Regional offices are in Karachi, Doha, Qatar, Canada and Bahrain", jobRequirements:"Looking for a creative, skilled UI/UX Designer to design websites with functionality and aesthetics in mind. The UI Developer will work with Back-End Developers and Web Developers to ensure that the website is optimized for several devices and presented in an attractive way. To be successful as a UI Developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process", jobResponsibilties:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], requirements:["Work with other developers to ensure that the website is functional and visually appealing.", "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences", "Make strategic design and user-experience decisions related to core, and new, functions and features.", "Collaborate with other team members", "Present and defend your design decisions", "Present and defend your design decisions", "Present and defend your design decisions."], details:["Present and defend your design decisions", "Present and defend your design decisions."]},




]

function ApplyToJob() {
  const [data, setData]=useState(allJobsArr);
  const [cvFile, setCvFile] = useState(null);
  const [details, setDetails]=useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get('jobs');
  const [formFields, setFormFields] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
  });



  useEffect(()=>{
      if(paramValue){
            const filterDetails=data?.filter((jobs)=>{
              return jobs?.jobTitle===paramValue;
            })
   console.log("filterDetails:::", filterDetails[0])
   setDetails(filterDetails[0])
          }
  },[paramValue, data])
 
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };


  const handleFileChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "cvFile") {
      setCvFile(files[0]); // Store the selected CV file
    } else {
      setFormFields({ ...formFields, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, workEmail, phoneNumber } = formFields;

    if (fullName && workEmail && phoneNumber && cvFile) {
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('workEmail', workEmail);
        formData.append('phoneNumber', phoneNumber);
        formData.append('cvFile', cvFile);

        try {
            const response = await axios.post("/job-application-register", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                message.success('Client Info Created Successfully');
                setFormFields("");
                // navigate('/')
            } else {
                message.error('Something Went Wrong');
            }
        } catch (error) {
            message.error('Something Went Wrong');
        }
    } else {
        message.error('Please First Fill All the Fields');
    }
};



  return (
    <>
      <NavbarDekstop />
      <Row>
        <Col lg={24}>
          <p style={{background:"Yellow",fontSize:16, fontWeight:'bold', color:'green', marginLeft:180,marginTop:40, width:45, padding:20, borderRadius:10}}>{details?.jobOpportunity}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={2}></Col>

        <Col lg={8}>
          <span className="job-title-1">{details?.jobTitle}</span>
        </Col>
      </Row>
      <Row style={{ position: "relative", top: "50px", left: "-1.8%" }}>
        <Col lg={3}></Col>
        <Col lg={2} style={{ display: "flex", flexDirection: "row", gap: 25 }}>
          <div>
            <img src={image1} alt="img-ui" />
          </div>
          <div>
            <span className="job-type-text">Job Type</span>
            <br />
            <span className="full-time-text">{details?.jobType}</span>
          </div>
        </Col>
        <Col lg={1}></Col>
        <Col lg={2} style={{ display: "flex", flexDirection: "row", gap: 25 }}>
          <div>
            <img src={image1} alt="img-ui" />
          </div>
          <div>
            <span className="job-type-text">Job Location</span>
            <br />
            <span className="full-time-text">{details?.jobLocation}</span>
          </div>
        </Col>
        <Col lg={1}></Col>
        <Col lg={2} style={{ display: "flex", flexDirection: "row", gap: 25 }}>
          <div>
            <img src={image1} alt="img-ui" />
          </div>
          <div>
            <span className="job-type-text">Date Posted</span>
            <br />
            <span className="full-time-text">{details?.jobDate}</span>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "100px" }}>
        <Col lg={2}></Col>
        <Col lg={2} style={{ position: "relative", left: "1.5%" }}>
          <span className="headings_intro">Introduction: </span>
        
        </Col>
        <Col lg={19}></Col>
      </Row>
      <br />
      <Row style={{ width: "100%", height : "200%" }}>
        <Col lg={3} className="max_width_ad"></Col>
        <Col lg={10} style={{}}>
          <span className="text-description">
          {details?.jobIntro}
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />  
          <span className="job_req">Job Requirments : </span>
          <br />
          <br />
          <span className="text-description">
          {details?.jobDes}
          </span>

          <br />
          <br />
          <br />
          <br />
          <span className="job_req">Responsibilities : </span>


          <br />
          <br />
          <br />
          <br />
          <ul>
            {details?.jobResponsibilties?.map((values)=>{
              return(
                <>
            <li className="text-description">{values}</li>
                
                </>
              )
            })}
           

          </ul>
          <br />
          <br />
          <br />
          <br />
          
          <span className="job_req">Job Requirments : </span>
          <br />
          <br />
          <br />
          <br />
          <ul>
            <li className="text-description">{details?.jobRequirements}</li>
                
          
       
          </ul>
          <br />
          <br />
          <ul>
          <span className="job_req">Requirments : </span>

          {details?.requirements?.map((values)=>{
              return(
                <>
            <li className="text-description">{values}</li>
                
                </>
              )
            })}
         
       
          </ul>
          <br />
          <br/>
          <br/>
          <span className="job_req">Other Details: </span>
          <br/>
          <br/> 
         
          <ul>
          {details?.details?.map((values)=>{
              return(
                <>
            <li className="text-description">{values}</li>
                
                </>
              )
            })}
        
          </ul>
        </Col>
        <Col lg={2}></Col>
        <Col lg={8} className="main_form_div_1_2">
          <Row>
            <Col lg={1}></Col>
            <Col lg={14}>
              <br />
              <br />
              <span className="apply_for_this">Apply for this position</span>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Row style={{ width: "100%" }}>
              <Col lg={1} xs={1}></Col>
              <Col lg={17} xs={17}>
                <span className="full_name_text">Full Name *</span>
              </Col>
              <Col lg={6} xs={6}></Col>
            </Row>
            <br />
            <br />
          <Row style={{width : "100%",marginTop : "2vh"}}>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <input
             name="fullName"
             placeholder="Full Name *"
             value={formFields.fullName}
             onChange={handleFieldChange}
            className="input-form" />
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <Row style={{ width: "100%", marginTop : "5vh" }}>
              <Col lg={1} xs={1}></Col>
              <Col lg={17} xs={17}>
                <span className="full_name_text">Email *</span>
              </Col>
              <Col lg={6} xs={6}></Col>
            </Row>
            <Row style={{width : "100%",marginTop : "2vh"}}>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
          <input
          type="text"
          name="workEmail"
          placeholder="Work Email *"
          value={formFields.workEmail}
          onChange={handleFieldChange}
        className="input-form"
        />
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <Row style={{ width: "100%", marginTop : "5vh" }}>
              <Col lg={1} xs={1}></Col>
              <Col lg={17} xs={17}>
                <span className="full_name_text">Phone Number *</span>
              </Col>
              <Col lg={6} xs={6}></Col>
            </Row>
            <Row style={{width : "100%", marginTop : "2vh"}}>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
          <PhoneInput
        containerClass="input-form"
        country={"us"}
        inputStyle={{
          height: "100%",
          width: "100%",
          background: "#FFFFFF",
          border: "none",
          outline: "none",
        }}
        buttonStyle={{
          left: "-1px",
          background: "white",
        }}
        value={formFields.phoneNumber}
        onChange={(value) =>
          setFormFields({ ...formFields, phoneNumber: value })
        }
      />


          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>

        

 <Row style={{ width: "100%", marginTop : "5vh" }}>
              <Col lg={1} xs={1}></Col>
              <Col lg={17} xs={17}>
                <span className="full_name_text">CV *</span>
              </Col>
              <Col lg={6} xs={6}></Col>
            </Row>
        
          </Row>
          <Row style={{width : "100%", marginTop : "2vh"}}>
              <Col lg={1}></Col>
              <Col lg={22}>
              <Input
      type="file"
      name="cvFile"
      onChange={handleFileChange}
    />
              </Col>  
              <Col lg={1}></Col>
          </Row>
          <Row style={{width : "100%", marginTop: "4.5vh"}}>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
          <button className="submit_button" onClick={handleSubmit}>
        Submit
      </button>
          </Col>
          <Col lg={1} xs={1}></Col>
          </Row>
        </Col>
      </Row>
     
    </>
  );
}

export default ApplyToJob;
