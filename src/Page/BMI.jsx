import { useState, useRef } from "react";
import "../Style/BMI.css";
import "../Style/FatPercentage.css";
import InputBox from "../component/InputBox";

export default function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBMI] = useState("");
  const [displayImage, setDisplayImage] = useState(null);
  const [displayAlt, setdisplayAlt] = useState(null);
  const resultRef = useRef(null);

  //
  const [validationStatus, setValidationStatus] = useState({
    height: true,
    width: true,
  });

  const handleValidation = (dataType, isValid) => {
    setValidationStatus((prevStatus) => ({
      ...prevStatus,
      [dataType]: isValid,
    }));
  };
  //

  function calculateBMI() {
    const h = height / 100;
    const bmi = weight / (h * h);
    let textColor = "";

    if (bmi < 16) {

      setMessage("Severe Thinness. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
      setDisplayImage(require('../img/bmi/b1.png'));
      setdisplayAlt("b1.0");
      textColor = "#5bc4fc";
    } else if (bmi >= 16 && bmi < 17) {
      setMessage("Moderate Thinness. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
      setDisplayImage(require('../img/bmi/b1.png'));
      setdisplayAlt("b1.1");
      textColor = "#5bc4fc";
    } else if (bmi >= 17 && bmi < 18.5) {
      setMessage("Mild Thinness. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
      setDisplayImage(require('../img/bmi/b1.png'));
      setdisplayAlt("b1.2");
      textColor = "#5bc4fc";
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage("Healthy weight. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
      setDisplayImage(require('../img/bmi/b2.png'));
      setdisplayAlt("b2.0");
      textColor = "#81afdf";
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("Overweight. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
      setDisplayImage(require('../img/bmi/b3.png'));
      setdisplayAlt("b3.0");
      textColor = "#a878bd";
    } else if (bmi >= 30 && bmi < 35) {
      setMessage("Obese Class I. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
      setDisplayImage(require('../img/bmi/b4.png'));
      setdisplayAlt("b4.0");
      textColor = "#da6f98";
    } else if (bmi >= 35 && bmi < 40) {
      setMessage("Obese Class II. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
      setDisplayImage(require('../img/bmi/b4.png'));
      setdisplayAlt("b4.1");
      textColor = "#da6f98";
    } else{
      setMessage("Obese Class III. ");
      setBMI("Your BMI is " + bmi.toFixed(2));
      setDisplayImage(require('../img/bmi/b5.png'));
      setdisplayAlt("b5.0");
      textColor = "#f8476e";
    }

    resultRef.current.style.color = textColor;

    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  }

  return (
    <div className="app container">
      <h1>BMI Calculator</h1>
      <span>
        Let's calculate your Body Mass Index. <br></br> Type the values below
      </span>

      <div className="area-input" >
        <InputBox
          dataType="height"
          placeholder={"Height (in cm)"}
          setValue={setHeight}
          handleValidation={handleValidation}
          validationStatus={validationStatus}
        />
        <InputBox
          dataType="weight"
          placeholder={"Weight (in kg)"}
          setValue={setWeight}
          handleValidation={handleValidation}
          validationStatus={validationStatus}
        />

        <button className="button button-calc" onClick={calculateBMI} disabled={Object.values(validationStatus).includes(false) ||
          height === "" ||
          weight === ""
        } style={{ margin: "12px" }}>
          Calculate
        </button>
      </div>
      
      <div id="result" ref={resultRef} style={{ marginTop: "30px", marginBottom: "30px" }}>
        <h2>
          {message} {bmi}
        </h2>
        {displayImage && <img src={displayImage} alt={displayAlt} style={{ display: "block", margin: "auto",  width: "30%", marginTop: "30px" }} />}
      </div>
      
    </div>
  );
}
