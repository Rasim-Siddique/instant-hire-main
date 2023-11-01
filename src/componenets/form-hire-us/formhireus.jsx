import { Col, Row, message } from "antd";
import React, { useState } from "react";
import "./formhireus.css";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function FormHireUs() {
  const navigate=useNavigate()
  const [formFields, setFormFields] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    companyLocation: "",
    companySize: "",
  });


  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };


  const handleSubmit = async (e) => {

        e.preventDefault();

        const {fullName,workEmail,phoneNumber,companyName, companyLocation, companySize}=formFields
        if(fullName && workEmail &&phoneNumber &&companyName && companyLocation && companySize){
          const response = await axios.post("/client-info-register", formFields);
          if(response.status===422 || !response){
            message.error('Something Went Wrong');
    
          }else{
            message.success('Client Info Created Successfully');
            setFormFields("")
            // navigate('/')
          }
          console.log("API Response:", response.data);
        }
     
        else{
          message.error('Please First Fill All the Fields');

        }

    // Clear form fields after submission
  
  };
  return (
    <>
    <Row>
      <Col xs={24}>
     
      <Row className="flex-row">
        <Row className="main_row_form">
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={18}>
            <span className="fill_this_heading">Fill this form for hiring</span>
          </Col>
          <Col lg={6} xs={5}></Col>
        </Row>

        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Full Name *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name *"
          value={formFields.fullName}
          onChange={handleFieldChange}
          className="input-form"
        />
      </div>
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Work Email *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            <div>
        <input
          type="text"
          name="workEmail"
          placeholder="Work Email *"
          value={formFields.workEmail}
          onChange={handleFieldChange}
        className="input-form"
        />
      </div>
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Phone Number *</span>
          </Col>
          <Col lg={5} xs={5}></Col>
        </Row>
        <Row>
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
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Company Name *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>

            <div>
        <input
          type="text"
          name="companyName"
          placeholder="company Name *"
          value={formFields.companyName}
          onChange={handleFieldChange}
        className="input-form"
        />
      </div>
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />

        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Company Location *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            {/* <input placeholder="address" className="input-form" /> */}
            <div>
        <input
          type="text"
          name="companyLocation"
          placeholder="company Location *"
          value={formFields.companyLocation}
          onChange={handleFieldChange}
        className="input-form"
        />
      </div>
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={17} xs={17}>
            <span className="full_name_text">Company Size *</span>
          </Col>
          <Col lg={6} xs={6}></Col>
        </Row>
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
            {/* <input placeholder="100-200" className="input-form" /> */}
         
            <div>
        <input
          type="text"
          name="companySize"
          placeholder="company Size *"
          value={formFields.companySize}
          onChange={handleFieldChange}
        className="input-form"
        />
      </div>
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={1} xs={1}></Col>
          <Col lg={22} xs={22}>
          <button className="submit_button" onClick={handleSubmit}>
        Submit
      </button>
          </Col>
          <Col lg={1} xs={1}></Col>
        </Row>
       
      </Row>
      </Col>
    </Row>
    
    </>
  );
}
export default FormHireUs;
