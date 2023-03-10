import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import config from "../../config.json";

const BannerFullwidth = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [bannerdata, setBannerData] = useState([]);

  // const navigate = useNavigate();
  useEffect(() => {
    getBannerWidthdata();
  }, []);

  const getBannerWidthdata = async () => {
    let bannarresult = await fetch(
      config.apiurl + "api/bannerlist/getbannerlist",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    bannarresult = await bannarresult.json();
    setBannerData(bannarresult.data.results);
    console.log(bannarresult.data.results);
  };
  return (
    <>
      {/* <!--banner area start--> */}
      <section className="banner_fullwidth">
        <div className="container">
          <div className="row align-items-center ">
            {bannerdata &&
              bannerdata.map((item, index) => (
                <div className="col-12">
                  <div className="banner_text" key={index}>
                    <p>{item.title}</p>
                    <h2>{item.content}</h2>
                    <span>{item.subtitle}</span>
                    <a href="/shop">shopping Now</a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerFullwidth;
