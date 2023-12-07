import { IoIosFunnel } from "react-icons/io";
import { PiCaretDownBold } from "react-icons/pi";
import "../../index.css";

const SectionHead = () => {
  return (
    <div className="flex mt-[9rem] mb-5">
      <div className="flex flex-col space-y-10 justify-end mx-auto w-4/5">
        {/* <div class="tooltip mx-auto">
          <span class="tooltiptext font-semibold text-xl">Coming Soon!</span>
        </div> */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold sm:text-[1.675rem] lg:text-4xl">
            Coming Soon!
          </h2>
          <h2 className="font-semi-bold sm:text-[1.675rem] lg:text-4xl">
            The Platform Vendors Directory
          </h2>
        </div>
        <div className="flex w-full flex-col space-y-2 md:w-4/5 md:flex-row justify-center md:justify-between">
          <h2 className="text-2xl sm:text-[1.675rem] lg:text-3xl">
            Platform Vendors
          </h2>
          <div className="flex space-x-2 ml-2 items-center">
            <IoIosFunnel />
            <span className="text-gold sm:text-sm lg:text-base">
              ALL VENDORS
            </span>
            <PiCaretDownBold className="font-bold text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHead;
