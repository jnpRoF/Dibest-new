import images from "../../constants/images";
import Marquee from "react-fast-marquee";

const Advert = () => {
  return (
    <div className="flex bg-white py-8 space-x-4">
      <Marquee autoFill>
        <img src={images.open} alt="" className="w-[240px] h-[240px] mx-4" />
        <img src={images.black} alt="" className="w-[240px] h-[240px] mx-4" />
        <img src={images.shoplogo} alt="" className="w-[240px] h-[240px] mx-4" />
        <img src={images.christmas} alt="" className="w-[240px] h-[240px] mx-4" />
      </Marquee>
    </div>
  );
};

export default Advert;
