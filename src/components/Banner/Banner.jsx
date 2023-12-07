import "../../index.css";

const Banner = () => {
  return (
    <div className="flex flex-col justify-between h-[87%] mx-auto w-[75%] right-[13%]  absolute top-[35%] space-y-10 lg:w-[67%] lg:right-[17%] lg2:top-[37%]">
      <div className="flex justify-center w-full">
        <div className="flex flex-col space-y-6 items-center text-center w-4/5 text-white">
          <h1 className="text-[2rem] font-semibold md:text-[3rem] lg2:text-[4rem]">
            Welcome to DiBest Spot
          </h1>
          <p className="text-[1.2rem] leading-[1.6rem] mb-6 lg:text-2xl">
            Explore, Sign-up and Connect in the Cayman Islands and the Caribbean
          </p>
          <a
            href="https://submit.jotform.com/Spot_DiBest/members"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-8 bg-gold rounded-md hover:opacity-90 hover:text-black"
          >
            JOIN THE WAITING LIST
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-5 justify-between p-7 lg:px-14 bg-gold rounded-xl lg:flex-row lg:items-center lg:space-y-0 lg:space-x-3">
        <div className="text-white flex justify-center font-semibold text-[1.375rem] lg:flex-row lg:w-[33%] lg:text-2xl lg2:text-3xl">
          <span className="text-center">
            Why DiBest Spot for the Caribbean?
          </span>
        </div>
        <div className="flex justify-between flex-col space-y-3 lg:w-[80%] lg:flex-row lg:space-y-0">
          <div className="bg-white py-6 px-3 space-y-3 flex flex-col items-center rounded-xl lg:w-[48%] xl:h-52">
            🏝️
            <div className="flex-flex-col">
              <h2 className="font-semibold text-lg">Cayman Islands</h2>
            </div>
            <p className="text-center text-base">
              Experience a marketplace designed with the unique needs of a the
              Cayman Islands in mind
            </p>
          </div>
          <div className="bg-white py-8 px-2 sm:px-0 space-y-3 flex flex-col items-center rounded-xl lg:w-[48%] xl:h-52">
            🌺
            <div className="flex-flex-col">
              <h2 className="font-semibold text-lg">Carribean Region</h2>
            </div>
            <p className="text-center text-base">
              Connect with a diverse and vibrant community from across the
              Caribbean
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
