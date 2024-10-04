import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  const onSubmit = (e) => {
    e.prevenntDefault();
  }
  return (
    <div className='login-signup-form animated fadeInDown'>
        <div className='form'>
         
          <form onSubmit={onSubmit}>
            <h1 className='title'>
              Log in to your account
            </h1>
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
            <button className='btn btn-block'>Login</button>
            <p className='message'>
              Not Registered? <Link to='/signup'>Create an account</Link>
            </p>
          </form>
        </div>
    </div>
  )
}

export default Login