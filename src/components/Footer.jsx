import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white  max-w-400 px-50 py-[30px]">
      <div className=" grid grid-cols-3 gap-30 leading-4xl py-[80px]">
        <div className="space-y-10 leading-7">
          <h3 className="font-extrabold text-5xl">DigiTools</h3>
          <p className="opacity-80">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="grid grid-cols-3 leading-8">
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

          <div>
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

          <div className="flex gap-3">
            <AiFillInstagram />
            <FaFacebook />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <hr className="text-white h-3 opacity-50" />

      <div className="text-[#FAFAFA] flex flex-row justify-between opacity-50 ">
        <p className="leading-[24px] ">© 2026 Digitools. All rights reserved.</p>
        <div className="">
          <ul className="flex flex-row gap-5">
            <li>Privacy Policy </li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
