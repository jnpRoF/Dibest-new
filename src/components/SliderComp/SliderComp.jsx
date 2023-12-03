import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import images from "../../constants/images";
import Banner from "../Banner/Banner";
import "../../index.css";

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="h-[630px] relative mb-20">
      <div className=" h-full w-full">
        <Slider {...settings}>
          <div className="bg-black shrink-0 h-full w-full top-0">
            <img
              src={images.frame3}
              alt=""
              className="h-full w-full object-cover object-bottom opacity-50"
            />
          </div>
          <div className="bg-black shrink-0 h-full w-full top-0">
            <img
              src={images.frame2}
              alt=""
              className="h-full w-full object-cover object-bottom opacity-50"
            />
          </div>
          <div className="bg-black shrink-0 h-full w-full top-0">
            <img
              src={images.frame4}
              alt=""
              className="h-full w-full object-cover object-bottom opacity-50"
            />
          </div>
          <div className="bg-black shrink-0 h-full w-full top-0">
            <img
              src={images.medic}
              alt=""
              className="h-full w-full object-cover object-bottom opacity-50"
            />
          </div>
          <div className="bg-black shrink-0 h-full w-full top-0">
            <img
              src={images.frame1}
              alt=""
              className="h-full w-full object-cover object-bottom opacity-50"
            />
          </div>
          <div className="bg-black shrink-0 h-full w-full top-0">
            <img
              src={images.property}
              alt=""
              className="h-full w-full object-cover object-bottom opacity-50"
            />
          </div>
          <div className="bg-black shrink-0 h-full w-full top-0">
            <img
              src={images.ewallet}
              alt=""
              className="h-full w-full object-cover object-bottom opacity-50"
            />
          </div>
        </Slider>
      </div>
      <Banner />
    </div>
  );
};

export default SliderComp;
