import {  NavLink, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex gap-10">
            {/* <h1>this is dashboard</h1> */}
            <div className="bg-slate-400 p-4 h-64 text-white">
                <nav>
                <ul>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="my-4">
                    <NavLink to="/dashboard/profile">Profile</NavLink>
                    </li>
                    <li>
                    <NavLink to ="/dashboard/editProfile">Edit Profile</NavLink>
                    </li>
                </ul>
                </nav>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;