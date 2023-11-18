import { useState, useEffect } from "react";
import "../Style/FatPercentage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FatPercentage() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBMI] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [fatPercent, setFatpercent] = useState();

  const FatCal = () => {
    let h = height / 100;

    if(gender == "")
    {
        setFatpercent("Kuy We need your gender to calculate");
    }
    else {
        if (age < 15) {
            setFatpercent(1.51 * (weight / (h * h)) - 0.7 * age - 3.6 * gender + 1.4);
        } else {
            setFatpercent(1.2 * (weight / (h * h)) + 0.23 * age - 10.8 * gender - 5.4);
        }
    }

  };

  const handleHeight = (event) => {
    setHeight(event.target.value);
  };

  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <Container
      fluid="md"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "100px",
      }}
    >
      <Row>
        <Col>
          <div>
            <label>
              Height
              <input  data-testid="HeightInput"  type="text"onChange={handleHeight} required />
            </label>

            <label>
              Weight
              <input data-testid="WeightInput" type="text" onChange={handleWeight} required />
            </label>

            <label>
              Age
              <input data-testid="AgeInput" type="text" onChange={handleAge} required />
            </label>

            <label>Gender
            <select data-testid="Gender" onChange={handleGender}>
                <option value="">none select</option>            
                <option value="1">male</option>
                <option value="0">female</option>
            </select>
            </label>
          </div>
        </Col>
        <Col>
            <button onClick={FatCal}>Calculate</button>
        </Col>
        <Col>
          <h1>{fatPercent}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default FatPercentage;
