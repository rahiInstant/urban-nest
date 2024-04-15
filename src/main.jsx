import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Outlet/Home";
import Root from "./components/Root";
import Login from "./components/Outlet/Login";
import Register from "./components/Outlet/Register";
import Detail from "./components/Outlet/Detail";

import OrderDetail from "./components/Outlet/OrderDetail";
import ErrorPage from "./components/ErrorPage";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import UpdateProfile from "./components/Outlet/UpdateProfile";
import Private from "./components/Private";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/detail/:itemID",
        loader: async ({params}) => {
          const res = await fetch("/data.json")
          const data = await res.json()
          const Actual = data.find((item) => item.id === params.itemID)
          return Actual
        },
        element: <Detail></Detail>,
      },
      {
        path: "/order",
        element: (
          <Private>
            <OrderDetail></OrderDetail>
          </Private>
        ),
      },
      {
        path: "/update_profile",
        element: (
          <Private>
            <UpdateProfile></UpdateProfile>
          </Private>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
