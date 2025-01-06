import React from 'react';
import './css/Home.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Option from '../components/Option';

const Home = () => {
  return (
    <div className='bg-home'>
      <Header />
      <Profile />
      <Option />
    </div>
  );
};

export default Home;
