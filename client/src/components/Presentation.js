import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import TasksNavigation from './TasksNavigation'

function Presentation() {
  let navigate=useNavigate();
  return (
    <div>
    <div className='pulsediv'>
    <div className='pulsebrn'>
    <NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong style={{fontFamily:"sans-serif",color:"white"}}>Pulse.</strong><strong style={{color:"rgb(224,59,43)"}}>B</strong><strong style={{color:"rgb(162,161,166)"}}>R</strong><strong style={{color:"rgb(224,59,43)",fontFamily:"monospace",fontSize:"2.6rem"}}>n</strong></h1>
      </div>
      <br/>
  </div>
  <br/><br/>
CreateTask
<TasksNavigation/>

      <form>
        <div>
          <label>Choose current batch</label>
          <br></br>
          <select className='login'>
            <option>Select..</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </select>
          </div>
        <div >
       <button className='buttonDiv' type='button'>Get Participants</button>
       <button className='buttonDiv' type='button'>Choose Participant</button>
       <button className='buttonDiv' type='button'>Choose Topic</button>
       <button className='buttonDiv' type='button'
       onClick={()=>{
        navigate("/reviewPresentaion");
       }}
       >Review Presentation</button>
       </div>
       <br/><br/>
       <div className='topic'>
        <p>Participant Here</p>
       </div>
       
       <div className='topic'>
        <p>Topic Here</p>
       </div>
      </form>

      



    </div>
  )
}

export default Presentation