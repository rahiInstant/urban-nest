import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { NavContext } from "./navContext";
import { useState } from "react";

const Root = () => {
  const [open, setOPen] = useState(false);


  const aboutNav = { open, setOPen };
  return (
    <div className="max-w-6xl mx-auto font-Poppins select-none">
      <Helmet>
        <title>Nest | Home</title>
      </Helmet>
      <NavContext.Provider value={aboutNav}>
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
      </NavContext.Provider>
    </div>
  );
};

export default Root;
