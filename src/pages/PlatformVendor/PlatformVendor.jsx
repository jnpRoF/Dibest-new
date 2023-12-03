import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection2 from "../../components/HeroSection2/HeroSection2";
import SectionHead from "../../components/SectionHead/SectionHead";
import Search from "../../components/Search/Search";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import Banner6 from "../../components/Banner6/Banner6";
import Footer from "../../components/Footer/Footer";

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
  };

  return (
    <>
      <HeroSection2 />
      <SectionHead />
      <Search data={data} gp={gp} />
      <Products data={data} ff={ff} />
      <Pagination />
      <Banner6 />
      <Footer footerColor="bg-purple/80" />
    </>
  );
};

export default PlatformVendor;
