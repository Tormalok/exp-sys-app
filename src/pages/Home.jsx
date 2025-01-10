import React from 'react';
import './css/Home.css';
import Header from '../components/Header';
import Qbox from '../components/Qbox';

const Home = () => {
  return (
    <div className='bg-home'>
      <Header />
      <Qbox />
    </div>
  );
};

export default Home;
