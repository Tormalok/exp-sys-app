import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <div className='title-bar'>
      <div className='container'>
        <div className='title'>
          <Link to='/'>
            <h1>CDD Exp System</h1>
          </Link>
        </div>
        <Link className='btn' to='/signin'>
          <div>Sign In</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
