import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const navItems = [
        { name: "Dashboard", link: "/admin/dashboard" },
        { name: "Add Students", link: "/addstudents" },
        { name: "Logout", link: "/" },
    ]
    const useStyle = {
        color: "white",
        textDecoration: "none"
    }
    return (
        <div className="admin-side">
            <h1>ADMIN</h1>
            <ul>
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link to={item.link} style={useStyle}> {/* Call toggleSidebar on click */}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Sidebar