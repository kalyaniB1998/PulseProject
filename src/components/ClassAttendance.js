import React from 'react'
import { NavLink } from 'react-router-dom'
import TasksNavigation from './TasksNavigation'


function ClassAttendance() {
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

    </div>
  )
}

export default ClassAttendance