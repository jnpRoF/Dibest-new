import {useState} from "react"
import { Link } from "react-router-dom";
import images from "../../constants/images";
import Button from "../Button/Button";
// import "../../index.css";

const NavBar = ({ getFormState, display }) => {
  const handleFormDisplay = () => {
    getFormState(!display);
  };

   const [isMenuOpen, setMenuOpen] = useState(false);

  const onMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

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
        <div className="hidden lg:flex space-x-7">
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
        {/* Hamburger */}
        <button
          id="menu-btn"
          className={`block hamburger lg:hidden focus:outline-none ${
            isMenuOpen === false ? "" : "open"
          }`}
          onClick={onMenuClick}
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
        <div
          id="menu"
          className={`absolute flex flex-col items-center self-end py-6 top-24 space-y-4 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
            isMenuOpen === false ? "" : "flex"
          } ${isMenuOpen === false ? "hidden" : ""}`}
        >
          <a
            className="hover:border border-gold rounded-full p-2 px-8"
            href="#"
          >
            Home
          </a>
          <a
            className="hover:border border-gold rounded-full p-2 px-8"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:border border-gold rounded-full p-2 px-8"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="hover:border border-gold rounded-full p-2 px-8"
            href="#about"
          >
            About
          </a>
          <Link
            className="hover:border border-gold rounded-full p-2 px-8"
            to="platformvendor"
          >
            Platform Vendors
          </Link>
          <a
            className="hover:border border-gold rounded-full p-2 px-8"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
        <div className="space-x-3 hidden lg:flex">
          <Button
            className="p-2 px-5 bg-purple text-white rounded-md text-sm hover:opacity-90"
            onClick={handleFormDisplay}
          >
            Enroll As Vendor
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
