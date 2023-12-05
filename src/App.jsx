import NavBar from "./components/NavBar/NavBar";
import PlatformVendor from "./pages/PlatformVendor/PlatformVendor";
import Home from "./pages/Home/Home";
import WhatsappBtn from "./components/WhatsappBtn/WhatsappBtn";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  // const [display, setDisplay] = useState(false);
  // const getFormState = (showForm) => {
  //   setDisplay(showForm);
  // };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="platformvendor" element={<PlatformVendor />} />
      </Routes>
      <WhatsappBtn />
    </>
  );
};

export default App;
