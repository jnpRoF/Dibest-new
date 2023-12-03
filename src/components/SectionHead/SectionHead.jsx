import { IoIosFunnel } from "react-icons/io";
import { PiCaretDownBold } from "react-icons/pi";

const SectionHead = () => {
  return (
    <div className="flex mt-20 mb-5">
      <div className="flex justify-end mx-auto w-4/5">
        <div className="flex w-full flex-col space-y-2 md:w-4/5 md:flex-row justify-center md:justify-between">
          <h2 className="font-bold text-2xl ml-16 lg:text-5xl">Platform Vendors</h2>
          <div className="flex space-x-2 items-center">
            <IoIosFunnel />
            <span className="text-gold">ALL VENDORS</span>
            <PiCaretDownBold className="font-bold text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHead;
