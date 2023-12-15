import React from 'react'
import TopNavigation from './TopNavigation'
import { Link } from 'react-router-dom'

function Login() {

  return (
    <div className="App">
        <TopNavigation/>
        <div className="body">
        <form>
          <img src="./images/brn.png"></img>
          {/* <p>Learn.Practise.Performe</p> */}
        <h2>LogIn</h2>
            <div>
                <input placeholder='Email' ></input>
            </div>
            <div>
                <input placeholder='Password'></input>
            </div>
            <div>
            <button type="button">LOGIN</button>
           </div>
            <div>
            <Link className="acc" to="/signup">CREATE AN ACCOUNT</Link>
            </div>
            <Link to="/Forgot Password">Fotgot Password?</Link>
        </form>
        </div>
    </div>
  )
}

export default Login