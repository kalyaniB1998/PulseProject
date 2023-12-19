import React from 'react'

import {  NavLink } from 'react-router-dom'
function Ranking() {
  return (
    <div className='App'>
      <div className='pulsediv'> 
 
      <div className='pulsebrn' >
<NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
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
<br></br> <br></br><br></br> 
<p>Report for</p> 

<select >
    <option>select</option>
    <option>2305</option>
    <option>2306</option>
    <option>2307</option>
    <option>2308</option>
    <option>2309</option>
</select>
<br></br>

<br></br>
  <button type='button' onClick={()=>{
    <NavLink to={"/GetReport"}></NavLink>
  }}>Get Report</button>
  </div>
  )
}

export default Ranking