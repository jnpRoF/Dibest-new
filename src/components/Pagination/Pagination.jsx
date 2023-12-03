import Button from "../components/Button";

const Pagination = () => {
  return (
    <div className="flexjustify-center mb-20 mt-10">
      <div className="flex flex-wrap justify-center space-x-3">
        <Button className="p-3 bg-gray-500 rounded-full m-2" children="1" />
        <Button className="p-3 bg-gray-500 rounded-full m-2" children="2" />
        <Button className="p-3 bg-gray-500 rounded-full m-2" children="3" />
        <Button className="p-3 bg-gray-500 rounded-full m-2" children="4" />
        <Button className="p-3 bg-gray-500 rounded-full m-2" children="5" />
        <Button className="p-3 bg-gray-500 rounded-full m-2" children="6" />
        <Button className="p-3 bg-gray-500 rounded-full m-2" children="7" />
        <Button className="p-3 bg-gray-500 rounded-full m-2" children="8" />
      </div>
    </div>
  );
};

export default Pagination;
