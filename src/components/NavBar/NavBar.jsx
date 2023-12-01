import images from "../../constants/images";
import Button from "../Button/Button";



const NavBar = () => {
  return (
    <nav className="flex justify-center py-4 border">
      <div className="flex mx-auto w-[90%] justify-between items-center">
        <img src={images.logo} alt="" />
        <div className="flex space-x-2 border border-gray-500 rounded-md">
          <input
            type="search"
            name=""
            placeholder="Search"
            className="focus:outline-none p-1"
          />
        </div>
        <div className="flex space-x-7">
          <a className="" href="#">Home</a>
          <a className="" href="#features">Features</a>
          <a className="" href="#pricing">Pricing</a>
          <a className="" href="#about">About</a>
          <a className="" href="#platform">Platform Vendors</a>
          <a className="" href="#contact">Contact Us</a>
        </div>
        <div className="flex space-x-3">
          <Button className="p-2 px-5 bg-purple text-white rounded-md text-sm">
            Enrol As Vendor
          </Button>
          <Button className="p-2 px-8 bg-gold text-white rounded-md text-sm">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
