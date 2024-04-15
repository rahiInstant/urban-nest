import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/authContext";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const [title, setTitle] = useState("Nest | update profile");
  const { user, updateProfileData } = useContext(AuthContext);
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);

  function handleUpdateProfile(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const mail = e.target.mail.value;
    const photo = e.target.photo.value;
    setTitle("updating...");
    updateProfileData({ displayName: name, photoURL: photo, email: mail })
      .then(() => {
        successMsg("Profile update successfully.");
        setTitle("Nest | update profile");
      })
      .catch((error) => {
        errorMsg(error.message);
      });

    console.log(name, mail, photo);
  }

  return (
    <div className="flex items-center justify-center select-none  mt-24">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="p-5 mx-4 border border-slate-500 rounded-2xl w-full sm:w-[500px] lg:w-[800px] z-20 bg-white">
        <h1 className="text-3xl font-black text-center my-5">
          Update <span className="text-orange-600">Profile</span>
        </h1>
        <hr className="mb-5" />
        <form onSubmit={handleUpdateProfile}>
          <div className="flex flex-col sm:gap-5 items-center w-full">
            <div className="w-full">
              <label htmlFor="mail" className="block text-xl font-semibold">
                Name
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
                Email
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
