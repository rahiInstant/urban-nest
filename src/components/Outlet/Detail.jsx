import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="border w-full flex gap-6">
      <div className="w-[70%]">
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-2xl font-bold">Modern Home with Pool</h1>
            <h1 className="text-lg">Los Angeles, California</h1>
          </div>
          <div>
            <h1 className="text-lg text-right">3000 sq ft</h1>
            <h1 className="text-2xl font-bold">$1,200,000</h1>
          </div>
        </div>
        <div>
          <div>
            <div className="">
              <img className="rounded-lg " src="/slide_01.jpg" alt="" />
            </div>
            <div className="flex gap-3 mt-4">
              <img
                className="w-40 h-28 rounded-lg"
                src="/slide_01.jpg"
                alt=""
              />
              <img
                className="w-40 h-28 rounded-lg"
                src="/slide_01.jpg"
                alt=""
              />
              <img
                className="w-40 h-28 rounded-lg"
                src="/slide_01.jpg"
                alt=""
              />
              <img
                className="w-40 h-28 rounded-lg"
                src="/slide_01.jpg"
                alt=""
              />
              <img
                className="w-40 h-28 rounded-lg"
                src="/slide_01.jpg"
                alt=""
              />
            </div>
          </div>
          <p></p>
        </div>
      </div>
      <div className="w-[30%] p-4">
        <div className="flex gap-3 justify-center">
          <button className="px-2 py-1 border rounded-md">Share</button>
          <button className="px-2 py-1 border rounded-md">Favorite</button>
          <button className="px-2 py-1 border rounded-md">Print</button>
        </div>
        <h1 className="text-xl font-semibold uppercase text-center my-5">
          Schedule a tour
        </h1>
        <hr />
        <form>
          <label htmlFor="time"></label>
          <select
            className="border border-gray-600 rounded-md  h-10"
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
          <label
            className="p-2 rounded-md border block active:bg-blue-600 cursor-pointer"
            htmlFor="person"
          >
            In Person
          </label>
          <input type="radio" name="visit" id="person" />
          <label htmlFor="video">
            <div className="p-2 rounded-md border">video Chat</div>
          </label>
          <input type="radio" name="visit" id="video" />
        </form>
      </div>
    </div>
  );
};

export default Detail;
