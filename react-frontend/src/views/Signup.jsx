import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={onSubmit}>
          <h1 className='title'>
            Create an account
          </h1>
        <input type="text" placeholder='Full Name' required />
          <input type="email" placeholder='Email Address' required />
          <input type="password" placeholder='Password' required />
          <input type="password" placeholder='Password Confirmation' required />
          <button className='btn btn-block'>Sign Up</button>
          <p className='message'>
            Already Registered? <Link to='/login'>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup