import React from 'react'
import { NavLink } from 'react-router-dom'

function ManageTask() {
  return (
    <div className='App'>
      <div className='pulsediv'> 
      <div className='pulsebrn' >
<NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
  </div>
    <nav className='ranknav'>
 <NavLink to="/ranking" className='rank'>Ranking</NavLink>
 <NavLink to="/feeReport" className='rank'>Fee Report</NavLink>
 <NavLink to="/batchesSummary" className='rank'>Batches Summary</NavLink>
 <NavLink to="/requests" className='rank'>Requests</NavLink>
 <NavLink to="/messages" className='rank'>Messages</NavLink>
 <NavLink to="/manageTask" className='rank'>Manage Task</NavLink>
 <NavLink to="/manageUser" className='rank'>Manage User</NavLink>
</nav>
</div>
        </div>
  )
}

export default ManageTask