import React from 'react'
import TopNavigation from './TopNavigation'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='App'>
      <form>
        <h2>Signup</h2>
      <div>
        <input class="login" type="Name" placeholder="First Name"/>
      </div>
      <div>
        <input class="login" type="Name" placeholder="Last name"/>
      </div>
      <div>
        <input class="password" type="number" placeholder="Mobile No"/>
      </div>
      <div>
        <input class="password" type="name" placeholder="City/Town"/>
      </div>
      <div>
            <select>
                <option value="choose your state">Choose your states</option>
                <option value="Ap">Andhra pradesh</option>
                <option value="telangana">Telangana</option>
                <option value="mp">Madya pradesh</option>
                <option value="up">Uttar pradesh</option>
            </select>
        </div>
        <div>
           <input class="password" type="file" placeholder="profile pic"/>
           <br/>
           <br/>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoHljTV9c5ViwxQOf7TwqybNnhGh_FNY0hg&usqp=CAU"/>
        </div>
        <br/>
        <br/>
          <h5>Enter your account details:</h5>
        <div>
          <input class="login" type="email" placeholder="email Address"/> 
        </div>
        <div>
           <input class="password" type="password" placeholder="password"/>
        </div>
        <div>
           <button>Submit</button>
        </div>
      </form>
      <br/>
      <Link to="/">Login</Link>
  </div>
  )
}

export default Signup