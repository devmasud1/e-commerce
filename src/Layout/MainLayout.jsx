import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto my-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
