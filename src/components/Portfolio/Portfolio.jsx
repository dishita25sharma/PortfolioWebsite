import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import groot from "../../img/groot.png";
import Drumkit from "../../img/drumkit.png";
import Tindog from "../../img/tindog.png";
import myflix from "../../img/myflix.png";
import parkingLot from "../../img/paarking lot.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://my-netflix-clone-29989.web.app/" target="_blank">
            <img src={myflix} alt="" />
          </a>
          <h1>MyFlix</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://keepupwithgroot.wordpress.com/" target="_blank">
            <img src={groot} alt="" />
          </a>
          <h1>Keep Up With Groot</h1>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://dishita25sharma.github.io/Tindog/" target="_blank">
            <img src={Tindog} alt="" />
          </a>
          <h1>Tindog</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/dishita25sharma/Drumkit" target="_blank">
            <img src={Drumkit} alt="" />
          </a>
          <h1>Drumkit</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/dishita25sharma/PARKING-LOT-MANAGMENT-SYSTEM"
            target="_blank"
          >
            <img src={parkingLot} alt="" />
          </a>
          <h1>Parking Lot Management System</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
