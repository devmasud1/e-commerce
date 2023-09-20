import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import DashBoard from "../Pages/DashBoard";



const myRoutes = createBrowserRouter([
    {path: '/',
    element:<MainLayout></MainLayout> ,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/products',
            element: <Products></Products>,
            loader : ()=> fetch('https://dummyjson.com/products')
        }
        ,
        {
            path: '/dashboard',
            element: <DashBoard></DashBoard>
        }
    ]
}
])

export default myRoutes;