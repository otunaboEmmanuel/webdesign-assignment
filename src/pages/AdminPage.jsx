import "../styles/adminpage.css";
import { NavLink, Outlet } from "react-router-dom";

function AdminPage() {


  return (
    <div className="admin">
      <div className="admin-side">
        <h1>ADMIN</h1>

        <div>
          <ul>
            <li> <NavLink className={({ isActive }) => (isActive ? "active-link" : "sidebarlink")} to='/admin/dashboard'>Dashboard</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "sidebarlink")} to='/admin/addstudents'>Add Student</NavLink></li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "active-link" : "sidebarlink")} to="/adminlogin">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="admin-main">
        
        <Outlet/>
        
       </div>
    </div>
  );
}
export default AdminPage;
