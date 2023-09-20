import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className=" shadow-md py-3">
      <div className="container mx-auto flex justify-between items-center">
    
          <h1 className="text-3xl font-semibold">E-commerce</h1>
     
        <nav>
          <ul className="flex gap-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
