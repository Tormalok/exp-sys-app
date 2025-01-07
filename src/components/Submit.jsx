import React from 'react';
import './css/Submit.css';

const Submit = ({ onClick }) => {
  return (
    <button className='sbm-btn' onClick={onClick}>
      Submit
    </button>
  );
};

export default Submit;
