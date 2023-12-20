import React from 'react'

import {  NavLink } from 'react-router-dom'
import DetailNavigation from './DetailNavigation'
function Ranking() {
  return (
    <div className='App'>
      <div className='pulsediv'> 
 
      <div className='pulsebrn' >
<NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
  </div>
<DetailNavigation/>
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
    <NavLink to={"/getReport"}></NavLink>
  }}>Get Report</button>
  </div>
  )
}

export default Ranking