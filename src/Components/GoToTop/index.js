import React, { useEffect, useState } from "react";
import "./index.css";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const GoToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log("hello");
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <section className="wrapper">
      {isVisible && (
        <div className="top-btn" onClick={GoToBtn}>
          <FaArrowUp className="top-btn--icon icon" />
        </div>
      )}
    </section>
  );
};

export default GoToTop;
