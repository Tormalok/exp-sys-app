import React from 'react';
import './css/ResBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ResBox = () => {
  return (
    <div className='rsb-bg'>
      <div className='inner-box'>
        <h1 className='rsb-title'>Response</h1>
        <div className='rsb-main'></div>
        <button className='btn'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default ResBox;
