import React from 'react'
import TopNavigation from './TopNavigation'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='App'>
        <TopNavigation/>
        <form>
          <img src="./images/brn.png"></img>
        <h2>Sign In</h2>
            <div>
                <input placeholder='Email'></input>
            </div>
            <div>
                <input placeholder='Password'></input>
            </div>
            <button>Login</button>
        </form>
        <br/>
        <Link to="/signup">CREATE AN ACCOUNT</Link>

    </div>
  )
}

export default Login