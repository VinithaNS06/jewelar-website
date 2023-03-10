import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import config from "../../config.json";
const Banner = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [bannerlist, setBannerList] = useState([]);

  // const navigate = useNavigate();
  useEffect(() => {
    getBannerdata();
  }, []);

  const getBannerdata = async () => {
    let bannerresult = await fetch(config.apiurl + "api/banners/getbanner", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    bannerresult = await bannerresult.json();
    setBannerList(bannerresult.data.results);
    console.log(bannerresult.data.results);
  };
  return (
    <>
      {/* <!--banner area start--> */}
      <section className="banner_section">
        <div className="container">
          <div className="row ">
            {bannerlist &&
              bannerlist.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="single_banner">
                    <div className="banner_thumb">
                      <a href="/shop">
                        <img
                          src={config.apiurl + item.image}
                          className="avatar avatar-sm me-3"
                          alt={item.title}
                        />
                      </a>

                      <div className="banner_content">
                        <p>{item.title}</p>
                        <h2>{item.content}</h2>
                        <span>{item.subtitle}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
