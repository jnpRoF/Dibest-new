import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection2 from "../components/HeroSection2/HeroSection2";
import SectionHead from "../components/SectionHead";
import Search from "../components/Search";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Banner6 from "../components/Banner6/Banner6";

const PlatformVendor = () => {
  const [data, setData] = useState([]);
  const [ff, setff] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://panel.dibestspot.com/api/public/category"
        );
        const responseData = response.data;
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const gp = (f) => {
  setff(f);
}

  return (
    <>
      <HeroSection2/>
      <SectionHead/>
      <Search data={data} gp={gp} />
      <Products data={data} ff={ ff} />
      <Pagination/>
      <Banner6/>
     
    </>
  );
};

export default PlatformVendor;
