import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import States from "./components/States";
import Tools from "./components/Tools";
import { ToastContainer } from "react-toastify";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

function App() {
  const [carts, setCarts] = useState([]);

  return (
    <div className="font-manrope overflow-hidden">
      <Navbar cartsProp={carts} />
      <Banner />
      <States />
      <Tools cartsProp={carts} setCartsProp={setCarts} />
      <ToastContainer />
      <Steps />
      <Pricing />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
