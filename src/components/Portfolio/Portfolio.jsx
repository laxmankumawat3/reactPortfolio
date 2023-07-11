import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import studyNotion from "../../img/studyNotion.png"
import wheather from  "../../img/weather.png"
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a target="_blank" href="https://github.com/laxmankumawat3/studyNotionfinal"><img src={studyNotion} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
        <a  target="_blank" href="https://github.com/laxmankumawat3/weather-app-in-js"><img src={wheather} alt="" /></a>  
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank"  href="https://github.com/laxmankumawat3"><img src={Sidebar} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="https://github.com/laxmankumawat3"> <img src={HOC} alt="" /></a>  
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
