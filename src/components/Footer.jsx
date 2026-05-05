import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white w-full md:py-7.5 p-5">
      <div className=" grid md:grid-cols-3 gap-15 md:gap-30 leading-4xl md:px-10 lg:px-20 md:py-20">
        <div className="space-y-5 md:space-y-10 leading-7">
          <h3 className="font-extrabold text-xl md:text-5xl">DigiTools</h3>
          <p className="opacity-80">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 leading-8">
          <div>
            <h2 className="font-medium">Product</h2>
            <ul className="opacity-80">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium">Product</h2>
            <ul className="opacity-80">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-medium">Resources</h2>
            <ul className="opacity-80">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="font-medium">Social Links</h2>

          <div className="flex gap-3 cursor-pointer">
            <AiFillInstagram className="md:w-10 md:h-10 w-6 h-6 hover:scale-120" />
            <FaFacebook className="md:w-10 md:h-10 w-6 h-6 hover:scale-120" />
            <FaLinkedin className="md:w-10 md:h-10 w-6 h-6 hover:scale-120" />
          </div>
        </div>
      </div>
      <div className=" md:px-10 text-center md:mt-10 mt-5">
        <hr className="text-white h-3 opacity-50 " />

        <div className="text-[#FAFAFA] flex flex-col md:flex-row justify-between ">
          <p className="leading-6 mb-4 hover:opacity-100  opacity-50">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="">
            <ul className="flex flex-col md:flex-row gap-5 mb-5 cursor-pointer">
              <li className="hover:opacity-100  opacity-50">Privacy Policy </li>
              <li className="hover:opacity-100  opacity-50">
                Terms of Service
              </li>
              <li className="hover:opacity-100  opacity-50">Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
