import PricingCard from "../PricingCard/PricingCard";

const Pricing = () => {
  return (
    <>
      <div id="pricing" className="flex flex-col items-center justify-center bg-purple space-y-4 py-8 text-white">
        <h4 className="text-3xl font-semibold">DiBest Spot Pricing</h4>
      </div>
      <div className="bg-purple py-4">
        <div className="mx-auto flex w-1/2 justify-between">
          <PricingCard headText="DiBest Member">
            <span>FREE TO JOIN</span>
            <p className="text-center">
              Members can participate in both Auctions and classified listing.
            </p>
            <span>Get in touch with us:</span>
            <p className="text-center">
              Currently accepting private enrollments.
            </p>
            <a href="mailto:info@dibestspot.com" className="underline">
              info@dibestspot.com
            </a>
          </PricingCard>
          <PricingCard headText="DiBest Vendors">
            <div className="flex flex-col space-y-3 w-4/5">
              <p className="text-center">
                Vendors have the opportunity to join various marketplaces,
                including Restaurants, On-demand Services, and Property Rentals.
              </p>
              <span className="text-center">Get in touch with us:</span>
              <p className="text-center">
                Currently accepting private vendor enrollments.
              </p>
              <a
                href="mailto:info@dibestspot.com"
                className="underline text-center"
              >
                info@dibestspot.com
              </a>
            </div>
          </PricingCard>
        </div>
      </div>
    </>
  );
};

export default Pricing;
