import React from 'react'

import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='App'>
    
      <form>
        <h2>Signup</h2>
      <div>
        <input className="login" type="Name" placeholder="First Name"/>
      </div>
      <div>
        <input className="login" type="Name" placeholder="Last name"/>
      </div>
      <div>
        <input className="login" type="number" placeholder="Mobile No"/>
      </div>
      <div>
        <input className="login" type="name" placeholder="City/Town"/>
      </div>
      <div>
            <select className='login'>
                <option value="choose your state">choose your state</option>
                <option value="Ap">Andhra pradesh</option>
                <option value="telangana">Telangana</option>
                <option value="mp">Madya pradesh</option>
                <option value="up">Uttar pradesh</option>
            </select>
        </div>
        <div>
          <img className='profilepic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoHljTV9c5ViwxQOf7TwqybNnhGh_FNY0hg&usqp=CAU"/>
          <br></br>
          <br></br>
          <input className='' type="file" placeholder="profile pic"/>
        </div>
          <h5>Enter your account details:</h5>
        <div>
          <input className="login" type="email" placeholder="email Address"/> 
        </div>
        <div>
           <input className="login" type="password" placeholder="password"/>
        </div>
        <div>
           <button className='login'>Submit</button>
        </div>
      </form>
      <br/>
      <Link to="/">Login</Link>
  </div>
  )
}

export default Signup;