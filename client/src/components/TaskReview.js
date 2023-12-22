import React from 'react'
import { NavLink } from 'react-router-dom'
import TasksNavigation from './TasksNavigation'


function TaskReview() {
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
<br></br>
   
    <div className='taskDiv'>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Task No.</th>
            <th>Task Type</th>
            <th>Task Title</th>
            <th>Submission Details</th>
            <th>Approved</th>
            <th>Rejected</th>
            <th>Review Pending</th>
            <th>Assigned Time</th>
            <th>Dead Line</th>
          </tr>
        </thead>
      </table>
      <br></br>
      <div style={{display:'flex',justifyContent:'flex-end'}}>
      <NavLink>Add more</NavLink>
      </div>
      <br></br>
    </div>

  
    </div>
  )
}

export default TaskReview