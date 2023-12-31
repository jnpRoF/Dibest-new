const Card = ({
  icon,
  src,
  headText,
  bodyText,
  className,
  fontsize,
  iconColor,
}) => {
  return (
    <div className={className}>
      <div className="flex justify-between h-full items-center">
        <img src={src} alt="" className="rounded-lg h-full w-[30%]" />
        <div className="flex flex-col h-full w-[66%] text-start justify-center space-y-1">
          <div className="flex space-x-1">
            <span className={`text-2xl md:text-3xl ${iconColor}`}>{icon} </span>
            <span className="text-purple font-semibold text-[1.08rem] xl:text-xl">
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
