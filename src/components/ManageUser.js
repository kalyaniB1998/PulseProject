import React from 'react'
import { NavLink } from 'react-router-dom'
function ManageUser() {
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
<div>
  <h2 className='manage'>Manage Users</h2>
  Search<input style={{margin:"right"}}></input>
  <table className="user1">
 <thead>
  <tr>
    <th>ID</th>
    <th>Photography</th>
    <th className="firstname">FirstName</th>
    <th className="surname">SurName</th>
    <th>Email</th>
    <th>MobileNo</th>
    <th className="role">Role</th>
    <th className="approve">Aprove</th>
    <th className="edit">Edit</th>
    <th className="delete">Delete</th>
    </tr>
    </thead>
     <tbody>
      <tr>
       <td>1</td>
       <img src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>2</td>
       <img src="./images/girl.jpeg"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>3</td>
       <img src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>4</td>
       <img src="./images/girl.jpeg"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>4</td>
       <img src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>5</td>
       <img src="./images/girl.jpeg"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>6</td>
       <img src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>7</td>
       <img src="./images/girl.jpeg"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>8</td>
       <img src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>9</td>
       <img src="./images/girl.jpeg"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>10</td>
       <img src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
     </tbody>
  </table>
</div>
    </div>

  )
  }
export default ManageUser