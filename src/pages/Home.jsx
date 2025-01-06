import React from 'react';
import './css/Home.css';
import Header from '../components/Header';
import Profile from '../components/Profile';

const Home = () => {
  return (
    <div className='bg-home'>
      <Header />
      <Profile />
    </div>
  );
};

export default Home;
