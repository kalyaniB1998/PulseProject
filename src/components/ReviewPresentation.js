import React from 'react';
import { CloseButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';

function ReviewPresentation() {
    let navigate = useNavigate();
  return (
    <div>
        <form>
        <div style={{display:'flex',justifyContent:"space-between"}}>
        <h4>Review Presentation</h4>
      <CloseButton style={{display:"flex",justifyContent:"flex-end",alignContent:"flex-end"}}
      onClick={()=>{
        navigate("/presentation");
      }}
      ></CloseButton>
            </div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Review Presentation</Accordion.Header>
        <Accordion.Body>
         <h5>Student Name*</h5>
         <h5>Batch Id*</h5>
         <h5>Selected Topic*</h5>
         <img></img>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
  </form>
    </div>
  )
}

export default ReviewPresentation