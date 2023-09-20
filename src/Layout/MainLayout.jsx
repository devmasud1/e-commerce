import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import LoadingSpinner from "../Components/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();

  const newTitle = location.pathname;

  const titleParts = newTitle.split("/");
  document.title = titleParts;

  return (
    <div>
      <NavBar />

      {navigation.state === "loading" ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="container mx-auto my-10">
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
