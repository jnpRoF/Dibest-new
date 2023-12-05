import images from "../../constants/images";
import Button from "../Button/Button";

const MarketPlaceCard = ({ headText, bodyText, btnColor }) => {
  return (
    <div className="flex flex-col h-auto p-7 lg:p-6 lg:py-8 border rounded-md w-[90%] lg:h-[420px] lg:w-4/5 justify-between shrink-0 lg:translate-x-[20px] lg:flex-row">
      <>
        <img src={images.card1} alt="" className="h-full w-full lg:w-[49%]" />
        <div className="flex flex-col space-y-4 lg:space-y-3 lg:h-full w-full lg:w-[49%] lg:justify-between">
          <h3 className="font-semibold text-2xl py-3 lg:text-3xl">
            {headText}
          </h3>
          <div className="flex flex-col space-y-3">
            <p className="text-base">{bodyText}</p>
          </div>
          {/* <div className="">
            <Button className={`p-2 px-8 ${btnColor} rounded-sm text-white`}>
              LEARN MORE
            </Button>
          </div> */}
        </div>
      </>
    </div>
  );
};

export default MarketPlaceCard;
