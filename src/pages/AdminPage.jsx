import "../styles/adminpage.css";
import { Link, Outlet } from "react-router-dom";

function AdminPage() {


  return (
    <div className="admin">
      <div className="admin-side">
        <h1>ADMIN</h1>

        <div>
          <ul>
            <li> <Link className="sidebarlink" to='/admin/dashboard'>Dashboard</Link></li>
            <li><Link className="sidebarlink" to='/admin/addstudents'>Add Student</Link></li>
            <li>
              <Link className="sidebarlink" to="/adminlogin">
                Logout
              </Link>
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
