import { CiGlobe } from "react-icons/ci";

import { GiShoppingBag } from "react-icons/gi";

import images from "../../constants/images";
import Card from "../Card/Card";

const Banner2 = () => {
  return (
    <div className="flex bg-lightColor justify-center py-10">
      <div className="flex flex-col space-y-6 justify-between w-[90%] lg:flex-row">
        <div className="flex items-center justify-center w-full lg:w-[40%]">
          <h3 className="text-2xl xl:text-3xl text-purple font-semibold text-center">
            Join any of the DiBest Spot Marketplaces Today and Enjoy
          </h3>
        </div>
        <div className="flex flex-col space-y-3 w-full lg:space-y-2 lg:w-3/5">
          <div className="flex">
            <Card
              icon={<GiShoppingBag />}
              iconColor="text-darkPink"
              src={images.group1}
              headText="Shop Local"
              bodyText="Support local businesses and find the best deals from restaurants, ondemand service providers, rental properties, classified and local products crafted and sold right in your community."
              className="flex items-center bg-white px-3 py-4 rounded-xl h-auto md:h-[184px] w-full translate-x-0 shadow-xl lg:translate-x-[58px] lg:w-[450px]"
              fontsize="md:text-[1.015rem]"
            />
          </div>
          <div
            className="flex flex-col space-y-3 justify-between lg:space-y-3 xl:space-y-0 md:flex-row 
          lg:flex-col md:space-y-0 lg2:flex-row lg2:space-y-0"
          >
            <Card
              icon={<CiGlobe />}
              iconColor="text-demColor"
              src={images.group2}
              headText="Go Global"
              bodyText="Explore a world of possibilites with international sellers and unique items from around the globe."
              className="flex items-center bg-white px-3 py-4 rounded-xl h-auto md:h-[160px] w-full md:w-[340px] lg:w-full shadow-xl lg2:w-[340px]"
              fontsize="md:text-[1.005rem]"
            />
            <Card
              icon="🚀"
              iconColor="text-demColor"
              src={images.group3}
              headText="Exciting Auctions"
              bodyText="Dive into the thrill of live auctions, Bid on your dream items and enjoy the excitement of winning!"
              className="flex items-center bg-white px-3 py-4 rounded-xl h-auto md:h-[160px] w-full md:w-[340px] lg:w-full shadow-xl lg2:w-[340px]"
              fontsize="md:text-[1.005rem]"
            />
          </div>
          <div className="flex">
            <Card
              icon="🤝"
              iconColor="text-gold"
              src={images.group4}
              headText="Community Connection"
              bodyText="Connect with like-minded individuals, share connections, and build a vibrant online community."
              className="flex items-center bg-white px-3 py-4 rounded-xl h-auto md:h-[184px] w-full shadow-xl translate-x-0 lg:w-[450px] lg:translate-x-[60px] xl:translate-x-[229px]"
              fontsize="md:text-[1.005rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
