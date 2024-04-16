import { useState } from "react";
import { GiTwirlyFlower } from "react-icons/gi";
import { useLoaderData, useNavigate } from "react-router-dom";
import { checkDataDuplicate, setData } from "./manageLS";
import toast from "react-hot-toast";
import { IoLocationSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
const Detail = () => {
  const data = useLoaderData();
  const [heroImg, setHeroImg] = useState(data.image);
  const [formData, setFormData] = useState({});
  const [helmet, setHelmet] = useState("Nest | Detail ");
  const navigate = useNavigate();

  const errorMsg = (msg) => toast.error(msg);
  const successMsg = (msg) => toast.success(msg);

  function handleScheduleSubmit(e) {
    e.preventDefault();
    const time = e.target.time.value;
    const visit = e.target.visit.value;
    const name = e.target.name.value;
    const mail = e.target.mail.value;
    const phone = e.target.phone.value;
    const comment = e.target.comment.value;
    const id = data.id;
    const estate_title = data.estate_title;
    const image = data.image;
    const area = data.area;

    // store in ls  (duplicate check) => get from ls
    const isDuplicate = checkDataDuplicate(id);
    if (!isDuplicate) {
      setData({
        id,
        estate_title,
        area,
        image,
        time,
        visit,
        name,
        mail,
        phone,
        comment,
      });
      successMsg("Booking your visit successfully.Redirecting");
      setHelmet("Redirecting...");
      setTimeout(() => {
        navigate("/order");
      }, 2000);
    } else {
      errorMsg("Schedule Already submitted for this specific item.");
    }
    // console.log(time, visit, name, mail, phone, comment, id, isDuplicate);
  }
  return (
    <div className=" px-4 w-full  flex flex-col lg:flex-row mt-12 duration-300">
      <Helmet>
        <title>{helmet}</title>
      </Helmet>
      <div className="w-full lg:w-[70%] p-4 flex flex-col items-center">
        <div className="flex items-center flex-col md:flex-row md:justify-between w-full text-center md:text-left">
          <div>
            <h1 className="text-2xl font-bold">{data.estate_title}</h1>
            <h1 className="text-lg flex gap-2 items-center justify-center md:justify-start">
              <IoLocationSharp />
              {data.location}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg text-center md:text-right">{data.area}</h1>
            <h1 className="text-2xl font-bold">{data.price}</h1>
          </div>
        </div>
        <div className="mt-5">
          <div className="h-auto">
            <div className="w-fit h-fit relative">
              <h1
                className={`${
                  data.status == "sale" ? "bg-orange-700" : "bg-fuchsia-700"
                } absolute top-3 right-3 px-3 py-2 rounded-lg w-36 text-center font-medium text-white`}
              >
                For {data.status == "sale" ? "sale" : "rent"}
              </h1>
              <img
                className="rounded-lg h-[500px] w-full"
                src={heroImg}
                alt=""
              />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              <img
                onMouseMove={() => setHeroImg(data.icon_image[0])}
                className="w-40 h-28 rounded-lg cursor-pointer"
                src={data.icon_image[0]}
                alt=""
              />
              <img
                onMouseMove={() => setHeroImg(data.icon_image[1])}
                className="w-40 h-28 rounded-lg cursor-pointer"
                src={data.icon_image[1]}
                alt=""
              />
              <img
                onMouseMove={() => setHeroImg(data.icon_image[2])}
                className="w-40 h-28 rounded-lg hidden md:block cursor-pointer"
                src={data.icon_image[2]}
                alt=""
              />
              <img
                onMouseMove={() => setHeroImg(data.icon_image[3])}
                className="w-40 h-28 rounded-lg hidden lg:block cursor-pointer"
                src={data.icon_image[3]}
                alt=""
              />
            </div>
          </div>
          <p></p>
        </div>
        <div className="mt-8">
          <p className="text-justify">
            <span className="text-lg font-medium">Description:</span>{" "}
            {data.description}
          </p>
          <div className="mt-5 flex flex-col lg:flex-row lg:items-center gap-3 bg-[#FFAC3326] p-2  rounded-md">
            <h1 className="text-lg font-medium bg-[#e99920] h-12 px-5 text-white rounded-md flex justify-center items-center">
              Facilities
            </h1>
            <div className="flex gap-4 font-medium flex-col lg:flex-row ml-5 lg:ml-0">
              {data.facilities.map((facility, idx) => {
                return (
                  <h1 key={idx} className="flex items-center gap-2">
                    <GiTwirlyFlower /> {facility}
                  </h1>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[30%] p-4 ">
        <div className="flex gap-3 justify-center w-full ">
          <button className="px-2 py-1 border rounded-md w-full hover:bg-slate-100 duration-200">
            Share
          </button>
          <button className="px-2 py-1 border rounded-md w-full  hover:bg-slate-100 duration-200">
            Favorite
          </button>
          <button className="px-2 py-1 border rounded-md w-full  hover:bg-slate-100 duration-200">
            Print
          </button>
        </div>
        <h1 className="text-xl font-semibold uppercase text-center mt-5 mb-2">
          Schedule a tour
        </h1>
        <p className="mb-5 text-center">
          Schedule a tour for visiting this house to explore all awesome
          feature.
        </p>
        <hr />
        <form onSubmit={handleScheduleSubmit}>
          <label className="text-lg font-medium mt-4 block" htmlFor="time">
            Select a time-frame
          </label>
          <select
            className="border border-gray-600 rounded-[4px] w-full  h-10 mt-3"
            name="time"
            id="time"
          >
            <option className="hidden" value="indicator">
              {" "}
              -- select time --{" "}
            </option>
            <option value="11.00 am to 2.00 pm">9.00 am to 12.00 pm</option>
            <option value="11.00 am to 2.00 pm">11.00 am to 2.00 pm</option>
            <option value="11.00 am to 2.00 pm">3.00 pm to 7.00 pm</option>
          </select>
          <div className="flex gap-5 w-full mt-4">
            <label
              className="p-2 rounded-md text-center border w-full block has-[:checked]:border-blue-600 cursor-pointer"
              htmlFor="person"
            >
              <input
                type="radio"
                name="visit"
                id="person"
                value="person"
                className="hidden"
              />
              In Person
            </label>
            <label
              className="p-2 w-full text-center rounded-md border block has-[:checked]:border-blue-600 cursor-pointer"
              htmlFor="video"
            >
              <input
                type="radio"
                name="visit"
                id="video"
                value="video"
                className="hidden"
              />
              video Chat
            </label>
          </div>

          <input
            className="w-full h-10 p-3 bg-slate-100 outline-none rounded-md mt-4"
            placeholder="Your Name"
            name="name"
            type="text"
          />
          <input
            className="w-full h-10 p-3 bg-slate-100 outline-none rounded-md mt-4"
            placeholder="your@mail.com"
            name="mail"
            type="text"
          />
          <input
            className="w-full h-10 p-3 bg-slate-100 outline-none rounded-md mt-4"
            placeholder="+254545545"
            name="phone"
            type="text"
          />
          <textarea
            className="w-full p-3 h-full bg-slate-100 outline-none rounded-lg mt-4"
            name="comment"
            id=""
            cols="30"
            rows="10"
            placeholder="Write about your opinion here"
          ></textarea>
          <button
            className="w-full border border-blue-600 text-blue-600 mt-4 p-3 rounded-md font-medium text-lg hover:bg-blue-600 hover:text-white duration-200"
            type="submit"
          >
            Booking Schedule
          </button>
        </form>
      </div>
    </div>
  );
};

export default Detail;
