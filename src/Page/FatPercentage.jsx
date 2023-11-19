import { useState } from "react";
import "../Style/FatPercentage.css";
import "../Style/BMI.css";
import InputBox from "../component/InputBox";

function FatPercentage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [fatPercent, setFatpercent] = useState("");
  const [resetFlag, setResetFlag] = useState(false);
  
  //
  const [validationStatus, setValidationStatus] = useState({
    height: true,
    width: true,
    gendeer: true,
  });

  const handleValidation = (dataType, isValid) => {
    setValidationStatus((prevStatus) => ({
      ...prevStatus,
      [dataType]: isValid,
    }));
  };
  //

  const clearFields = () => {
    setGender("");
    setFatpercent("");
    setResetFlag(prev => !prev);
  };

  const FatCal = () => {
    let h = height / 100;
    let bmi = weight / (h * h);
    let G = gender == "M" ? 16.2 : 5.4;

    setFatpercent("FatPercentage: " + (((1.2 * bmi) + (0.23 * age) - G).toFixed(2)) + "%") ;
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">Let's calculate</div>
        <div className="card-body">
        <InputBox
            laBel="Height"
            placeholder="Enter height"
            dataType="height"
            handleValidation={handleValidation}
            validationStatus={validationStatus}
            setValue={setHeight}
            reset={resetFlag}
          />
          <InputBox
            laBel="Weight"
            placeholder="Enter weight"
            dataType="weight"
            handleValidation={handleValidation}
            validationStatus={validationStatus}
            setValue={setWeight}
            reset={resetFlag}
          />
          <InputBox
            laBel="Age"
            placeholder="Enter age"
            dataType="age"
            handleValidation={handleValidation}
            validationStatus={validationStatus}
            setValue={setAge}
            reset={resetFlag}
          />
         
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              disabled={Object.values(validationStatus).includes(false) || gender == ""}
              onClick={FatCal}
            >
              Calculate
            </button>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={clearFields}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      
      <center className="mt-4">{fatPercent}</center>
    </div>
  );
}

export default FatPercentage;
