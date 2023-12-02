import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="flex flex-col justify-between h-[87%] mx-auto w-[67%] absolute top-0 right-[17%] top-[35%] space-y-10">
      <div className="flex justify-center w-full">
        <div className="flex flex-col space-y-6 items-center text-center w-4/5 text-white">
          <h1 className="text-[4rem] font-semibold">Welcome to DiBest Spot</h1>
          <p className="text-2xl leading-[1.6rem] mb-6">
            Explore, Sign-up and Connect in the Cayman Islands and the Caribbean
          </p>
          <Button className="p-2 px-8 bg-gold rounded-md">Start Now</Button>
        </div>
      </div>
      <div className="flex justify-between p-7 px-20 bg-gold rounded-xl">
        <div className="text-white w-[33%] flex items-center text-3xl font-semibold">
          Why DiBest Spot for the Carribean?
        </div>
        <div className="flex justify-between w-[60%]">
          <div className="bg-white w-[48%] h-52 py-6 space-y-3 flex flex-col items-center rounded-xl">
            &#2194
            <div className="flex-flex-col">
              <h2 className="font-semibold text-lg">Cayman Islands</h2>
            </div>
            <p className="text-center text-base">
              Experience a marketplace designed with the unique needs of a the
              Cayman Islands in mind
            </p>
          </div>
          <div className="bg-white w-[48%] h-52 py-8 space-y-3 flex flex-col items-center rounded-xl">
            &#2194
            <div className="flex-flex-col">
              <h2 className="font-semibold text-lg">Carribean Region</h2>
            </div>
            <p className="text-center text-base">
              Connect with a diverse and vibrant community from across the
              Carribean
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
