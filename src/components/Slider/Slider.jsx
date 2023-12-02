import images from "../../constants/images";
import Banner from "../Banner/Banner";

const Slider = () => {
  return (
    <div className="h-[630px] relative mb-20">
      <div className="bg-black absolute h-full w-full top-0">
        <img
          src={images.frame3}
          alt=""
          className="h-full w-full object-cover object-bottom opacity-50"
        />
      </div>
      <Banner />
    </div>
  );
};

export default Slider;
