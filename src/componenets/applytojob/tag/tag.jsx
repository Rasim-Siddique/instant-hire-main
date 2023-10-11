import { Col, Row } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './tag.css'
function TagJob({jobType}) {
    const [classNameTag, setClassNameTag] = useState("")
    const [textTag, setTextTag] = useState("")
    useEffect(() => {
        if(jobType === "Hybrid"){
            setClassNameTag("hybrid-tag")
            setTextTag("hybrid-text")
        }
        else if(jobType === "Remote"){
            setClassNameTag("remote-tag")
            setTextTag("remote-text")

        }
        else if(jobType === "Onsite") {
            setClassNameTag("onsite-tag")
            setTextTag("onsite-text")

        }
        console.log(classNameTag)
    },[])
    return(
        <>
            <Row> 
                <Col lg={2}></Col>
                <Col lg={1} style={{display : "flex", alignItems : "center", justifyContent : "center", textAlign : "center",marginTop : "50px", position : "relative", left : "1%"}} className={classNameTag}><span className={textTag}>{jobType}</span></Col>
                <Col lg={21}></Col>
            </Row>
           
        </>
    )
}
export default TagJob