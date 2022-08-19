import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NxtHome from "../../img/NxtHome.png";
import Home from "../../img/Home.png";
import NxtProducts from "../../img/NxtProducts.png";
import Books from "../../img/Books.png";
import Resource from "../../img/Resource.png";
import "swiper/css";
import "./index.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={NxtHome} alt="nxthome" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NxtProducts} alt="nxtp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Home} alt="home" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Books} alt="books" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Resource} alt="resource" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
