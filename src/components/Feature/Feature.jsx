

const Feature = ({headText,bodyText}) => {
  return (
    <div className="flex flex-col space-y-2 w-[30%]">
      <div className="flex space-x-2">
        <img src="" alt="" />
        <h3 className="text-xl text-purple font-semibold">
          {headText}
        </h3>
      </div>
      <p className="text-start">
        {bodyText}
      </p>
    </div>
  );
}

export default Feature
