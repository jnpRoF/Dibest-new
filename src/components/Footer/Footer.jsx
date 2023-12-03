import images from "../../constants/images";
import Button from "../Button/Button";
import "../../index.css"

const Footer = () => {
  return (
    <div className="bg-cover bg-bottom bg-shootingLight">
      <div className="pt-24 h-full w-full bg-gold/80 px-12 text-white ">
        <div className="flex justify-between border-b-2 pb-16">
          <div className="flex flex-col space-y-3 items-center">
            <h3 className="font-semibold text-2xl">PLATFORM SERVICES</h3>
            <a href="" className="text-xl link">
              Digital Marketing
            </a>
            <a href="" className="text-xl link">
              Business Consulting
            </a>
            <a href="" className="text-xl link">
              Strategy Development
            </a>
            <a href="" className="text-xl link">
              Project Management
            </a>
            <a href="" className="text-xl link">
              PR & Media Advertising
            </a>
            <a href="" className="text-xl link">
              Our Brands
            </a>
            <a href="" className="text-xl link">
              Partners
            </a>
            <a href="" className="text-xl link">
              Vendors
            </a>
            <a href="" className="text-xl link">
              Medical Providers
            </a>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <h3 className="font-semibold text-2xl">PLATFORM LINKS</h3>
            <a href="" className="text-xl link">
              Media Releases
            </a>
            <a href="" className="text-xl link">
              Staff
            </a>
            <a href="" className="text-xl link">
              Affiliates
            </a>
            <a href="" className="text-xl link">
              Press Kit
            </a>
            <a href="" className="text-xl link">
              DiBest News
            </a>
            <a href="" className="text-xl link">
              Community Education
            </a>
            <a href="" className="text-xl link">
              FAQ
            </a>
            <a href="" className="text-xl link">
              Terms of Service
            </a>
            <a href="" className="text-xl link">
              Privacy Policy
            </a>
            <a href="" className="text-xl link">
              Contact Us
            </a>
            <a href="" className="text-xl link">
              Support
            </a>
            <a href="" className="text-xl link">
              Blog
            </a>
            <div className="flex space-x-3 h-[90px]">
              <img
                src={images.playstore1}
                alt=""
                className="h-full"
              />
              <img
                src={images.playstore2}
                alt=""
                className="h-full"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <h3 className="font-semibold text-2xl">MARKETPLACES</h3>
            <a href="" className="text-xl link">
              Restaurants
            </a>
            <a href="" className="text-xl link">
              OnDemand Services
            </a>
            <a href="" className="text-xl link">
              Property Rentals
            </a>
            <a href="" className="text-xl link">
              Egift
            </a>
            <a href="" className="text-xl link">
              Ewallets
            </a>
            <a href="" className="text-xl link">
              Caribbean Region
            </a>
            <a href="" className="text-xl link">
              Medical Services
            </a>
          </div>
          <div className="flex flex-col w-[330px] space-y-14">
            <div className="flex flex-col space-y-3">
              <p>
                Sign up to get the latest releases and freebies! Less than 2
                emails per month - only the good stuff. We hate spam too{" "}
              </p>
              <form action="">
                <div className="flex">
                  <input
                    type="email"
                    name=""
                    placeholder="Email address"
                    className="bg-transparent p-2 focus:outline-none border"
                  />
                  <Button className="bg-white py-2 px-7 text-black hover:text-white hover:bg-transparent hover:border duration-1000">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-2xl">Contact Us:</h3>
              <p>
                Have questions or suggestions? We'd love to hear from you!
                Contact our dedicated support team at
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-8 font-semibold">
          &copy;2023 DiBest Spot. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
