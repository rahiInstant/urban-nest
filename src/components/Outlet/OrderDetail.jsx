import { Link } from "react-router-dom";
import { getData, removeFromLs } from "./manageLS";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
const OrderDetail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getData());
  }, []);


  const storageData = getData();
  console.log(storageData);
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center">
        Your Submitted Schedule
      </h1>
      <hr className="mt-5"/>
      <div className="mt-12">
        {data.map((item, id) => {
          return (
            <div
              key={id}
              className="border h-fit rounded-lg p-4 w-[300px] flex flex-col text-justify relative"
            >
              <div
                onClick={() => removeFromLs("1")}
                className="h-6 w-6 absolute rounded-full flex justify-center items-center -left-2 -top-2 cursor-pointer text-white bg-red-600"
              >
                <RxCross2 />
              </div>
              <div className="space-y-2 mb-4">
                <h1 className="text-center text-xl font-medium border border-green-600 p-3 rounded-md">
                  Abdur Rahaman Rahi
                </h1>

                <h1>
                  <span className="  font-medium">E-mail:</span>{" "}
                  rahiurp20@gmail.com
                </h1>
                <h1>
                  <span className=" font-medium">Phone:</span> +545454454454545
                </h1>
                <h1>
                  <span className="  font-medium">Time:</span> 11.00 am to 2.00
                  pm
                </h1>
                <h1>
                  <span className=" font-medium">Visiting Status:</span> Visit
                  Physically{" "}
                </h1>
                <h1>
                  <span className="  font-medium">Comment:</span> Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio,
                  accusantium!
                </h1>
              </div>
              <div>
                <hr />
                <h1 className="text-xl font-medium text-center my-2">
                  Selected Property
                </h1>
                <hr className="mb-3" />
                <img
                  className="h-[250px] w-full rounded-lg"
                  src="/public/slide_01.jpg"
                  alt=""
                />
                <h1 className="text-xl font-semibold mt-3">
                  Modern Home with Pool
                </h1>
                <h1 className="font-medium mt-1">Los Angeles, California</h1>
                <Link
                  to={`/detail/1`}
                  className="block bg-[#23BE0A] px-3 py-2 text-center rounded-md text-white font-medium flex-auto mt-5"
                >
                  Show Detail
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderDetail;
