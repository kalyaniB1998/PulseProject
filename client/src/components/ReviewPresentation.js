import React from 'react';
import { CloseButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



function ReviewPresentation() {
    let navigate = useNavigate();
  return (
    <div>
        <form>
    <div  style={{display:'flex',justifyContent:"space-between",width:'1200px'}}>
        <h4>Review Presentation</h4>
      <CloseButton style={{display:"flex",justifyContent:"flex-end",alignContent:"flex-end"}}
      onClick={()=>{
        navigate("/presentation");
      }}
      ></CloseButton>
      </div>
      <div style={{width:'1200px'}}>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Review Presentation</Accordion.Header>
        <Accordion.Body>
      <div className='circleDiv'>
        <div className='label1'>
         <label>Student Name</label>
         <label>Batch Id</label>
         <label>Selected Topic</label>
         </div>
         <div>
          <Container>
         <Row>
        <Col xs={6} md={4}>
          <Image src='./images/cicle.png' roundedCircle style={{width:'150px', height:'150px', boxShadow:'2px 2px 30px gray'}}/>
        </Col>
      </Row>
    </Container>         
    </div>
      </div>
      <div className='label1'>
      <label className='selectLabel'>Given Presentation</label>
         <select className='selectOption'>
          <option>Select...</option>
          <option>Yes</option>
          <option>No</option>
         </select>
         <br></br>
         <br/>
         <br/>
         <label className='selectLabel'>Remarks</label>
         <textarea></textarea>
         <button type='button' style={{fontSize:'1.3rem'}}>Review Presentation</button>
         </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
      <div className='closeButton'>
        <button type="button"
        onClick={()=>{
          navigate("/Presentation");
        }}
        >Close</button>
      </div>
  </form>
    </div>
  )
}

export default ReviewPresentation