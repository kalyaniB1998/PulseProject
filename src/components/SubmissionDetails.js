import React from 'react'
import { NavLink} from 'react-router-dom'

function SubmissionDetails() {


  return (
    <div >
     <div className='pulsediv'> 
<div className='pulsebrn' style={{height:"70px"}}>
<NavLink to="/Messages" style={{color:"white"}}>Back</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
  </div>
</div>
<div className='msgdiv'>
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
     <td>1</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>2</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>3</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>4</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>5</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>6</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    
    <tr>
     <td>7</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>8</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>9</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>10</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>11</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>12</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>13</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>14</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>15</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>16</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>17</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    <tr>
     <td>18</td>
     <td></td>
     <td>unread</td>
     <td>Not Yet</td>
    </tr>  
    </tbody>
    </table>
  
    </table>
     
    </div>
       
    </div>
  )
}

export default SubmissionDetails