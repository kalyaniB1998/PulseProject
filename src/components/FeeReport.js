import React from 'react'
import { NavLink } from 'react-router-dom'
function FeeReport() {
  return (
    <div className='App'>
      <div className='pulsediv'> 
      <div className='pulsebrn'>
      <NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong style={{fontFamily:"sans-serif",color:"white"}}>Pulse.</strong><strong style={{color:"rgb(224,59,43)"}}>B</strong><strong style={{color:"rgb(162,161,166)"}}>R</strong><strong style={{color:"rgb(224,59,43)",fontFamily:"monospace",fontSize:"2.6rem"}}>n</strong></h1>
  </div>
   <nav className='ranknav'>
 <NavLink to="/Ranking" className='rank'>Ranking</NavLink>
 <NavLink to="/FeeReport" className='rank'>Fee Report</NavLink>
 <NavLink to="/BatchesSummary" className='rank'>Batches Summary</NavLink>
 <NavLink to="/Requests" className='rank'>Requests</NavLink>
 <NavLink to="/Messages" className='rank'>Messages</NavLink>
 <NavLink to="/ManageTask" className='rank'>Manage Task</NavLink>
 <NavLink to="/ManageUser" className='rank'>Manage User</NavLink>
</nav>
</div>
    </div>
  )
}

export default FeeReport