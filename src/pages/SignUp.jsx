import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './css/SignUp.css'; // Link to the new SignUp.css

const SignUp = () => {
  return (
    <div className='sgn-up-bg'>
      <div className='sgn-up-box'>
        <h1>Create your account</h1>
        <form>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email*'
            required
          />

          <input
            type='text'
            id='username'
            name='username'
            placeholder='Choose a username*'
            required
          />

          <input
            type='password'
            id='password'
            name='password'
            placeholder='Create a password*'
            required
          />

          <button type='submit'>Sign Up</button>
        </form>

        <h1 className='alt'>
          Already have an account?{' '}
          <span>
            <Link to='/signin'>Sign In</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
