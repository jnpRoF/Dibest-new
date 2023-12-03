import Button from "../Button/Button";
import MarketPlaceCard from "../MarketPlaceCard/MarketPlaceCard";

const MarketPlace = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-purple space-y-4 py-8 text-white">
        <h4 className="text-3xl font-semibold">DiBest Spot Marketplaces</h4>
        <div className="flex space-x-3">
          <Button className="bg-restaurantsColor p-2 px-8">
            <a
              href="http://local.dibestspot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Restaurants
            </a>
          </Button>
          <Button className="bg-demColor p-2 px-8">OnDemand Services</Button>
          <Button className="bg-renColor p-2 px-8">
            <a
              href="http://property.dibestspot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Property Rental
            </a>
          </Button>
          <Button className="bg-darkPink p-2 px-8">Ecommerce</Button>
          <Button className="bg-ewalletColor p-2 px-8">Ewallet</Button>
          <Button className="bg-gold p-2 px-8">Egift</Button>
          <Button className="bg-carrRegionColor p-2 px-8">
            Caribbean Region
          </Button>
          <Button className="bg-amber-500 p-2 px-8">Medicals</Button>
        </div>
      </div>
      <div className="flex space-x-2 p-5 overflow-x-hidden">
        <MarketPlaceCard
          headText="Restaurants"
          bodyText="Savor Success and Boost Your Restaurant's Visibility: Enroll as a Vendor in the Ultimate Restaurant Marketplace!Are you a culinary maestro looking to tantalize taste buds or a food enthusiast eager to explore the finest dining experiences? Welcome to our Restaurant Marketplace, where flavors, innovation, and community converge. Whether you're a restaurant owner or a foodie on the hunt for the next delectable dish, this is your gastronomic haven."
          btnColor="bg-restaurantsColor"
        />
        <MarketPlaceCard
          headText="OnDemand Services"
          bodyText="Be a Pioneer in the On-Demand Evolution: Secure Your Spot Today! Don't miss the opportunity to redefine your business. Join as a vendor today for your On-Demand business and take your services to new heights. DiBest Spot is not just a marketplace; it's a platform for growth, innovation, and success."
          btnColor="bg-demColor"
        />
        <MarketPlaceCard
          headText="Property Rental"
          bodyText=" Unlock Your Property's Full Rental Potential : Join today as a vendor ready to take the next step in maximizing your property's rental potential? Enroll as a Vendor and experience the difference. Click the button to start your journey towards increased rental income and stress-free property management."
          btnColor="bg-renColor"
        />
        <MarketPlaceCard
          headText="Ecommerce"
          bodyText='Supercharge Your E-Commerce Business: Unlock new markets, boost sales, and enjoy a host of benefits that will revolutionize your online business. Click the "Enroll as Vendor" button to revolutionize your online business with increased sales, broader reach, and unparalleled support. Discover a world of opportunities.'
          btnColor="bg-darkPink"
        />
        <MarketPlaceCard
          headText="Ewallet"
          bodyText="Effortless Transactions with Enhanced Security:Say goodbye to cumbersome payment processes. Our Platform ensures quick and hassle-free transactions for both vendors and customers. Ready to transform the way you do business? Enroll as a Vendor Today and harness the power of our integrated platform."
          btnColor="bg-ewalletColor"
        />
        <MarketPlaceCard
          headText="Egift"
          bodyText="Boost Your Brand: Leverage our marketplace to elevate your brand's presence. Benefit from increased exposure, customer reviews, and word-of-mouth marketing that will establish your business as a trusted and reliable choice. Enroll as a Vendor Today and harness the power of our integrated platform."
          btnColor="bg-gold"
        />
        <MarketPlaceCard
          headText="Caribbean Region"
          bodyText="Discover the Caribbean Paradise and Enjoy An Authentic Caribbean Experience: Are you ready to immerse yourself in the vibrant colors, rich culture, and breathtaking landscapes of the Caribbean? Welcome to our Caribbean Marketplace, where vendors and users come together to celebrate the beauty of this tropical haven. Whether you're a local business or an avid explorer, this is your gateway to unforgettable events, enticing tourism packages, and captivating attractions."
          btnColor="bg-carrRegionColor"
        />
        <MarketPlaceCard
          headText="Medicals"
          bodyText="Empower Your Wellness Journey: Are you ready to experience a new standard of healthcare and revolutionize the way you access medical services? Then embark on a journey towards personalized, convenient, and top-notch healthcare. Discover a world where your well-being is top priority. Sign Up Now as a DiBest Member for FREE! Take the first step toward a healthier, happier you. Our platform is designed to make quality healthcare accessible to everyone."
          btnColor="bg-amber-500"
        />
      </div>
    </>
  );
};

export default MarketPlace;
