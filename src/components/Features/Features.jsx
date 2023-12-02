import Feature from "../Feature/Feature";

const Features = () => {
  return (
    <div className="mb-20">
      <div className="mt-[15rem] mb-14 text-center">
        <h2 className="text-4xl font-semibold">Key Features</h2>
      </div>
      <div className="mx-auto w-4/5 space-y-4">
        <div className="flex justify-between">
          <Feature
            headText="One-Stop Destination"
            bodyText="Explore a variety of marketplaces all in one place - from finding
        exclusive deals on restaurants to participating in thrilling auctions."
          />
          <Feature
            headText="Local And Global Reach"
            bodyText="Connect with sellers and buyers from your community and beyond. Enjoy the convenience of local shopping with the excitement of international options."
          />
        </div>
        <div className="flex justify-center">
          <Feature
            headText="Seamless Shopping Experience"
            bodyText="Our unified DiBest ewallet makes it easy to shop across different categories with a hassle-free checkout process."
          />
        </div>
        <div className="flex justify-between">
          <Feature
            headText="Save money with alternative Payout options for vendors"
            bodyText="Our alternative payout options includes no fee solutions that allows you to get more cash across the different catgories with a simple process."
          />
          <Feature
            headText="Personalized Dashboards"
            bodyText="Tailor your experience with personalized dashboards, quick links to popular items, and recommendations based on your preferences."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
