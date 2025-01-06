import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <div className='title-bar'>
      <div className='title'>
        <Link to='/'>Exp_App</Link>
      </div>
    </div>
  );
};

export default Header;
