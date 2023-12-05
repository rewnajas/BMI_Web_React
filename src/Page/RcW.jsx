import { useState } from "react";
import "../Style/BMI.css";
import "../Style/FatPercentage.css";
import "../Style/RcW.css";
import InputBox from "../component/InputBox";
import video from "../component/video.json";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

export default function RcW() {
  const [filter, setFilter] = useState("");

  return (
    <div className="app">
      <h1>Weight Training Video</h1>
      <div className="area-input">
        <Row>
          <label htmlFor="filter" className="form-label">
            Select type
          </label>
          <select
            className="form-select"
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Select filter</option>
            <option value="beginner">Beginner</option>
            <option value="cardio">cardio</option>
            <option value="ABS">ABS</option>
          </select>
        </Row>
        <h6>{filter}</h6>
        
        <div className="grid grid-2" >
          {filter === ""
            ? video
                .map((item, key) => (
                  <div key={item.id}>
                    <Card
                      style={{
                        height: "200px",
                        width: "600px",
                      }}
                    >
                      <div>
                        <Row>
                          <Col>
                            <iframe height="200px" src={item.link}></iframe>
                          </Col>
                          <Col>
                            <div className="card-body">
                              <h5>{item.name}</h5>
                              <div>
                                <p className="box">{item.genre}</p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </div>
                ))
            : video
                .filter((item) => item.genre === filter)
                .map((item, key) => (
                  <div key={item.id}>
                    <Card
                      style={{
                        height: "200px",
                        width: "600px",
                      }}
                    >
                      <div>
                        <Row>
                          <Col>
                            <iframe height="200px" src={item.link}></iframe>
                          </Col>
                          <Col>
                            <div className="card-body">
                              <h5>{item.name}</h5>
                              <div>
                                <p className="box">{item.genre}</p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </div>
                ))}
        </div>
      </div>
      <h2></h2>
    </div>
  );
}
