import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="pt-4 pb-6 md:pt-6 md:pb-10 lg:py-16  lg:px-36 md:px-16 px-5 mt-24 bg-[#0d4d16] rounded-t-2xl">
      <h1 className="text-center text-[#35c448] text-[55px] font-black">
        N<span className="text-[#b8b6b6]">e</span>s
        <span className="text-[#b8b6b6]">t</span>
      </h1>
      <p className="text-center  font-medium text-[#35c448c5] text-lg">
        Discover your dream home with Nest. From luxurious estates to student
        housing, find the perfect fit with our diverse selection and
        personalized service.
      </p>
      <div className="mt-16  flex flex-col-reverse sm:items-center lg:flex-row gap-5">
        <div className="flex flex-col sm:flex-row items-center lg:items-start text-center md:text-left gap-8 text-[#b8b6b6] lg:border-r lg:pr-5">
          <div className="flex gap-8">
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
            <h1 className="text-2xl font-semibold text-[#b8b6b6] text-center lg:text-left">
              Our Weekly Newsletter
            </h1>
            <div className=" h-fit relative mt-4 w-full">
              <input type="text" className="py-3 w-full rounded-md" />
              <button className="absolute text-white py-3 px-5 bg-orange-600 rounded-md right-0 top-0 bottom-0 my-1 mr-1 flex justify-center items-center">
                Newsletter
              </button>
            </div>
          </div>
          <div className="mt-5 text-center flex flex-col items-center lg:items-start mb-5 lg:mb-0">
            <h1 className="text-2xl font-semibold text-[#b8b6b6] ">
              Social Media Link
            </h1>
            <div className="text-white text-3xl flex gap-6 mt-3 ">
              <FaFacebook></FaFacebook>
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-[#adadad] font-semibold mt-12">@All right reserved. Nest Ltd. 2024</h1>
    </div>
  );
};

export default Footer;
