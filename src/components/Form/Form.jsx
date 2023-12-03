import images from "../../constants/images";

const Form = () => {
  return (
    <div className="flex mx-auto w-4/5 p-3 bg-white rounded-lg">
      <form action="" className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <img src={images.logo} alt="" />
          <h2 className="text-xl font-semibold">DiBest Spot</h2>
        </div>
        <div className="flex flex col space-y-3">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" placeholder="" Name />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" placeholder="Email address" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Mobile Number</label>
            <input
              inputMode="numeric"
              name=""
              id=""
              placeholder="Mobile Number"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Job Title</label>
            <input type="text" name="" id="" placeholder="Job Title" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Company Name</label>
            <input type="text" name="" id="" placeholder="Company Name" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Address</label>
            <input type="text" name="" id="" placeholder="Address" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">
              Which marketplace are you interested in joining?
            </label>
            <select name="" id="">
              <option value="">Restaurants</option>
              <option value="">Property & Rentals</option>
              <option value="">Ecommerce</option>
              <option value="">Medicals</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">
              Why are you interested in joining the platform?
            </label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">How did you hear about the platform?</label>
            <select name="" id="">
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
        </div>
      </form>
    </div>
  );
};

export default Form;
