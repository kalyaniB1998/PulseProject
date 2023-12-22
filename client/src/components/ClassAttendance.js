import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import TasksNavigation from './TasksNavigation'
import { CloseButton } from 'react-bootstrap'


function ClassAttendance() {
  let navigate=useNavigate();
  return (
    <div>
      <div className='pulsediv'>
    <div className='pulsebrn'>
    <NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong style={{fontFamily:"sans-serif",color:"white"}}>Pulse.</strong><strong style={{color:"rgb(224,59,43)"}}>B</strong><strong style={{color:"rgb(162,161,166)"}}>R</strong><strong style={{color:"rgb(224,59,43)",fontFamily:"monospace",fontSize:"2.6rem"}}>n</strong></h1>
      </div>
      <br></br>
  </div>

      <br/>
      <br/>
CreateTask
<br></br>
<TasksNavigation/>
   <div  className='label1'>
     <form style={{border:'1px solid blue'}}>
    <div className='sessionDiv'>
      <h3 style={{color:'white'}}>Session Details</h3>
      <CloseButton 
      onClick={()=>{
        navigate("/manageTask");
      }}
      ></CloseButton>
    </div>
    <h5>Current Batch</h5>
    <div>
        <label>Session title</label>
        <input className='sessionInput'></input>
      </div>
      <div>
        <label>Session Date</label>
        <input className='sessionInput' type='date'></input>
      </div>
      <div>
        <label>Session Start Time</label>
        <input className='sessionInput' type='time'></input>
      </div>
      <div>
        <label>Session End Time</label>
        <input className='sessionInput' type='time'></input>
      </div>
      <div>
        <label>Duration</label>
      </div>
      <div>
        <label>Session Description</label>
        <textarea></textarea>
      </div>
      <div>
        <button type='button' style={{fontSize:'1.2rem'}}>Update Attendance</button>
      </div>
    </form>
     </div>
    </div>
  )
}

export default ClassAttendance