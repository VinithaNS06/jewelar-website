import React from "react";

const Banner = () => {
  return (
    <>
      {/* <!--banner area start--> */}
      <section className="banner_section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="shop.html">
                    <img src="assets/img/bg/banner1.jpg" alt="" />
                  </a>
                  <div className="banner_content">
                    <p>Design Creative</p>
                    <h2>Ring Jewelry Design</h2>
                    <span>From $60.99 – Sale 20%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="shop.html">
                    <img src="assets/img/bg/banner2.jpg" alt="" />
                  </a>
                  <div className="banner_content">
                    <p>Bestselling Products</p>
                    <h2>Victoria Diamonds</h2>
                    <span>Only from $89.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_banner bottom">
                <div className="banner_thumb">
                  <a href="shop.html">
                    <img src="assets/img/bg/banner3.jpg" alt="" />
                  </a>
                  <div className="banner_content">
                    <p>Onsale Products</p>
                    <h2>Perfect Rings</h2>
                    <span>Selling Off 30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="messages_info">
                <p>
                  Purchase our new Bootstrap 4 Template – Monsta{" "}
                  <a href="#">goo.gl/7sfFxzpic.twitter.com/w4iVfi4guR</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--banner area end--> */}
    </>
  );
};

export default Banner;
