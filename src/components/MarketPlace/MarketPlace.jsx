import Button from "../Button/Button";
import MarketPlaceCard from "../MarketPlaceCard/MarketPlaceCard";
import marketplaces from "../../constants/marketplaces";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";


const MarketPlace = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
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
              <span
                className={`${eachMarketPlace.btnColor} p-2 px-8 m-2`}
                key={eachMarketPlace.id}
              >
                {eachMarketPlace.headText}
              </span>
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
      <Slider {...settings}>
        {marketplaces.map((eachMarketPlace, index) => {
          return (
            <div
              className="flex flex-col h-auto p-7 lg:p-6 lg:py-8 border rounded-md w-[90%] lg:h-[420px] lg:w-4/5 justify-between shrink-0 lg:translate-x-[20px] lg:flex-row"
              key={index}
            >
              <MarketPlaceCard
                key={eachMarketPlace.id}
                src={eachMarketPlace.src}
                headText={eachMarketPlace.headText}
                bodyText={eachMarketPlace.bodyText}
                btnColor={eachMarketPlace.btnColor }
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
