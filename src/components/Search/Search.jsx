import { useState } from "react";
import Button from "../Button/Button";
import "../../index.css"
const Search = ({ data, gp }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    const filteredProducts = data.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(newSearchTerm);
    });

    gp(filteredProducts);
  };

  return (
    <div className="flex justify-center space-x-3 mt-10 mb-10">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search name of vendor"
        className="inp border px-6 w-[35%] rounded-xl focus:outline-none"
        onChange={handleSearchChange}
      />
      <Button
        className="rounded-lg text-xl bg-[#A78236] font-bold text-white px-14 py-2"
        children="Search"
        //  onClick={handleSearchChange}
      />
    </div>
  );
};

export default Search;
