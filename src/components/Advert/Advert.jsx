import images from "../../constants/images";

const Advert = () => {
  return (
    <div className="flex bg-white py-8 space-x-4">
      <img src={images.open} alt=""  className="w-[240px] h-[240px]"/>
      <img src={images.black} alt=""  className="w-[240px] h-[240px]"/>
      <img src={images.shoplogo} alt=""  className="w-[240px] h-[240px]"/>
      <img src={images.christmas} alt=""  className="w-[240px] h-[240px]"/>
    </div>
  );
};

export default Advert;
