import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <div className='App'>
        <nav>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/">Delete</NavLink>
            <NavLink to="/">Logout</NavLink>
            <NavLink to="/GetReport">GetReport</NavLink>
        </nav>
    </div>
  )
}

export default TopNavigation