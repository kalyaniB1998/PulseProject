import React from 'react'
import { NavLink } from 'react-router-dom'
import DetailNavigation from './DetailNavigation'
function FeeReport() {
  return (
    <div className='App'>
      <div className='pulsediv'> 
      <div className='pulsebrn' >
<NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
  </div>
  <DetailNavigation/>
</div>
    </div>
  )
}

export default FeeReport