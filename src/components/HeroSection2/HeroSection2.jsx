import images from "../../constants/images";

const HeroSection = () => {
  return (
    <div
      id="platform"
      className="flex flex-col justify-between mx-auto mt-40 w-4/5 md:flex-row"
    >
      <div className="flex flex-col w-full lg3:w-[45%] space-y-6  text-center items-center">
        <h1 className="font-bold text-5xl">Vendors Enrollment</h1>
        <p>
          At DiBest Spot, we pride ourselves on creating a seamless and
          user-friendly platform that connects buyers with a diverse array of
          products from around the world. By enrolling as a vendor, you gain
          access to a vast and growing customer base eager to explore and
          purchase your high-quality goods and services.
        </p>
        <p>Enroll as a vendor today and get more traffic to your shop!</p>
        <a
          href="https://form.jotform.com/Spot_DiBest/vendors"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-purple font-semibold text-xl w-3/5 text-white px-5 py-3 text-center hover:bg-transparent hover:border hover:border-purple hover:opacity-90 hover:text-black"
        >
          Enroll Now
        </a>
      </div>
      <div className="hidden lg3:block w-[45%] relative">
        <img src={images.vector2} alt="" className="absolute" />
        <img src={images.vector} alt="" className="absolute lg2:bottom-0.5" />
        <img
          src={images.arr}
          alt=""
          className="absolute lg3:left-[-172px] lg2:bottom-[-53px] height-[150px]"
        />
        <img
          src={images.arr2}
          alt=""
          className="absolute lg2:right-[86px] lg2:top-[-88px] height-[150px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
