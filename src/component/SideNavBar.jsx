import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import BMI from "../Page/BMI";
import FatPercentage from "./FatPercal";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../Style/Navbar.css";
import Navbar from "react-bootstrap/Navbar";

function SideNavBar() {
  return (
    
    <BrowserRouter class="Side-stick">
        <Navbar fixed="right"
                variant="dark"
                className="d-flex shadow justify-content-between sideNav"
                style={{
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  zIndex: 10,
                }}>
          <ul>
          <li>
            {" "}
            <LinkContainer to="/" >
              <Link className="link-text">BMI Calculator</Link>
            </LinkContainer>
          </li>
          <li>
            {" "}
            <LinkContainer to="/FatCal">
              <Link className="link-text">Fat Percentage Calculator</Link>
            </LinkContainer>
          </li>
          </ul>
        </Navbar>

      <Routes>
        <Route path="/" element={<BMI />} />
        <Route path="/FatCal" element={<FatPercentage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default SideNavBar;
