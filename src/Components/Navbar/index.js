import React from "react";

import "./index.css";
import { Link } from "react-scroll";
import Toggle from "../Toggle";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Munawar</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              smooth={true}
              activeClass="activeClass"
              to="Navbar"
            >
              <li>Home </li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li>Services </li>
            </Link>
            <Link spy={true} smooth={true} to="Experience">
              <li> Experience</li>
            </Link>
            <Link spy={true} smooth={true} to="Portfolio">
              <li>Portfolio </li>
            </Link>
            <Link spy={true} smooth={true} to="Testimonial">
              <li>Testimonial </li>
            </Link>
          </ul>
        </div>
        <Link spy={true} smooth={true} to="Contact">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
