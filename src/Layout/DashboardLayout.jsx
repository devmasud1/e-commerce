import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex gap-10">
            {/* <h1>this is dashboard</h1> */}
            <div className="bg-slate-400 p-4 h-64 text-white">
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="my-4">
                    <Link to="/dashboard/profile">Profile</Link>
                    </li>
                    <li>
                    <Link to ="/dashboard/editProfile">Edit Profile</Link>
                    </li>
                </ul>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;