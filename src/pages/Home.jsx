import React from 'react';
import './css/Home.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Option from '../components/Option';
import Submit from '../components/Submit';
import ResBox from '../components/ResBox';

const Home = () => {
  return (
    <div className='bg-home'>
      <Header />
      <div className='content'>
        <Profile />
        <Option />
        <Submit />
      </div>
      <ResBox />
    </div>
  );
};

export default Home;
