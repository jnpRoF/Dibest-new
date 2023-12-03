import Card2 from "../Card2/Card2";
import images from "../../constants/images";

const Banner4 = () => {
  return (
    <div className="mt-14 bg-cover bg-bottom bg-shootingLight">
      <div className="py-24 h-full w-full bg-gold/80 flex justify-center">
        <div className="flex justify-between w-[90%] ">
          <div className="flex items-center justify-center w-[40%]">
            <h3 className="text-3xl text-white font-semibold">
              Our past records speak for us. Check through the reviews people
              who have used our services gave
            </h3>
          </div>
          <div className="flex flex-col space-y-2 w-3/5">
            <div className="flex">
              <Card2
                src={images.num}
                trans="translate-x-[115px]"
                headText="Vivian Rose"
                bodyTextHead="Restaurant Experience:"
                bodyText={`"I love how the marketplace brings together the best restaurants in the Cayman Islands. The variety of cuisines and the seamless ordering process make it my go-to for delicious meals. The convenience of paying online adds an extra layer of simplicity to the dining experience."`}
              />
              <Card2
                src={images.num2}
                trans="translate-x-[50px] translate-y-[-40px]"
                headText="Carl P"
                bodyTextHead="Local Business Support:"
                bodyText={`"As a local restaurant owner, being part of this marketplace has significantly increased our visibility online. The platform's focus on supporting local businesses has brought in new customers and the ease of integrating their system has made transactions smoother for both us and our patrons."`}
              />
            </div>
            <div className="flex">
              <Card2
                src={images.num4}
                headText="Mark J"
                bodyTextHead="Property Rentals:"
                bodyText={`"I recently used the marketplace to find a vacation rental in the Cayman Islands, and I couldn't be happier with the experience. The range of properties available, coupled with the user-friendly interface, made it simple to find the perfect place. The secure checkout gave me peace of mind throughout the booking process of my condo."`}
              />
              <Card2
                src={images.num3}
                trans="translate-x-[14px] translate-y-[-25px]"
                headText="Joan C"
                bodyTextHead="On-Demand Service:"
                bodyText={`"The on-demand services on this platform have been a game-changer for me. Whether it's a last-minute home cleaning or receiving a quick food delivery at my hotel, the ease of finding reliable service providers has made my life so much easier living in Cayman Islands.The integration with the eWallet ensures swift and hassle-free transactions."`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
