import React, { useState, useEffect } from "react";

const InputBox = ({
  laBel,
  placeholder,
  dataType,
  handleValidation,
  setValue,
  reset
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(""); //store error msg
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (reset) {
      setInputValue("");
      setError("");
    }
  }, [reset]);

  let Regex = /^\d*\.?\d+$/;

  const validateInput = () => {
    if (inputValue.trim() === "") {
      setError("required*");
      return false; //if InputBox == empty => not valid
    }

    if (dataType === "weight") {
      if (!Regex.test(inputValue) || inputValue < 15 || inputValue > 300) {
        setError("Please enter a valid weight");
        return false;
      }
    } else if (dataType === "height") {
      if (!Regex.test(inputValue) || inputValue < 100 || inputValue > 300) {
        setError("Please enter a valid height");
        return false;
      }
    } else {
      if (!Regex.test(inputValue) || inputValue < 2 || inputValue > 90) {
        setError("Please enter a valid age");
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleBlur = () => {
    handleValidation(dataType, validateInput());
  };

  return (
    <div>
      <label className="form-label d-block mb-2">{laBel}</label>
      <input
        className={`form-control ${error ? "is-invalid" : ""}`}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <div className="invalid-feedback">{error}</div>}{" "}
    </div>
  );
};

export default InputBox;
