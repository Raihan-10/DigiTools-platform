import circleImage from "../assets/circle.png";
import play from '../assets/play.png';
import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="grid grid-cols-2 items-center py-10 max-w-400 px-50">
      {/* left side */}
      <div className="space-y-7 items-center leading-7">
        <div className="flex bg-[#e1e7ff] items-center px-2 py-1.5 rounded-3xl gap-2 w-1/2">
          <img src={circleImage} />
          <p className="text-[#4f39f6] ">New: AI-Powered Tools Available </p>
        </div>
        <h2 className="font-bold text-5xl ">
          Supercharge Your <br />
          Digital Workflow
        </h2>
        <p className="text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>

        {/* button */}
        <div className="flex gap-2.5">

          <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl text-white px-4 py-5">Explore Products</button>

          <button className="btn hover:bg-pink-600 hover:text-white btn-outline rounded-3xl flex">
          <img src={play}alt="" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="">
        <img src={banner} className=" w-full max-h-147.5 " alt="" />
      </div>


    </div>
  );
};

export default Banner;
