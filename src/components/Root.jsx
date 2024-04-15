import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-Poppins">
      <Helmet>
        <title>Nest | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
