import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import BMI from "../Page/BMI";
import FatPercentage from "../Page/FatPercentage";
import "../Style/SideNavBar.css";
import { LuMenuSquare } from "react-icons/lu";

function SideNavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <div>
      <BrowserRouter>
      <Button
          variant="primary"
          onClick={handleShow}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000, // Adjust as needed based on your layout
          }}
        >
          <LuMenuSquare
            style={{
              height: "40px",
              width: "40px",
            }}
          />
        </Button>

        <Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          placement="start"
          scroll={true}
        >
          <Offcanvas.Header closeButton style={{ backgroundColor: "#ffcc00" }}>
            <Offcanvas.Title>CS266 N03</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: "#696969" }}>
            <Navbar
              fixed="right"
              variant="dark"
              className="d-flex shadow justify-content-between sideNav"
              style={{
                zIndex: 10,
              }}
            >
              <div className="d-grid gap-2">
                <LinkContainer to="/react-bmi">
                  <Link className="link-text">
                    <button type="button" class="btn btn-outline-warning sideNavBar-button btn-lg">
                      BMI Calculator
                    </button>
                  </Link>
                </LinkContainer>
                <LinkContainer to="/FatCal">
                  <Link className="link-text">
                    <button type="button" class="btn btn-outline-warning sideNavBar-button btn-lg">
                      Fat Percentage Calculator
                    </button>
                  </Link>
                </LinkContainer>
              </div>
            </Navbar>
          </Offcanvas.Body>
        </Offcanvas>

        <Routes>
          <Route path="/react-bmi" element={<BMI />} />
          <Route path="/FatCal" element={<FatPercentage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default SideNavBar;
