import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import DashBoard from "../Pages/DashBoard";
import DashboardProfile from "../Pages/DashboardProfile";
import DashboardEditProfile from "../Pages/DashboardEditProfile";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: (object) =>
          fetch(`https://dummyjson.com/products/${object.params.id}`),
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <DashBoard></DashBoard>,
          },
          {
            path: "/dashboard/profile",
            element: <DashboardProfile></DashboardProfile>,
          },
          {
            path: "/dashboard/editProfile",
            element: <DashboardEditProfile></DashboardEditProfile>,
          },
        ],
      },
    ],
  },
]);

export default myRoutes;
