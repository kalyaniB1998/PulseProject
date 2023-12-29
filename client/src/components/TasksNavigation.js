import React from 'react'
import { NavLink } from 'react-router-dom';

function TasksNavigation() {
  let activeLink=(obj)=>{
    if(obj.isActive===true){
    return({color:"white",backgroundColor:"blue"})
  }};
  return (
    <div>
<nav className='navBar'>
     
<NavLink style={(obj)=>{
  return activeLink(obj);
  }}  
  to="/presentation">Presentation</NavLink>
<NavLink style={(obj)=>{
  return activeLink(obj);
  }}  
  to="/taskReview">Task Review</NavLink>
<NavLink style={(obj)=>{
  return activeLink(obj);
  }}  
  to="/createTask">Create Task</NavLink>
<NavLink style={(obj)=>{
  return activeLink(obj);
  }}  
  to="/classAttendance">Class Attendance</NavLink>
</nav>
    </div>
  )
}

export default TasksNavigation