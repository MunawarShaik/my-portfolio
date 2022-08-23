import React, { useState } from "react";
import { CgMenu, CgCloseR } from "react-icons/cg";
import "./index.css";
import { Link } from "react-scroll";
import Toggle from "../Toggle";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
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
        <div className="mobile-navbar-btn">
          {openMenu ? (
            <CgCloseR
              size={32}
              onClick={() => setOpenMenu(false)}
              name="close-outline"
              className="close-outline mobile-nav-icon "
            />
          ) : (
            <CgMenu
              size={32}
              name="menu-outline"
              onClick={() => setOpenMenu(true)}
              className="mobile-nav-icon"
            />
          )}
        </div>
      </div>
      {openMenu ? (
        <nav className="mob-nav-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              smooth={true}
              activeClass="activeClass"
              to="Navbar"
              onClick={() => setOpenMenu(false)}
            >
              <li>Home </li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Services"
              onClick={() => setOpenMenu(false)}
            >
              <li>Services </li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Experience"
              onClick={() => setOpenMenu(false)}
            >
              <li> Experience</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Portfolio"
              onClick={() => setOpenMenu(false)}
            >
              <li>Portfolio </li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Testimonial"
              onClick={() => setOpenMenu(false)}
            >
              <li>Testimonial </li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Contact"
              onClick={() => setOpenMenu(false)}
            >
              <button className="button mob-nav-contact-btn">Contact</button>
            </Link>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
