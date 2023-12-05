import Button from "../Button/Button";
import MarketPlaceCard from "../MarketPlaceCard/MarketPlaceCard";
import marketplaces from "../../constants/marketplaces";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import "../../index.css";

const MarketPlace = () => {
  console.log(marketplaces);
  const [activeFaceId, setActiveFaceId] = useState(0);

  const handleButtonClick = (id) => {
    setActiveFaceId(id);
  };

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 1000,
    // afterChange: (index) => {
    //   console.log("current slide", index);
    // },
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-purple space-y-4 py-8 text-white">
        <h4 className="text-2xl lg:text-3xl font-semibold text-center">
          DiBest Spot Marketplaces
        </h4>
        <div className="flex flex-wrap px-4 lg:space-x-3 justify-center lg:justify-between">
          {marketplaces.map((eachMarketPlace) => {
            return (
              <Button
                className={`${eachMarketPlace.btnColor} p-2 px-8 m-2 ${
                  activeFaceId === eachMarketPlace.id ? "active" : ""
                }`}
                key={eachMarketPlace.id}
                onClick={() => {
                  handleButtonClick(eachMarketPlace.id);
                }}
              >
                {eachMarketPlace.headText}
              </Button>
            );
          })}
          {/* <Button className="bg-restaurantsColor p-2 px-8 m-2">
            <a
              href="http://local.dibestspot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Restaurants
            </a>
          </Button>
          <Button className="bg-demColor p-2 px-8 m-2">
            OnDemand Services
          </Button>
          <Button className="bg-renColor p-2 px-8 m-2">
            <a
              href="http://property.dibestspot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Property Rental
            </a>
          </Button>
          <Button className="bg-darkPink p-2 px-8 m-2">Ecommerce</Button>
          <Button className="bg-ewalletColor p-2 px-8 m-2">Ewallet</Button>
          <Button className="bg-gold p-2 px-8 m-2">Egift</Button>
          <Button className="bg-carrRegionColor p-2 px-8 m-2">
            Caribbean Region
          </Button>
          <Button className="bg-amber-500 p-2 px-8 m-2">Medicals</Button> */}
        </div>
      </div>
      {/* <div className="flex space-x-2 p-5 "> */}
      {/* <div className=""> */}
      <Slider {...settings} activeFaceId={activeFaceId}>
        {marketplaces.map((eachMarketPlace, index) => {
          return (
            <div
              className="flex flex-col h-auto p-7 lg:p-6 lg:py-8 border rounded-md w-[90%] lg:h-[420px] lg:w-4/5 justify-between shrink-0 lg:translate-x-[20px] lg:flex-row"
              key={index}
            >
              <MarketPlaceCard
                key={eachMarketPlace.id}
                headText={eachMarketPlace.headText}
                bodyText={eachMarketPlace.bodyText}
                btnColor={eachMarketPlace.btnColor}
              />
              {/* <>
                <img
                  src={images.christmas}
                  alt=""
                  className="h-full w-full lg:w-[49%]"
                />
                <div className="flex flex-col space-y-4 lg:space-y-3 lg:h-full w-full lg:w-[49%] lg:justify-between">
                  <h3 className="font-semibold text-2xl py-3 lg:text-3xl">
                    {eachMarketPlace.headText}
                  </h3>
                  <div className="flex flex-col space-y-3">
                    <p className="text-base">{eachMarketPlace.bodyText}</p>
                  </div>
                  <div className="">
                    <Button
                      className={`p-2 px-8 ${eachMarketPlace.btnColor} rounded-sm text-white`}
                    >
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </> */}
            </div>
          );
        })}
      </Slider>
      {/* </div> */}
      {/* <MarketPlaceCard
          headText="Restaurants"
          bodyText="Savor Success and Boost Your Restaurant's Visibility: Enroll as a Vendor in the Ultimate Restaurant Marketplace!Are you a culinary maestro looking to tantalize taste buds or a food enthusiast eager to explore the finest dining experiences? Welcome to our Restaurant Marketplace, where flavors, innovation, and community converge. Whether you're a restaurant owner or a foodie on the hunt for the next delectable dish, this is your gastronomic haven."
          btnColor="bg-restaurantsColor"
        />
        <MarketPlaceCard
          headText="OnDemand Services"
          bodyText="Be a Pioneer in the On-Demand Evolution: Secure Your Spot Today! Don't miss the opportunity to redefine your business. Join as a vendor today for your On-Demand business and take your services to new heights. DiBest Spot is not just a marketplace; it's a platform for growth, innovation, and success."
          btnColor="bg-demColor"
        />
        <MarketPlaceCard
          headText="Property Rental"
          bodyText=" Unlock Your Property's Full Rental Potential : Join today as a vendor ready to take the next step in maximizing your property's rental potential? Enroll as a Vendor and experience the difference. Click the button to start your journey towards increased rental income and stress-free property management."
          btnColor="bg-renColor"
        />
        <MarketPlaceCard
          headText="Ecommerce"
          bodyText='Supercharge Your E-Commerce Business: Unlock new markets, boost sales, and enjoy a host of benefits that will revolutionize your online business. Click the "Enroll as Vendor" button to revolutionize your online business with increased sales, broader reach, and unparalleled support. Discover a world of opportunities.'
          btnColor="bg-darkPink"
        />
        <MarketPlaceCard
          headText="Ewallet"
          bodyText="Effortless Transactions with Enhanced Security:Say goodbye to cumbersome payment processes. Our Platform ensures quick and hassle-free transactions for both vendors and customers. Ready to transform the way you do business? Enroll as a Vendor Today and harness the power of our integrated platform."
          btnColor="bg-ewalletColor"
        />
        <MarketPlaceCard
          headText="Egift"
          bodyText="Boost Your Brand: Leverage our marketplace to elevate your brand's presence. Benefit from increased exposure, customer reviews, and word-of-mouth marketing that will establish your business as a trusted and reliable choice. Enroll as a Vendor Today and harness the power of our integrated platform."
          btnColor="bg-gold"
        />
        <MarketPlaceCard
          headText="Caribbean Region"
          bodyText="Discover the Caribbean Paradise and Enjoy An Authentic Caribbean Experience: Are you ready to immerse yourself in the vibrant colors, rich culture, and breathtaking landscapes of the Caribbean? Welcome to our Caribbean Marketplace, where vendors and users come together to celebrate the beauty of this tropical haven. Whether you're a local business or an avid explorer, this is your gateway to unforgettable events, enticing tourism packages, and captivating attractions."
          btnColor="bg-carrRegionColor"
        />
        <MarketPlaceCard
          headText="Medicals"
          bodyText="Empower Your Wellness Journey: Are you ready to experience a new standard of healthcare and revolutionize the way you access medical services? Then embark on a journey towards personalized, convenient, and top-notch healthcare. Discover a world where your well-being is top priority. Sign Up Now as a DiBest Member for FREE! Take the first step toward a healthier, happier you. Our platform is designed to make quality healthcare accessible to everyone."
          btnColor="bg-amber-500"
        /> */}
      {/* </div> */}
    </>
  );
};

export default MarketPlace;

// {
//   activeFaceId === eachMarketPlace.id && (
// <>
//   <img src={images.christmas} alt="" className="h-full w-full lg:w-[49%]" />
//   <div className="flex flex-col space-y-4 lg:space-y-3 lg:h-full w-full lg:w-[49%] lg:justify-between">
//     <h3 className="font-semibold text-2xl py-3 lg:text-3xl">
//       {eachMarketPlace.headText}
//     </h3>
//     <div className="flex flex-col space-y-3">
//       <p className="text-base">{eachMarketPlace.bodyText}</p>
//     </div>
//     <div className="">
//       <Button
//         className={`p-2 px-8 ${eachMarketPlace.btnColor} rounded-sm text-white`}
//       >
//         LEARN MORE
//       </Button>
//     </div>
//   </div>
// </>
//   );
// }
// <>
//   <img src={images.christmas} alt="" className="h-full w-full lg:w-[49%]" />
//   <div className="flex flex-col space-y-4 lg:space-y-3 lg:h-full w-full lg:w-[49%] lg:justify-between">
//     <h3 className="font-semibold text-2xl py-3 lg:text-3xl">
//       {eachMarketPlace.headText}
//     </h3>
//     <div className="flex flex-col space-y-3">
//       <p className="text-base">{eachMarketPlace.bodyText}</p>
//     </div>
//     <div className="">
//       <Button
//         className={`p-2 px-8 ${eachMarketPlace.btnColor} rounded-sm text-white`}
//       >
//         LEARN MORE
//       </Button>
//     </div>
//   </div>
// </>;
