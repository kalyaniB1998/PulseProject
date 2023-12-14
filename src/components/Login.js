import React from 'react'
import TopNavigation from './TopNavigation'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='App'>

        <TopNavigation/>
        <form>
          <img src="./images/brn.png"></img>
        <h2>Login In</h2>
            <div>
                <input placeholder='Email'></input>
            </div>
            <div>
                <input placeholder='Password'></input>
            </div>
            <br></br>
            <button type="button">LOGIN</button>
            <br></br>
            <br></br>
            <Link className="acc" to="/signup">Create an account</Link>
        </form>
      
    

    </div>
  )
}

export default Login