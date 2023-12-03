import images from "../../constants/images";

const Form = ({ display }) => {
  return (
    <div
      className={`mx-auto w-4/5 py-8 px-6 bg-white rounded-lg shadow-lg fixed top-24 z-20 left-[10%] ${
        display === true ? "block" : "hidden"
      }`}
    >
      <form action="" className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-3 justify-center items-center">
          <img src={images.logo} alt="" className="w-[90px] h-[30px]" />
          <h2 className="text-3xl font-semibold">Enroll As A Vendor</h2>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Name"
              className="border rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Email address"
              className="border rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold">
              Mobile Number
            </label>
            <input
              inputMode="numeric"
              name=""
              id=""
              placeholder="Mobile Number"
              className="border rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold">
              Job Title
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Job Title"
              className="border rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold">
              Company Name
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Company Name"
              className="border rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold">
              Address
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Address"
              className="border rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold">
              Which marketplace are you interested in joining?
            </label>
            <select name="" id="" className="border rounded-md p-2">
              <option value="">Restaurants</option>
              <option value="">Property & Rentals</option>
              <option value="">Ecommerce</option>
              <option value="">Medicals</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold">
              Why are you interested in joining the platform?
            </label>
            <textarea
              name=""
              className="border p-2 focus:outline-none"
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold">
              How did you hear about the platform?
            </label>
            <select name="" id="" className="border rounded-md p-2">
              <option value="">Online Search</option>
              <option value="">Social media</option>
              <option value="">Friend or family referral</option>
              <option value="">Advertisement</option>
              <option value="">Email marketing</option>
              <option value="">Website browsing</option>
              <option value="">Event or promotion</option>
              <option value="">Others (please specify)</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold">
              If other
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="please specify"
              className="border-b pt-3 px-3 focus:outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
