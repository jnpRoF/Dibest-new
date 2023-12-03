import images from "../constants/images";

const Banner = () => {
  return (
    <div className="flex bg-[#A78236] py-8 my-1 ">
      <div className="flex flex-col mx-auto text-white w-full justify-between p-4 space-y-3 md:w-4/5 lg:flex-row">
        <img src={images.ban3} alt="" className="w-full lg:w-[52%]" />
        <div className="flex flex-col space-y-4 w-full lg:w-[42%]">
          <h2 className="font-bold text-3xl">
            Interested In Becoming A Vendor?
          </h2>
          <p>
            We maintain a track record of providing vendors with immense traffic
            to boost their sales
          </p>
          <p>
            Contact us for details at{" "}
            <span className="font-semibold text-lg text-black">
              info@dibestspot.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
