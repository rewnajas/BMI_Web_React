import React, { useState } from 'react';

const InputBox = ({ laBel="", placeholder, dataType, handleValidation , setValue}) => {
  const [inputValue, setInputValue] = useState(''); 
  const [error, setError] = useState(''); //store error msg
  const handleChange = (e) => {
    setInputValue(e.target.value); 
    setValue(e.target.value); 
  };

  let Regex = /^\d*\.?\d+$/;

  const validateInput = () => {
    if (inputValue.trim() === '') {
        setError('');
        return true; //if InputBox == empty => still valid
      }

    if (dataType === 'weight') {
      if (!Regex.test(inputValue) || inputValue < 15 || inputValue > 300) {
        setError('Please enter a valid weight');
        return false;
      }
    } else if (dataType === 'height') {
      if (!Regex.test(inputValue) || inputValue < 100 || inputValue > 300) {
        setError('Please enter a valid height');
        return false;
      }
    } else if (dataType === 'age') {
        if (!Regex.test(inputValue) || inputValue < 2 || inputValue > 90) {
          setError('Please enter a valid age');
          return false;
        }
    }
    setError('');
    return true;
  };

  const handleBlur = () => {
    handleValidation(dataType, validateInput());
  };

  return (
    <div style={{ width: "100%" }}>
      <label>
        { laBel }
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputBox;
