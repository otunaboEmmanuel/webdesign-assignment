import React from 'react'
import AddStudents from '../components/AddStudents'
import Sidebar from '../components/Sidebar'

const AdminStudents = () => {
    return (
        <div className="admin">
            <Sidebar />
            <div className="admin-main">
                <AddStudents />
            </div>
        </div>
    )
}

export default AdminStudents