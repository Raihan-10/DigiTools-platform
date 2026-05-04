import { use, useState } from "react";
import Cards from "./Cards";
import Carts from "./Carts";

const Tools = ({ cartsProp, setCartsProp }) => {
  const [activeTab, setActiveTab] = useState("tools");


  return (
    <div className="space-y-5 justify-center text-center py-30">
      <div>
        <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
        <p className="text-[16px] mt-4 text-[#627382]">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
      </div>
      <div className="">
        <button onClick={()=>setActiveTab('tools')} className="btn  bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-4xl text-white">
          Products
        </button>
        <button onClick={()=>setActiveTab('carts')} className="btn rounded-4xl">
          Cart<span>{cartsProp.length}</span>
        </button>
      </div>
      {activeTab == "tools" ? (
        <Cards cartsProp={cartsProp} setCartsProp={setCartsProp} />
      ) : (
        <Carts cartsProp={cartsProp}  setCartsProp={setCartsProp}/>
      )}
    </div>
  );
};

export default Tools;
