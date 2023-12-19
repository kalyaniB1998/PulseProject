import React from 'react'
import { NavLink } from 'react-router-dom'

function SubmissionDetails() {
  return (
    <div >
     <div className='pulsediv'> 
<div className='pulsebrn' style={{height:"70px"}}>
<NavLink to="/Messages" style={{color:"white"}}>Home</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
  </div>
</div>
        <table className='mtable' style={{border:"0.5px solid grey"}}>
        <caption style={{backgroundColor:"grey",textAlign:"left",color:"white",fontSize:"1.5rem",marginTop:"20px"}}>Submission Details</caption>
      
        <div style={{display:"flex",justifyContent:"right",marginRight:"45px",marginTop:"30px"}}>
            <label style={{marginRight:"10px"}}> My Search :</label>
            <input style={{padding:"5px"}}></input>
        </div>
       <table className='msgtable'>
       
    <thead>
    <tr>
        <th>#</th>
        <th>Receiver</th>
        <th>Read Status</th>
        <th>Read On</th>
    </tr>
    </thead> 
    <tbody className='two'>
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td></td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    </tbody>
    </table>
  
    </table>
     

       
    </div>
  )
}

export default SubmissionDetails