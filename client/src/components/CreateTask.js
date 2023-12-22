import React from 'react'
import { NavLink } from 'react-router-dom'
import TasksNavigation from './TasksNavigation'
import { Accordion } from 'react-bootstrap'


function CreateTask() {
  return (
    <div>
      <div className='pulsediv'>
    <div className='pulsebrn'>
    <NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong style={{fontFamily:"sans-serif",color:"white"}}>Pulse.</strong><strong style={{color:"rgb(224,59,43)"}}>B</strong><strong style={{color:"rgb(162,161,166)"}}>R</strong><strong style={{color:"rgb(224,59,43)",fontFamily:"monospace",fontSize:"2.6rem"}}>n</strong></h1>
      </div>
      <br></br>
  </div>
      <br/>
        <br/>
CreateTask
<br></br>
<TasksNavigation/>
<br></br>
<div style={{border:'1px solid blue',margin:'20px'}}>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Task and Interview Preparation</Accordion.Header>
        <Accordion.Body>
          <div className='label1'>
          <form>
            <div>
              <label>Task To</label>
              <select className='selectOption'>
                <option></option>
              </select>
            </div>
            <div>
              <label>Task Type</label>
              <select className='selectOption'>
                <option>Select...</option>
                <option>Technical Task- Practice and Theory</option>
                <option>Technical Task-Practice</option>
                <option>Technical Task-Theory</option>
                <option>Practice Resume</option>
                <option>Original Resume</option>
              </select>
            </div>
            <div>
              <label>Task Title</label>
              <select className='selectOption'></select>
            </div>
            <div>
              <label>Task To</label>
              <select className='selectOption'></select>
            </div>
          </form>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
    </div>
  )
}

export default CreateTask