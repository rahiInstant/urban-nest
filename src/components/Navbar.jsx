import { useContext, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import NavMiddle from "./NavMiddle";
import { AuthContext } from "../AuthProvider/authContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { NavContext } from "./navContext";

const Navbar = () => {
  const { open, setOPen } = useContext(NavContext);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/order", name: "Booking Details", id: 2 },
    { path: "/update_profile", name: "Update Profile", id: 2 },
  ];
  const { user, logOut } = useContext(AuthContext);
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);

  function handleSignOut() {
    console.log("clicked");
    logOut()
      .then(() => {
        successMsg("sign out successfully!!");
      })
      .catch((error) => {
        const Msg = error.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
  }

  function handleOpen(value) {
    setOPen(value);
  }

  return (
    <div className="bg-[#a3e2ac4b] h-24 rounded-b-2xl duration-200  top-0 z-50">
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto ">
        <div className="flex items-center gap-1">
          <div onClick={() => setOPen(!open)} className="text-2xl lg:hidden">
            {open ? <RxCross2 /> : <HiMenuAlt1 />}
          </div>
          <div className="text-3xl md:text-4xl font-extrabold text-[#3f3f3f]">
            C<span className="text-green-700">nest</span>
          </div>
        </div>
        <NavMiddle
          handleOpen={handleOpen}
          user={user}
          routes={routes}
          open={open}
        ></NavMiddle>
        <div className="flex gap-4">
          {user ? (
            <div className="flex items-center gap-5">
              <img
                className="w-11 h-11 rounded-full"
                src={user.photoURL}
                alt=""
                title={user.displayName}
              />
              <button
                onClick={handleSignOut}
                className="px-4 py-2 border rounded-md border-red-700 font-medium "
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 border rounded-md border-green-700 font-medium hover:bg-green-700 hover:text-white duration-150">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
