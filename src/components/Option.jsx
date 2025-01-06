import React from 'react';
import './css/Option.css';

const Option = () => {
  return (
    <div className='opt-box-main'>
      <div className='box-title'>Select options</div>
      <div className='opt-box'></div>
      <div className='btn'>
        <div className='btn-text'>Clear</div>
      </div>
    </div>
  );
};

export default Option;
