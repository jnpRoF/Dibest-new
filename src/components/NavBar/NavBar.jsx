import { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-center py-4 border fixed z-10 w-full bg-white top-0">
      <div className="flex mx-auto w-[95%] justify-between items-center">
        <Link to="/">
          <img src={images.logo} alt="" />
        </Link>
        <div className="hidden lg:flex space-x-7">
          <Link className="hover:text-gray-300" to="/">
            Home
          </Link>
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
          <a className="hover:text-gray-300" href="#footer">
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
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div
          id="menu"
          className={`absolute flex flex-col items-center self-end py-6 top-24 space-y-4 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
            isMenuOpen === false ? "" : "flex"
          } ${isMenuOpen === false ? "hidden" : ""}`}
        >
          <Link
            className="hover:border border-gold rounded-full p-2 px-8"
            to="/"
          >
            Home
          </Link>
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
            href="#footer"
          >
            Contact Us
          </a>
          <a
            href="https://form.jotform.com/Spot_DiBest/vendors"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-5 bg-purple text-white rounded-md text-sm hover:bg-transparent hover:border hover:border-gold hover:text-black"
          >
            Enroll As Vendor
          </a>
          <a
            href="https://panel.dibestspot.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-8 bg-gold text-white rounded-md text-sm hover:opacity-90"
          >
            Login
          </a>
        </div>
        <div className="space-x-3 hidden lg:flex">
          <a
            href="https://form.jotform.com/Spot_DiBest/vendors"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-5 bg-purple text-white rounded-md text-sm hover:bg-transparent border border-gold hover:text-black"
          >
            Enroll As Vendor
          </a>
          <a
            href="https://panel.dibestspot.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-8 bg-gold text-white rounded-md text-sm hover:bg-transparent border border-gold hover:text-black"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
