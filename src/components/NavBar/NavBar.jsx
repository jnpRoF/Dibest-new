import images from "../../constants/images";
import Button from "../Button/Button";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="flex justify-center py-4 border fixed z-10 w-full bg-white top-0">
      <div className="flex mx-auto w-[90%] justify-between items-center">
        <img src={images.logo} alt="" />
        {/* <div className="flex space-x-2 border border-gray-500 rounded-md">
          <input
            type="search"
            name=""
            placeholder="Search"
            className="focus:outline-none p-1"
          />
        </div> */}
        <div className="flex space-x-7">
          <a className="hover:text-gray-300" href="#">
            Home
          </a>
          <a className="hover:text-gray-300" href="#features">
            Features
          </a>
          <a className="hover:text-gray-300" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-gray-300" href="#about">
            About
          </a>
          <Link className="hover:text-gray-300" to="platformvendor">
            Platform Vendors
          </Link>
          <a className="hover:text-gray-300" href="#contact">
            Contact Us
          </a>
        </div>
        <div className="flex space-x-3">
          <Button className="p-2 px-5 bg-purple text-white rounded-md text-sm hover:opacity-90">
            Enrol As Vendor
          </Button>
          <Button className="p-2 px-8 bg-gold text-white rounded-md text-sm hover:opacity-90">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
