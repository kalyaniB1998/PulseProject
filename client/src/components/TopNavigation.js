import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  let activeLink=(obj)=>{
    if(obj.isActive==true){
    return({color:"white",backgroundColor:"blue"})
  }};
  return (
    <div className='App'>
      <nav>
            <NavLink style={(obj)=>{
          return activeLink(obj);
             }} 
             to="/">Login</NavLink>
            <NavLink style={(obj)=>{
          return activeLink(obj);
             }}  
             to="/home">Home</NavLink>
            <NavLink 
            style={(obj)=>{
              return activeLink(obj);
              }}  
            to="/task">Task</NavLink>
            <NavLink to="/">Delete</NavLink>
            <NavLink to="/">Logout</NavLink>
            <NavLink
            style={(obj)=>{
              return activeLink(obj);
              }}  
            to="/GetReport">GetReport</NavLink>

        </nav>
    </div>
  )
}

export default TopNavigation