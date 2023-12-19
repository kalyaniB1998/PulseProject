import React from 'react'
import { NavLink } from 'react-router-dom'

function Messages() {
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
 <NavLink to="/SubmissionDetails">SubmissionDetails</NavLink>
 </nav>
</div>
<div className='msgdiv'>
  <button type='button'className='msgbutton'>Send Message</button>
  <table className='mtable'>
  <caption className='msgbutton'>1,2,3,4,5,6</caption>
  <table className='msgtable'>
   <thead >
    <tr>
      <th>Msg UID.</th>
      <th>Category</th>
      <th>Subject</th>
      <th>Sent to</th>
      <th>read/unread</th>
      <th>Sent By</th>
      <th>Delivered on</th>
    </tr>
    </thead>
    <tbody>
    <tr  className='msgtr'>
        <td>6</td>
        <td>Information</td>
        <td>rhkhtjkrhk</td>
        <td>2305</td>
        <td>0 of 0</td>
        <td></td>
        <td>Tue, 21-Mar-2023 01:10:13 pm</td>
      </tr>
      <tr  className='msgtr'>
        <td>5</td>
        <td>Job Aportunity</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr  className='msgtr'>
        <td>4</td>
        <td>Fee Reminder</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr  className='msgtr'>
        <td>3</td>
        <td>Irregular</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr  className='msgtr'>
        <td>2</td>
        <td>late of Office</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr  className='msgtr'>
        <td>1</td>
        <td>Apreciation</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      
      </tbody>
      </table>
  </table>

</div>
    </div>
  )
}

export default Messages