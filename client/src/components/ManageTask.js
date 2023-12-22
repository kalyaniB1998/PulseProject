import React from 'react'
import { NavLink } from 'react-router-dom'
import DetailNavigation from './DetailNavigation'

function ManageTask() {
  return (
    <div>
      <div className='pulsediv'> 
      <div className='pulsebrn' >
<NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
  </div>
    <DetailNavigation/>
</div>
<br/>
CreateTask
<br></br>
<nav className='navBar'>
<NavLink to="/presentation">Presentation</NavLink>
<NavLink to="/taskReview">Task Review</NavLink>
<NavLink to="/createTask">Create Task</NavLink>
<NavLink to="/classAttendance">Class Attendance</NavLink>
</nav>
</div>
  )
}

export default ManageTask