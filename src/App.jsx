import NavBar from "./components/NavBar/NavBar";
import PlatformVendor from "./pages/PlatformVendor/PlatformVendor";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState(false);
  const getFormState = (showForm) => {
    setDisplay(showForm);
  };

  return (
    <>
      <NavBar getFormState={getFormState} display={display} />
      <Routes>
        <Route path="/" element={<Home display={display} />} />
        <Route path="platformvendor" element={<PlatformVendor />} />
      </Routes>
    </>
  );
};

export default App;
