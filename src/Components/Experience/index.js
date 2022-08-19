import React from "react";
import "./index.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          1+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          20+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
