import React, { useState } from 'react';
import './css/Option.css';

const Option = () => {
  const conditions = [
    'Soil type is not sterilized',
    'Soil moisture level is below 30%',
    'Soil moisture level is above 40%',
    'Temperature is below 24°C or above 30°C',
    'Seedlings are exposed to direct sunlight during the initial stages',
    'Cocoa plant is in the germination stage',
    'Cocoa plant is in the seedling stage',
    'Cocoa plant is in the nursery stage',
    'Cocoa plant shows signs of Fusarium wilt',
    'Cocoa plant shows signs of Phytophthora rot',
    'Cocoa plant shows signs of powdery mildew',
    'Cocoa plant shows signs of leaf spot',
    'Cocoa plant shows signs of damping-off',
    'Mature cocoa plant shows signs of black pod disease',
    'Mature cocoa plant shows signs of Ceratocystis canker',
  ];

  const [selectedConditions, setSelectedConditions] = useState([]);

  const handleOptionClick = (condition) => {
    setSelectedConditions(
      (prev) =>
        prev.includes(condition)
          ? prev.filter((item) => item !== condition) // Remove if already selected
          : [...prev, condition] // Add if not selected
    );
  };

  return (
    <div className='opt-box-main'>
      <div className='box-title'>Select Conditions</div>
      <div className='opt-box'>
        {conditions.map((condition, index) => (
          <div
            key={index}
            className={`opt-item ${
              selectedConditions.includes(condition) ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick(condition)}
          >
            {condition}
          </div>
        ))}
      </div>
      <div className='btn'>
        <div className='btn-text'>Clear</div>
      </div>
    </div>
  );
};

export default Option;
