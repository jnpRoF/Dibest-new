const Card2 = ({ headText, bodyText, trans, src, bodyTextHead }) => {
  return (
    <div
      className={`flex flex-col bg-white space-y-2 py-4 px-3 rounded-r-2xl rounded-bl-2xl shadow-xl ${trans} hover:scale-125 delay-75 cursor-pointer`}
    >
      <div className="flex space-x-2 items-end">
        <img src={src} alt="" className="rounded-full h-[40px] w-[40px]" />
        <p className="font-bold text-lg">{headText}</p>
      </div>
      <p className="text-sm">
        <span className="font-semibold">{bodyTextHead}</span>
        {bodyText}
      </p>
    </div>
  );
};

export default Card2;
