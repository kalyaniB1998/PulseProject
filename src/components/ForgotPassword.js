import React from 'react'
import TopNavigation from './TopNavigation'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div className='forgot'>
        <h1 className='h1'>Forgot Password ?</h1>
        
       <p>Enter your registred e-mail address below to get your password to email.</p> 
        <div>
                <input placeholder='Email' ></input>
            </div>
            <br></br>
            <button type='button'>Back</button> 
              
                <Link to="/signup">Submit</Link>
          
    </div>
  )
}

export default ForgotPassword