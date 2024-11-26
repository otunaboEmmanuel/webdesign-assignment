import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import "../styles/adminpage.css";
import Sidebar from "../components/Sidebar";

function AdminPage() {
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({
    startTime: "",
    endTime: "",
    courseName: "",
    day_of_the_week: "",
  });

  // Custom order for sorting days of the week
  const daysOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Fetch schedules from the backend
  const fetchSchedules = async () => {
    try {
      const response = await fetch("http://localhost:9090/schedule/allSchedule");
      if (!response.ok) {
        throw new Error("Failed to fetch schedules");
      }
      const data = await response.json();
      // Sort schedules by day of the week
      const sortedSchedules = data.sort(
        (a, b) => daysOrder.indexOf(a.day_of_the_week) - daysOrder.indexOf(b.day_of_the_week)
      );
      setSchedules(sortedSchedules);
    } catch (error) {
      console.error("Error fetching schedules:", error);
    }
  };

  // Handle form submission to add a new schedule
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9090/schedule/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add schedule");
      }

      const newSchedule = await response.json();
      setSchedules((prev) => {
        const updatedSchedules = [...prev, newSchedule];
        // Sort updated schedules by day of the week
        return updatedSchedules.sort(
          (a, b) => daysOrder.indexOf(a.day_of_the_week) - daysOrder.indexOf(b.day_of_the_week)
        );
      });
      setFormData({ startTime: "", endTime: "", courseName: "", day_of_the_week: "" }); // Reset form
      alert("Schedule added successfully!");
    } catch (error) {
      console.error("Error adding schedule:", error);
    }
  };

  // Fetch schedules on component mount
  useEffect(() => {
    fetchSchedules();
  }, []);

  // Update form data as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="admin">
      <Sidebar />
      <div className="admin-main">
        <div>
          <h1>Welcome Dr Jerry</h1>
          <h2>Schedule Management</h2>

          {/* Form to add a new schedule */}
          <form onSubmit={handleSubmit}>
            <label>
              Start Time:
              <input
                type="text"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              End Time:
              <input
                type="text"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Course Name
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Day of the Week:
              <input
                type="text"
                name="day_of_the_week"
                value={formData.day_of_the_week}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Add Schedule</button>
          </form>

          {/* Table to display schedules */}
          <h3>Current Schedules</h3>
          <table>
            <thead>
              <tr className="table-header">
                <th>ID</th>
                <th>Course Name</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Day of the Week</th>
              </tr>
            </thead>
            <tbody>
              {schedules.length > 0 ? (
                schedules.map((schedule) => (
                  <tr key={schedule.scheduleId}>
                    <td>{schedule.scheduleId}</td>
                    <td>{schedule.courseName}</td>
                    <td>{schedule.startTime}</td>
                    <td>{schedule.endTime}</td>
                    <td>{schedule.day_of_the_week}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No schedules available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
