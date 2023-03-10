import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import config from "../../config.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const Slider = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [sliderlist, setSliderList] = useState([]);
  useEffect(() => {
    getSliderData();
  }, []);

  const getSliderData = async () => {
    let sliderresult = await fetch(config.apiurl + "api/sliders/getslider", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    sliderresult = await sliderresult.json();
    setSliderList(sliderresult.data.results);
    console.log(sliderresult.data.results);
  };
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      {sliderlist &&
        sliderlist.map((item, index) => (
          <SwiperSlide>
            <div className="slider_area">
              <div className="single_slider" key={index}>
                <img src={config.apiurl + item.image} alt={item.title} />
              </div>
              <div className="slider_content">
                <p>{item.title}</p>
                <h1>{item.content}</h1>
                <p>{item.subtitle}</p>
                <a class="button" href="shop.html">
                  shopping now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
