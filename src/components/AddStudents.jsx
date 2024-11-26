import React, { useState } from "react";

function AddStudents() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data being sent:", { firstName, lastName, email, password });
    try {
      const res = await fetch("http://localhost:9090/users/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({firstName, lastName, email, password }),
      });

      const data = await res.json();
      console.log("API Response:", data);
      
      if (res.ok) {
        alert("Added Student successfully");
        // Optionally, clear the form fields after successful submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      } else {
        setErrorMessage(data.message || res.statusText);
        console.error("Send data failed", data.message || res.statusText);
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
      console.error("Error", error.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <section>
        <h1>Welcome Dr. Jerry</h1>
        <p>Add students to your timetable on this page</p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3>Add Students</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label>Student's First Name</label>
          <input
            type="text"
            style={{ padding: '10px' }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label>Student's Last Name</label>
          <input
            type="text"
            style={{ padding: '10px' }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label>Student's Email</label>
          <input
            type="email"
            style={{ padding: '10px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Student's Password</label>
          <input
            type="text"
            style={{ padding: '10px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="link">Add Student</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
        </form>
      </section>
    </div>
  );
}

export default AddStudents;