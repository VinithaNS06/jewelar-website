import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider_area ">
            <div className="single_slider">
              <img src="assets/img/slider/slider1.jpg" alt="" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="slider_content">
                      <p>exclusive offer -10% off this week</p>
                      <h1>jewelry arrivals</h1>
                      <p className="slider_price">
                        starting at <span>$2.199.oo</span>
                      </p>
                      <a className="button" href="shop.html">
                        shopping now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_area ">
            <div className="single_slider">
              <img src="assets/img/slider/slider2.jpg" alt="" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="slider_content">
                      <p>exclusive offer -10% off this week</p>
                      <h1>engagement ring</h1>
                      <p className="slider_price">
                        starting at <span>$2.199.oo</span>
                      </p>
                      <a className="button" href="shop.html">
                        shopping now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
