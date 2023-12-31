import SliderComp from "../../components/SliderComp/SliderComp";
import Features from "../../components/Features/Features";
import Banner2 from "../../components/Banner2/Banner2";
import Banner3 from "../../components/Banner3/Banner3";
import MarketPlace from "../../components/MarketPlace/MarketPlace";
import Banner4 from "../../components/Banner4/Banner4";
import About from "../../components/About/About";
import Banner5 from "../../components/Banner5/Banner5";
import Pricing from "../../components/Pricing/Pricing";
import Advert from "../../components/Advert/Advert";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

const Home = () => {
  return (
    <>
      <SliderComp />
      <Features />
      <Banner2 />
      <Banner3 />
      <MarketPlace />
      <Banner4 />
      <About />
      <Banner5 />
      <Pricing />
      <Advert />
      <Footer footerColor="bg-gold/80" />
      {/* <Form /> */}
    </>
  );
};

export default Home;
