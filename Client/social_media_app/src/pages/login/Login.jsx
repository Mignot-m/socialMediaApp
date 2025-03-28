import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1> Hello world</h1>
          <p>  lorem Neque porro quisquam est qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit...</p>
          <span>Do you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
