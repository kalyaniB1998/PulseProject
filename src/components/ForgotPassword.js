import React from 'react'
import TopNavigation from './TopNavigation'

function ForgotPassword() {
  return (
    <div className='App'>
    <TopNavigation/>
        <h1>Forgot Password ?</h1>
        <br></br>
        Enter your registred e-mail address below to get your password to email.
        <div>
                <input placeholder='Email' ></input>
            </div>
            <div>
                <button type="button">Back</button>

                <button type="button">Submit</button>
            </div>
    </div>
  )
}

export default ForgotPassword