import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './css/SignIn.css';

const SignIn = () => {
  return (
    <div className='sgn-in-bg'>
      <div className='sgn-in-box'>
        <h1>Welcome back</h1>
        <form>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Enter your username*'
            required
          />

          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password*'
            required
          />

          <button type='submit'>Sign In</button>
        </form>

        <h1 className='alt'>
          Don't have an account?{' '}
          <span>
            <Link to='/signup'>Sign Up</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SignIn;
