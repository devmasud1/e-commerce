import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" shadow-md py-3">
      <div className="container mx-auto flex justify-between items-center">
    
          <h1 className="text-3xl font-semibold">E-commerce</h1>
     
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
