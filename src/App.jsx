import NavBar from "./components/NavBar/NavBar";
import PlatformVendor from "./pages/PlatformVendor/PlatformVendor";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="platformvendor" element={<PlatformVendor />} />
      </Routes>
    </>
  );
};

export default App;
