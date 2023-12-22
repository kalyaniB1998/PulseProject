import React from 'react';
import { CloseButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



function ReviewPresentation() {
    let navigate = useNavigate();
  return (
    <div style={{backgroundColor:'black'}}>
        <form>
    <div  style={{display:'flex',justifyContent:"space-between",width:'1200px'}}>
        <h4>Review Presentation</h4>
      <CloseButton style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end"}}
      onClick={()=>{
        navigate("/presentation");
      }}
      ></CloseButton>
      </div>
      <div style={{width:'1200px'}}>
      
        <h3 style={{color:'white',backgroundColor:'lightpurple' ,padding:'6px'}}>Review Presentation</h3>
      
      <div className='circleDiv'>
        <div className='label1'>
          <br></br>
         <label>Student Name</label>
         <br></br>
         <label>Batch Id</label>
         <br></br>
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