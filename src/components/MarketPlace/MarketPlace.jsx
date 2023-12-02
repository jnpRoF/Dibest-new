import images from "../../constants/images";
import Button from "../Button/Button";

const MarketPlace = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-purple space-y-4 py-8 text-white">
        <h4 className="text-2xl font-semibold">DiBest Spot Marketplaces</h4>
        <div className="flex space-x-3">
          <Button className="bg-restaurantsColor p-2 px-8">Restaurants</Button>
          <Button className="bg-demColor p-2 px-8">OnDemand Services</Button>
          <Button className="bg-renColor p-2 px-8">Property Rental</Button>
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
        <div className="flex p-6 py-8 border rounded-md h-[420px] w-4/5 justify-between shrink-0 translate-x-[20px]">
          <img src={images.card1} alt="" className="h-full w-[49%]" />
          <div className="flex flex-col space-y-3 h-full w-[49%] justify-between">
            <h3 className="font-semibold text-3xl">Ecommerce</h3>
            <div className="flex flex-col space-y-3">
              <p className="">
                A culinary masterpiece awaits those seeking an extraordinary
                dining experience. A gem among gastronomic treasures, beckons
                patrons to embark on a journey through the senses. From the
                moment you step through its doors, the restaurant unveils a
                symphony of flavors, textures, and aromas that dance
                harmoniously on the palate.
              </p>
              <p className="">
                The ambiance is a carefully curated blend of modern elegance and
                timeless charm. Soft ambient lighting, stylish decor, and
                thoughtfully arranged seating create an inviting atmosphere.
                Whether it's an intimate dinner for two, a celebration with
                friends, or a business meeting, the restaurant effortlessly
                adapts to set the perfect mood.
              </p>
            </div>
            <div className="">
              <Button className="p-2 px-8 bg-darkPink rounded-sm text-white">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
        <div className="flex p-6 py-8 border rounded-md h-[420px] w-4/5 justify-between shrink-0">
          <img src={images.card1} alt="" className="h-full w-[49%]" />
          <div className="flex flex-col space-y-3 h-full w-[49%] justify-between">
            <h3 className="font-semibold text-3xl">Ecommerce</h3>
            <div className="flex flex-col space-y-3">
              <p className="">
                A culinary masterpiece awaits those seeking an extraordinary
                dining experience. A gem among gastronomic treasures, beckons
                patrons to embark on a journey through the senses. From the
                moment you step through its doors, the restaurant unveils a
                symphony of flavors, textures, and aromas that dance
                harmoniously on the palate.
              </p>
              <p className="">
                The ambiance is a carefully curated blend of modern elegance and
                timeless charm. Soft ambient lighting, stylish decor, and
                thoughtfully arranged seating create an inviting atmosphere.
                Whether it's an intimate dinner for two, a celebration with
                friends, or a business meeting, the restaurant effortlessly
                adapts to set the perfect mood.
              </p>
            </div>
            <div className="">
              <Button className="p-2 px-8 bg-darkPink rounded-sm text-white">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
        <div className="flex p-6 py-8 border rounded-md h-[420px] w-4/5 justify-between shrink-0">
          <img src={images.card1} alt="" className="h-full w-[49%]" />
          <div className="flex flex-col space-y-3 h-full w-[49%] justify-between">
            <h3 className="font-semibold text-3xl">Ecommerce</h3>
            <div className="flex flex-col space-y-3">
              <p className="">
                A culinary masterpiece awaits those seeking an extraordinary
                dining experience. A gem among gastronomic treasures, beckons
                patrons to embark on a journey through the senses. From the
                moment you step through its doors, the restaurant unveils a
                symphony of flavors, textures, and aromas that dance
                harmoniously on the palate.
              </p>
              <p className="">
                The ambiance is a carefully curated blend of modern elegance and
                timeless charm. Soft ambient lighting, stylish decor, and
                thoughtfully arranged seating create an inviting atmosphere.
                Whether it's an intimate dinner for two, a celebration with
                friends, or a business meeting, the restaurant effortlessly
                adapts to set the perfect mood.
              </p>
            </div>
            <div className="">
              <Button className="p-2 px-8 bg-darkPink rounded-sm text-white">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
