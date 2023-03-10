import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import config from "../../config.json";

const ProductSectionBottom = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [productlistbottom, setProductListBottom] = useState([]);

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
    setProductListBottom(productresult.data);
    console.log(productresult.data);
  };
  return (
    <>
      <section className="product_section p_bottom p_section1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_title">
                <h2>Bestselling Products</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="product_area ">
                <div className="product_container bottom">
                  <div className="custom-row product_row1 slick-initialized slick-slider">
                    <button
                      className="prev_arrow slick-arrow"
                      style={{ display: "block" }}
                    >
                      <i className="fa fa-angle-left"></i>
                    </button>
                    <div
                      className="slick-list draggable"
                      style={{ padding: "0px" }}
                    >
                      <div
                        className="slick-track"
                        style={{
                          opacity: "1",
                          width: "6720px",
                          transform: "translate3d(-896px, 0px, 0px)",
                        }}
                      >
                        {productlistbottom &&
                          productlistbottom.map((item, index) => (
                            <div
                              className="custom-col-5 slick-slide slick-cloned"
                              data-slick-index="-6"
                              aria-hidden="true"
                              tabIndex="-1"
                              style={{ width: "224px" }}
                            >
                              <div className="single_product">
                                <div className="product_thumb">
                                  <a
                                    className="primary_img"
                                    href="product-details.html"
                                    tabIndex="-1"
                                  >
                                    <img
                                      src={config.apiurl + item.product_image}
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    className="secondary_img"
                                    href="product-details.html"
                                    tabIndex="-1"
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
                                      tabIndex="-1"
                                    >
                                      {" "}
                                      quick view
                                    </a>
                                  </div>
                                </div>

                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#" tabIndex="-1">
                                      {item.product_name}
                                    </a>
                                  </div>
                                  <h3>
                                    <a
                                      href="product-details.html"
                                      tabIndex="-1"
                                    >
                                      {item.product_title}
                                    </a>
                                  </h3>
                                  <span className="old_price">
                                    {" "}
                                    ${item.product_price}.00
                                  </span>
                                  <div className="product_hover">
                                    <div className="product_ratings">
                                      <ul>
                                        <li>
                                          <a href="#" tabIndex="-1">
                                            <i className="ion-ios-star-outline"></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#" tabIndex="-1">
                                            <i className="ion-ios-star-outline"></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#" tabIndex="-1">
                                            <i className="ion-ios-star-outline"></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#" tabIndex="-1">
                                            <i className="ion-ios-star-outline"></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#" tabIndex="-1">
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
                                            title=""
                                            tabIndex="-1"
                                            data-original-title="Wishlist"
                                          >
                                            <span className="icon icon-Heart"></span>
                                          </a>
                                        </li>
                                        <li className="add_to_cart">
                                          <a
                                            href="cart.html"
                                            title=""
                                            tabIndex="-1"
                                            data-original-title="add to cart"
                                          >
                                            add to cart
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="compare.html"
                                            title=""
                                            tabIndex="-1"
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
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSectionBottom;
