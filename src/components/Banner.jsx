import circleImage from "../assets/circle.png";
import play from '../assets/play.png';
import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10 md:py-20 px-6 md:px-20 gap-10 max-w-7xl mx-auto pt-24 md:pt-32">
      {/* left side */}
      <div className="space-y-7 text-center md:text-left flex flex-col items-center md:items-start leading-7">
        <div className="flex bg-[#e1e7ff] items-center px-4 py-1.5 rounded-3xl gap-2 w-fit">
          <img src={circleImage} alt="icon" className="w-5 h-5" />
          <p className="text-[#4f39f6] text-xs md:text-sm font-medium">New: AI-Powered Tools Available</p>
        </div>
        <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-[#111827]">
          Supercharge Your <br className="hidden md:block" />
          Digital Workflow
        </h2>
        <p className="text-[#627382] text-[18px] md:text-lg max-w-lg">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        {/* button */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

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
