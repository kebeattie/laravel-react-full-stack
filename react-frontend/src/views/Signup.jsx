import {useRef} from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider'

const Signup = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const {setUser, setToken} = useStateContext();


  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value, 
    };

    

    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setToken(data.token);
        setUser(data.user);
      })
      .catch(err => {
        const response = err.response;
        if(response && response.status == 422) {
          console.log(response.data.errors);
        }
      })
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={onSubmit}>
          <h1 className='title'>
            Create an account
          </h1>
        <input ref={nameRef} type="text" placeholder='Full Name' required />
          <input ref={emailRef} type="email" placeholder='Email Address' required />
          <input ref={passwordRef} type="password" placeholder='Password' required />
          <input ref={passwordConfirmationRef} type="password" placeholder='Password Confirmation' required />
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