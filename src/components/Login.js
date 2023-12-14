import React from 'react'
import TopNavigation from './TopNavigation'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="App">
        <TopNavigation/>
        
        <form>
            <h2>Login</h2>
            <div>
                <input placeholder='Email'></input>
            </div>
            <div>
                <input placeholder='Password'></input>
            </div>
        </form>
        <br/>
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Login