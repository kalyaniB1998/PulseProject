import React from 'react'
import TopNavigation from './TopNavigation'
import { Link } from 'react-router-dom'

function Login() {

  return (


    <div className="App" style={{backgroundColor:"rgb(54,65,80)"}}>
<TopNavigation/>
        
        <form >
          <img src="./images/logo.png"></img>
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
            <Link to="/forgot Password">Fotgot Password?</Link>
        </form>
    </div>
  )
}

export default Login