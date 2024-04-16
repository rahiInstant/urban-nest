import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavContext } from "./navContext";
const Footer = () => {
  const { setOPen } = useContext(NavContext);

  return (
    <div onClick={() => setOPen(false)} className="pt-4 pb-6 md:pt-6 md:pb-10 lg:py-16  lg:px-36 md:px-16 px-5 mt-24 bg-[#a3e2ac4b] rounded-t-2xl">
      <h1 className="text-center text-green-600 text-[55px] font-black">
        N<span className="text-[#4b4a4a]">e</span>s
        <span className="text-[#535353]">t</span>
      </h1>
      <p className="text-center  font-medium text-[#16441cf1] text-lg">
        Discover your dream home with Nest. From luxurious estates to student
        housing, find the perfect fit with our diverse selection and
        personalized service.
      </p>
      <div className="mt-16  flex flex-col-reverse sm:items-center lg:flex-row gap-5 text-[#1f1e1e]">
        <div className="flex flex-col  sm:flex-row items-center lg:items-start text-center md:text-left gap-8 lg:border-r lg:pr-5">
          <div className="flex gap-8 ">
            <nav className="flex flex-col gap-4">
              <h6 className="font-semibold text-lg">Services</h6>
              <a>Branding</a>
              <a>Design</a>
              <a>Marketing</a>
              <a>Advertisement</a>
            </nav>
            <nav className="flex flex-col gap-4">
              <h6 className="font-semibold text-lg">Company</h6>
              <a>About us</a>
              <a>Contact</a>
              <a>Jobs</a>
              <a>Press kit</a>
            </nav>
          </div>
          <nav className="flex flex-col gap-4">
            <h6 className="font-semibold text-lg">Legal</h6>
            <a>Terms of use</a>
            <a>Privacy policy</a>
            <a>Cookie policy</a>
          </nav>
        </div>
        <div className="flex-auto sm:max-lg:flex sm:max-lg:gap-10  items-center">
          <div className="">
            <h1 className="text-2xl font-semibold  text-center lg:text-left">
              Our Weekly Newsletter
            </h1>
            <div className=" h-fit relative mt-4 w-full">
              <input type="text" className="py-3 w-full rounded-md" />
              <button className="absolute py-3 px-5 bg-green-600 text-white rounded-md right-0 top-0 bottom-0 my-1 mr-1 flex justify-center items-center">
                Newsletter
              </button>
            </div>
          </div>
          <div className="mt-5 text-center flex flex-col items-center lg:items-start mb-5 lg:mb-0">
            <h1 className="text-2xl font-semibold  ">
              Social Media Link
            </h1>
            <div className=" text-3xl flex gap-6 mt-3 ">
              <FaFacebook></FaFacebook>
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center  font-semibold mt-12">@All right reserved. Nest Ltd. 2024</h1>
    </div>
  );
};

export default Footer;
