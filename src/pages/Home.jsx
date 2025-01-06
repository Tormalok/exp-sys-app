import React from 'react';
import './css/Home.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Option from '../components/Option';
import Submit from '../components/Submit';

const Home = () => {
  return (
    <div className='bg-home'>
      <Header />
      <Profile />
      <Option />
      <Submit />
    </div>
  );
};

export default Home;
