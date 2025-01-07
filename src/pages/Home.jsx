import React, { useState } from 'react';
import './css/Home.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Option from '../components/Option';
import Submit from '../components/Submit';
import ResBox from '../components/ResBox';

const Home = () => {
  const [isResBoxVisible, setResBoxVisible] = useState(false);

  const handleSubmitClick = () => {
    setResBoxVisible(true);
  };

  const handleCloseClick = () => {
    setResBoxVisible(false);
  };

  return (
    <div className='bg-home'>
      <Header />
      <div className='content'>
        <Profile />
        <Option />
        <Submit onClick={handleSubmitClick} />
      </div>
      {isResBoxVisible && <ResBox onClose={handleCloseClick} />}
    </div>
  );
};

export default Home;
