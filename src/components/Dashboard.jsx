import { useState } from "react";
import "../styles/adminpage.css"

function Dashboard() {


    const schedules = [
        {
          name: "Morning Meeting",
          class: "Math",
          time: "8:00 AM",
          date: "2024-11-21",
          actions: "Edit / Delete",
        },
        {
          name: "Science Workshop",
          class: "Science",
          time: "10:00 AM",
          date: "2024-11-22",
          actions: "Edit / Delete",
        },
        {
          name: "Study Session",
          class: "History",
          time: "2:00 PM",
          date: "2024-11-23",
          actions: "Edit / Delete",
        },
      ];
    
      const [data, setData] = useState(schedules);
    
      const [formInput, setFormInput] = useState({
        name: "",
        class: "",
        time: "",
        date: "",
      });
    
      function handleInputChange(e) {
        const { name, value } = e.target;
    
        setFormInput({ ...formInput, [name]: value });
      }
    
      function addSchedule(e) {
        e.preventDefault();
    
        setData([...data, { ...formInput, actions: "Edit / Delete" }]);
    
        setFormInput({ name: "", class: "", time: "", date: "" });
      }
  return (
    <div>
      <section>
          <h1>Welcome Dr Jerry </h1>
          <p>Add or delete schedules on this page</p>
        </section>
        <section
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <h3>Create New Schedule</h3>
          <p>Fill the form below to add a new schedule</p>
          <form
            onSubmit={addSchedule}
            style={{ display: "flex", gap: "15px", marginBottom: "20px" }}
          >
            <input
              style={{padding:'5px'}}
              type="text"
              name="name"
              placeholder="Schedule Name"
              value={formInput.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="class"
              placeholder="Class"
              value={formInput.class}
              onChange={handleInputChange}
              required
            />
            <input
              type="time"
              name="time"
              placeholder="Time"
              value={formInput.time}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={formInput.date}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Schedule</button>
          </form>
        </section>
        <section style={{ width: "100%" }}>
          <h3 style={{ marginBottom: "1rem" }}>Created Schedules</h3>

          <table style={{ width: "150%", borderCollapse: "collapse" }}>
            <thead style={{ color: "white" }}>
              <tr style={{ backgroundColor: "#004282" }}>
                <th style={{ borderTopLeftRadius: "10px" }}>Schedule Name</th>
                <th>Time</th>
                <th>Class</th>
                <th>Date</th>
                <th style={{ borderTopRightRadius: "10px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.time}</td>
                  <td>{data.class}</td>
                  <td>{data.date}</td>
                  <td>{data.actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

    </div>
  )
}

export default Dashboard
