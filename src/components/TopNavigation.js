import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <div className='App'>
        <nav>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/home">Home</NavLink>
        </nav>
    </div>
  )
}

export default TopNavigation