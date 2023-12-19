import React from 'react'
import { NavLink } from 'react-router-dom'

function TasksNavigation() {
  return (
    <div>
    <div className='pulsediv'>
      {/* <div className='pulsebrn'>
    <NavLink to="/" style={{color:"white"}}>Home</NavLink>
    <h1><strong style={{fontFamily:"sans-serif",color:"white"}}>Pulse.</strong><strong style={{color:"rgb(224,59,43)"}}>B</strong><strong style={{color:"rgb(162,161,166)"}}>R</strong><strong style={{color:"rgb(224,59,43)",fontFamily:"monospace",fontSize:"2.6rem"}}>n</strong></h1>
  </div> */}
        <nav className='ranknav'>
            <NavLink to="/presentation">Presentation</NavLink>
            <NavLink to="/taskReview">Task Review</NavLink>
            <NavLink to="/createTask">Create Task</NavLink>
            <NavLink to="/classAttendance">Class Attendance</NavLink>
            <br></br>
        </nav>
        </div>
    </div>
  )
}

export default TasksNavigation