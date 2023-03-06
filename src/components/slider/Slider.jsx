import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import { useNavigate } from "react-router-dom";
import config from "../../config.json";
const Slider = () => {
  // const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [sliderlist, setSliderList] = useState([]);
  // // const navigate = useNavigate();
  // useEffect(() => {
  //   getSliderDetails();
  // }, []);

  // const getSliderDetails = async () => {
  //   let slideresult = await fetch(config.apiurl + "api/sliders/getslider");
  //   slideresult = await slideresult.json();
  //   setSliderList(slideresult.data.results);
  // };

  // const [content, setContent] = useState("");
  // const [title, setTitle] = useState("");
  // const [subtitle, setSubTitle] = useState("");
  // const [updateid, setUpdateid] = useState("");
  // const [error, setError] = useState(false);

  // const handleCatsubmit = async () => {
  //   if (!content) {
  //     setError(true);
  //     return false;
  //   }
  //   let apicaturl = "";
  //   let methodapi = "";
  //   if (updateid) {
  //     apicaturl = config.apiurl + "api/sliders/" + updateid;
  //     methodapi = "put";
  //   } else {
  //     apicaturl = config.apiurl + "api/sliders/create";
  //     methodapi = "post";
  //   }

  //   let addcat = await fetch(apicaturl, {
  //     method: methodapi,
  //     body: JSON.stringify({ content, title, subtitle }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "bearer " + accesstoken.data.access_token,
  //     },
  //   });

  //   let addcatrs = await addcat.json();
  //   if (addcatrs.status == "true") {
  //     getSliderDetails();
  //   }
  // };

  // const getSlideredit = async (editid) => {
  //   let cateditdetails = await fetch(config.apiurl + "api/sliders/" + editid, {
  //     method: "get",
  //     headers: {
  //       Authorization: "bearer " + accesstoken.data.access_token,
  //     },
  //   });
  //   cateditdetails = await cateditdetails.json();
  //   setContent(cateditdetails.data[0].content);
  //   setTitle(cateditdetails.data[0].title);
  //   setSubTitle(cateditdetails.data[0].subtitle);
  //   setUpdateid(cateditdetails.data[0]._id);
  // };

  // const deleteStaff = async (id) => {
  //   let deletecat = await fetch(config.apiurl + "api/notifications/" + id, {
  //     method: "Delete",
  //     headers: {
  //       Authorization: "bearer " + accesstoken.data.access_token,
  //     },
  //   });
  //   deletecat = await deletecat.json();
  //   if (deletecat) {
  //     getSliderDetails();
  //   }
  // };
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <div className="slider_area owl-carousel">
            <div className="single_slider">
              {sliderlist &&
                sliderlist.map((item, index) => (
                  <img src={item.image} alt="" key={index} />
                ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
