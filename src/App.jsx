import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import States from "./components/States";
import Tools from "./components/Tools";
import Carts from "./components/Carts";
import { ToastContainer } from "react-toastify";
import Steps from "./components/Steps";

function App() {
  const [carts, setCarts] = useState([]);

  return (
    <div className="">
      <Navbar cartsProp={carts} />
      <Banner />
      <States />
      <Tools cartsProp={carts} setCartsProp={setCarts} />
      {/* <Cards /> */}
      {/* <Carts/> */}
      <ToastContainer />
      <Steps />
    </div>
  );
}

export default App;
