import "../../index.css";

const PricingCard = ({ headText, children }) => {
  return (
    <div
      className="bg-white flex flex-col space-y-3 px-4 pt-4 pb-10 w-[290px] h-[500px] items-center"
      id="pCard"
    >
      <h3 className="font-bold text-xl">{headText}</h3>
      {children}
    </div>
  );
};

export default PricingCard;
