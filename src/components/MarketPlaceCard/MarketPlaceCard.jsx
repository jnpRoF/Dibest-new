import images from "../../constants/images";
import Button from "../Button/Button";

const MarketPlaceCard = ({ headText, bodyText, btnColor }) => {
  return (
    <div className="flex p-6 py-8 border rounded-md h-[420px] w-4/5 justify-between shrink-0 translate-x-[20px]">
      <img src={images.card1} alt="" className="h-full w-[49%]" />
      <div className="flex flex-col space-y-3 h-full w-[49%] justify-between">
        <h3 className="font-semibold text-3xl">{headText}</h3>
        <div className="flex flex-col space-y-3">
          <p className="">{bodyText}</p>
        </div>
        <div className="">
          <Button className={`p-2 px-8 ${btnColor} rounded-sm text-white`}>
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceCard
