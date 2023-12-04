const Feature = ({ headText, bodyText, svg }) => {
  return (
    <div className="flex flex-col space-y-2 w-full md:w-[80%] md:items-center lg:w-[30%]">
      <div className="flex space-x-0 space-x-2 justify-center xl:justify-start">
        {svg}
        <h3 className="text-[1.093rem] text-purple font-semibold xl:text-xl">
          {headText}
        </h3>
      </div>
      <p className="text-center xl:text-start">{bodyText}</p>
    </div>
  );
};

export default Feature;
