const Card = ({ icon, src, headText, bodyText,className,fontsize}) => {
  return (
    <div className={className}>
      <div className="flex justify-between h-full items-center">
        <img src={src} alt="" className="rounded-lg h-full w-[30%]" />
        <div className="flex flex-col h-full w-[66%] text-start justify-center space-y-1">
          <div className="flex items-end space-x-1">
           <span className="text-3xl text-gold">{icon}</span> 
            <span className="text-purple font-semibold text-xl">
              {headText}
            </span>
          </div>
          <p className={fontsize}>{bodyText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;


