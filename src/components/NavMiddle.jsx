import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./NavMiddle.css";
const NavMiddle = ({ open, user }) => {
  console.log(user);
  return (
    <div
      className={`lg:flex w-[200px] lg:w-auto
      ${open ? "left-6" : "-left-52"} 
      duration-500 md:font-medium absolute lg:static 
      top-16 bg-slate-200 p-4 rounded-md lg:rounded-none 
      lg:left-0 lg:bg-transparent lg:p-0 z-50`}
    >
      <NavLink to="/">
        <p className="lg:mr-6 hover:bg-slate-100 hover:lg:bg-slate-200 px-3 py-1 rounded-sm text-base font-bold">
          Home
        </p>
      </NavLink>
      <NavLink to="/order">
        <p
          className={`lg:mr-6 ${
            user ? "" : "hidden"
          } hover:bg-slate-100 hover:lg:bg-slate-200 px-3 py-1 rounded-sm text-base font-bold`}
        >
          Booking Details
        </p>
      </NavLink>
      <NavLink to="/update_profile">
        <p
          className={`lg:mr-6 ${
            user ? "" : "hidden"
          } hover:bg-slate-100 hover:lg:bg-slate-200 px-3 py-1 rounded-sm text-base font-bold`}
        >
          Update Profile
        </p>
      </NavLink>
      {/* {routes.map((route, id) => {
        return (
          <NavLink className={``} key={id} to={route.path}>
            <p className="lg:mr-6 hover:bg-slate-100 hover:lg:bg-slate-200 px-3 py-1 rounded-sm text-base font-bold">
              {route.name}
            </p>
          </NavLink>
        );
      })} */}
    </div>
  );
};

NavMiddle.propTypes = {
  routes: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
};

export default NavMiddle;
