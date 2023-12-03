import Button from "../components/Button";
import { useState } from "react";

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
        className="border px-6 w-[25%] rounded-xl"
        onChange={handleSearchChange}
      />
      <Button
        className="rounded-2xl text-xl bg-[#A78236] font-bold text-white px-14 py-3"
        children="Search"
        //  onClick={handleSearchChange}
      />
    </div>
  );
};

export default Search;
