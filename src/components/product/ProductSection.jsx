import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import config from "../../config.json";

const ProductSection = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [productlist, setProductList] = useState([]);

  // const navigate = useNavigate();
  useEffect(() => {
    getProductdata();
  }, []);

  const getProductdata = async () => {
    let productresult = await fetch(
      config.apiurl + "api/products/get/productlist",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    productresult = await productresult.json();
    setProductList(productresult.data);
    console.log(productresult.data);
  };
  return (
    <>
      <section className="product_section p_section1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product_area">
                <div className="product_tab_button">
                  <ul className="nav" role="tablist">
                    <li>
                      <a
                        className="active"
                        data-toggle="tab"
                        href="#featured"
                        role="tab"
                        aria-controls="featured"
                        aria-selected="true"
                      >
                        Featured
                      </a>
                    </li>
                    <li>
                      <a
                        data-toggle="tab"
                        href="#arrivals"
                        role="tab"
                        aria-controls="arrivals"
                        aria-selected="false"
                      >
                        New Arrivals
                      </a>
                    </li>
                    <li>
                      <a
                        data-toggle="tab"
                        href="#onsale"
                        role="tab"
                        aria-controls="onsale"
                        aria-selected="false"
                      >
                        Onsale
                      </a>
                    </li>
                  </ul>
                </div>
                {productlist &&
                  productlist.map((item, index) => (
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="featured"
                        role="tabpanel"
                      >
                        <div className="product_container">
                          <div className="custom-row product_column3 slick-initialized slick-slider">
                            <button className="prev_arrow slick-arrow">
                              <i className="fa fa-angle-left"></i>
                            </button>
                            <div className="slick-list draggable">
                              <div className="slick-track">
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index="-6"
                                  aria-hidden="true"
                                  tabindex="-1"
                                >
                                  <div>
                                    <div className="custom-col-5">
                                      <div className="single_product">
                                        <div className="product_thumb">
                                          <a
                                            className="primary_img"
                                            href="product-details.html"
                                            tabindex="-1"
                                          >
                                            <img
                                              src={
                                                config.apiurl +
                                                item.product_image
                                              }
                                              alt=""
                                            />
                                          </a>
                                          <a
                                            className="secondary_img"
                                            href="product-details.html"
                                            tabindex="-1"
                                          >
                                            <img
                                              src={
                                                config.apiurl +
                                                item.product_secondary_image
                                              }
                                              alt=""
                                            />
                                          </a>
                                          <div className="quick_button">
                                            <a
                                              href="#"
                                              data-toggle="modal"
                                              data-target="#modal_box"
                                              data-placement="top"
                                              data-original-title="quick view"
                                              tabindex="-1"
                                            >
                                              {" "}
                                              quick view
                                            </a>
                                          </div>
                                        </div>
                                        <div className="product_content">
                                          <div className="tag_cate">
                                            <a href="#" tabindex="-1">
                                              {item.product_name}
                                            </a>
                                          </div>
                                          <h3>
                                            <a
                                              href="product-details.html"
                                              tabindex="-1"
                                            >
                                              {item.product_title}
                                            </a>
                                          </h3>
                                          <div className="price_box">
                                            <span className="old_price">
                                              ${item.product_price}.00
                                            </span>
                                            <span className="current_price">
                                              ${item.product_secondary_price}.00
                                            </span>
                                          </div>
                                          <div className="product_hover">
                                            <div className="product_ratings">
                                              <ul>
                                                <li>
                                                  <a href="#" tabindex="-1">
                                                    <i className="ion-ios-star-outline"></i>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#" tabindex="-1">
                                                    <i className="ion-ios-star-outline"></i>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#" tabindex="-1">
                                                    <i className="ion-ios-star-outline"></i>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#" tabindex="-1">
                                                    <i className="ion-ios-star-outline"></i>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#" tabindex="-1">
                                                    <i className="ion-ios-star-outline"></i>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="product_desc">
                                              <p>{item.product_desc}</p>
                                            </div>
                                            <div className="action_links">
                                              <ul>
                                                <li>
                                                  <a
                                                    href="wishlist.html"
                                                    data-placement="top"
                                                    title=""
                                                    data-toggle="tooltip"
                                                    tabindex="-1"
                                                    data-original-title="Add to Wishlist"
                                                  >
                                                    <span className="icon icon-Heart"></span>
                                                  </a>
                                                </li>
                                                <li className="add_to_cart">
                                                  <a
                                                    href="cart.html"
                                                    title=""
                                                    tabindex="-1"
                                                    data-original-title="add to cart"
                                                  >
                                                    add to cart
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    href="compare.html"
                                                    title=""
                                                    tabindex="-1"
                                                    data-original-title="compare"
                                                  >
                                                    <i className="ion-ios-settings-strong"></i>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
