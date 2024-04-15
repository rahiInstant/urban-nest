import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/authContext";

const UpdateProfile = () => {
  const [show, setShow] = useState(false);
  const [passFieldType, setPassFieldType] = useState("password");
  const [title, setTitle] = useState("Nest | login");
  const { user } = useContext(AuthContext);
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);

  function handleUpdateProfile(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const mail = e.target.mail.value;
    const photo = e.target.photo.value;
    const pass = e.target.pass.value;
    console.log(name, mail, photo, pass);
  }

  return (
    <div className="flex items-center justify-center select-none  mt-24">
      <div className="p-5 mx-4 border-slate-400 border  rounded-2xl flex flex-col  items-end relative">
        <form onSubmit={handleUpdateProfile}>
          <div className="flex flex-col sm:flex-row sm:gap-5 items-center w-full">
            <div className="w-full">
              <label htmlFor="mail" className="block text-xl font-semibold">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                required
                type="text"
                name="name"
                defaultValue={user.displayName}
                placeholder="your name"
                className="w-full  outline-none bg-[#F3F3F3] rounded-md p-3 mt-4"
              />
            </div>
            <div className="w-full">
              <label
                className="block text-xl font-semibold mt-6 sm:mt-0"
                htmlFor="pass"
              >
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                defaultValue={user.photoURL}
                placeholder="https//:your-photo-link"
                className="w-full outline-none bg-[#F3F3F3] rounded-md p-3 mt-4"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-5 items-center sm:mt-6 w-full">
            <div className="w-full mt-6 sm:mt-0">
              <label htmlFor="mail" className="block text-xl font-semibold">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                required
                type="text"
                name="mail"
                defaultValue={user.email}
                placeholder="your@mail.com"
                className="w-full  outline-none bg-[#F3F3F3] rounded-md p-3 mt-4"
              />
            </div>
            <div className="w-full mt-6 sm:mt-0">
              <label className="block text-xl font-semibold " htmlFor="pass">
                Password <span className="text-red-600">*</span>
              </label>
              <div className="h-fit mt-4 relative">
                <input
                  required
                  type={passFieldType}
                  name="pass"
                  placeholder="S/tR-o*N-g"
                  className="w-full outline-none bg-[#F3F3F3] rounded-md p-3 "
                />
                <FaRegEye
                  className={`absolute top-1/2 -translate-y-1/2 right-3 text-xl cursor-pointer ${
                    show ? "hidden" : ""
                  }`}
                  onClick={() => {
                    setShow(true);
                    setPassFieldType("text");
                  }}
                />
                <FaRegEyeSlash
                  className={`absolute top-1/2 -translate-y-1/2 right-3 text-xl cursor-pointer ${
                    show ? "" : "hidden"
                  }`}
                  onClick={() => {
                    setShow(false);
                    setPassFieldType("password");
                  }}
                />
              </div>
            </div>
          </div>

          <button
            className="block w-full mt-7 py-3 border rounded-lg border-green-700 text-xl font-medium hover:bg-green-700 hover:text-white duration-150"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
