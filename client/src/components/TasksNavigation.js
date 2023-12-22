import React from 'react'
import { NavLink } from 'react-router-dom';

function TasksNavigation() {
  return (
    <div>
<nav className='navBar'>
     
<NavLink to="/presentation">Presentation</NavLink>
<NavLink to="/taskReview">Task Review</NavLink>
<NavLink to="/createTask">Create Task</NavLink>
<NavLink to="/classAttendance">Class Attendance</NavLink>
</nav>
    </div>
  )
}

export default TasksNavigation