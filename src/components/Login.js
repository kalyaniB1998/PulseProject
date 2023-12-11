import React from 'react'

function Login() {
  return (
    <div className='App'>
        <form>
            <h2>Login</h2>
            <div>
                <input placeholder='Email'></input>
            </div>
            <div>
                <input placeholder='Password'></input>
            </div>
        </form>
    </div>
  )
}

export default Login