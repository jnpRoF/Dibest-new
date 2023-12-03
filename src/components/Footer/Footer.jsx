import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className="mt-14 bg-cover bg-bottom bg-shootingLight">
      <div className="pt-24 h-full w-full bg-gold/80 px-12 text-white ">
        <div className="flex justify-between border-b-2 pb-16">
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-2xl">PLATFORM SERVICES</h3>
            <a href="" className="text-xl">
              Digital Marketing
            </a>
            <a href="" className="text-xl">
              Business Consulting
            </a>
            <a href="" className="text-xl">
              Strategy Development
            </a>
            <a href="" className="text-xl">
              Project Management
            </a>
            <a href="" className="text-xl">
              PR & Media Advertising
            </a>
            <a href="" className="text-xl">
              Our Brands
            </a>
            <a href="" className="text-xl">
              Partners
            </a>
            <a href="" className="text-xl">
              Vendors
            </a>
            <a href="" className="text-xl">
              Medical Providers
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-2xl">PLATFORM LINKS</h3>
            <a href="" className="text-xl">
              Media Releases
            </a>
            <a href="" className="text-xl">
              Staff
            </a>
            <a href="" className="text-xl">
              Affiliates
            </a>
            <a href="" className="text-xl">
              Press Kit
            </a>
            <a href="" className="text-xl">
              DiBest News
            </a>
            <a href="" className="text-xl">
              Community Education
            </a>
            <a href="" className="text-xl">
              FAQ
            </a>
            <a href="" className="text-xl">
              Terms of Service
            </a>
            <a href="" className="text-xl">
              Privacy Policy
            </a>
            <a href="" className="text-xl">
              Contact Us
            </a>
            <a href="" className="text-xl">
              Support
            </a>
            <a href="" className="text-xl">
              Blog
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-2xl">MARKETPLACES</h3>
            <a href="" className="text-xl">
              Restaurants
            </a>
            <a href="" className="text-xl">
              OnDemand Services
            </a>
            <a href="" className="text-xl">
              Property Rentals
            </a>
            <a href="" className="text-xl">
              Egift
            </a>
            <a href="" className="text-xl">
              Ewallets
            </a>
            <a href="" className="text-xl">
              Caribbean Region
            </a>
            <a href="" className="text-xl">
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
