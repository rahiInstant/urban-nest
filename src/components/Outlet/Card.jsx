import { GiTwirlyFlower } from "react-icons/gi";
import "aos/dist/aos.css";
import { Link, useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Card = () => {
  const data = useLoaderData();
  return (
    <div className="mt-12 lg:mt-28 ">
      <div className="flex flex-col gap-6 items-center mx-4">
        <h1 className="font-black text-3xl md:text-4xl lg:text-[55px] text-center">
          Versatile Housing Options
        </h1>
        <p className="text-lg font-medium w-full lg:w-5/6 text-center">
          Explore a range of living options from single-family homes to vacation
          rentals. Discover your perfect dwelling with our varied selection.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-6">
        {data.map((category, idx) => {
          return (
            <div
              key={idx}
              className="border p-4 w-full rounded-xl flex gap-5 flex-col lg:flex-row"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img
                className="rounded-lg lg:w-60 w-full"
                src={category.image}
                alt=""
              />
              <div className="w-full">
                <h1 className="text-2xl font-semibold text-[#131313] ">
                  {category.estate_title}
                </h1>
                <div className="flex mt-4  gap-4 items-start lg:items-center flex-col lg:flex-row">
                  <h1 className="text-[#131313CC] text-lg font-medium ">
                    {category.segment_name}
                  </h1>
                  <h1 className="flex gap-2 items-center">
                    {" "}
                    <IoLocationSharp />
                    {category.location}
                  </h1>
                </div>
                <div className="mt-4 flex flex-col lg:flex-row lg:items-center gap-3 bg-[#FFAC3326] p-2  rounded-md">
                  <h1 className="text-lg font-medium bg-[#e99920] h-12 px-5 text-white rounded-md flex justify-center items-center">
                    Facilities
                  </h1>
                  <div className="flex gap-4 font-medium flex-col lg:flex-row ml-5 lg:ml-0">
                    {category.facilities.map((facility, idx) => {
                      return (
                        <h1 key={idx} className="flex items-center gap-2">
                          <GiTwirlyFlower /> {facility}
                        </h1>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-5 flex flex-col lg:flex-row gap-4">
                  <div className="flex gap-4 justify-between text-center flex-auto">
                    <h1 className=" bg-[#412dfa56] px-5 py-2 rounded-md font-medium w-full">
                      For {category.status}
                    </h1>
                    <h1 className=" bg-[#fa672d56] px-3 py-2 rounded-md font-medium w-full">
                      {category.area}
                    </h1>
                    <h1 className=" bg-[#2ddbfa56] px-3 py-2 rounded-md font-medium w-full">
                      {category.price}
                    </h1>
                  </div>
                  <Link
                    to={`/detail/${category.id}`}
                    className=" bg-[#23BE0A] px-3 py-2 text-center rounded-md text-white font-medium flex-auto"
                  >
                    Show Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="border p-4 w-full rounded-xl flex gap-5 flex-col lg:flex-row">
          <img
            className="rounded-lg lg:w-60 w-full"
            src="/public/slide_01.jpg"
            alt=""
          />
          <div className="w-full">
            <h1 className="text-2xl font-semibold text-[#131313] ">
              Modern Home with Pool
            </h1>
            <h1 className="text-[#131313CC] text-lg font-medium mt-4 ">
              Single-family home
            </h1>
            <div className="mt-4 flex flex-col lg:flex-row lg:items-center gap-3 bg-[#FFAC3326] p-2  rounded-md">
              <h1 className="text-lg font-medium bg-[#e99920] h-12 px-5 text-white rounded-md flex justify-center items-center">
                Facilities
              </h1>
              <div className="flex gap-4 font-medium flex-col lg:flex-row ml-5 lg:ml-0">
                <h1 className="flex items-center gap-2">
                  <GiTwirlyFlower /> swimming pool
                </h1>
                <h1 className="flex items-center gap-2">
                  <GiTwirlyFlower /> patio
                </h1>
                <h1 className="flex items-center gap-2">
                  <GiTwirlyFlower /> gourmet kitchen
                </h1>
              </div>
            </div>
            <div className="mt-5 flex flex-col lg:flex-row gap-4">
              <div className="flex gap-4">
                <h1 className=" bg-[#412dfa56] px-5 py-2 rounded-md font-medium">
                  For Sale
                </h1>
                <h1 className=" bg-[#fa672d56] px-5 py-2 rounded-md font-medium ">
                  3000 sq ft
                </h1>
                <h1 className=" bg-[#2ddbfa56] px-5 py-2 rounded-md font-medium ">
                  $1,200,000
                </h1>
              </div>
              <button className=" bg-[#23BE0A] px-5 py-2 rounded-md text-white font-medium flex-1">
                Show Detail
              </button>
            </div>
          </div>
        </div> */}
      </div>
      <div className=" h-fit mt-10 lg:mt-20 w-full ">
        <h1 className="text-3xl md:text-4xl lg:text-[55px] font-black text-center">Find us</h1>
        <hr className="mb-5 mt-3 lg:mt-10"/>
        <MapContainer
          style={{
            height: "350px",
            borderRadius:'10px'
          }}
          
          center={[22.36739838024788, 91.84276665826629]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[22.36739838024788, 91.84276665826629]}>
            <Popup>
              <span className="text-lg font-bold">Nest Ltd.</span> <br />
              Beside dimond hotel, Chattorgram
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Card;
