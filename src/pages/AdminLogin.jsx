import "../styles/adminlogin.css";
import time from "../assets/time.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:9090/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        navigate("/admindashboard");
      } else {
        console.error("Login failed:", data.message || res.statusText);
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("API link not working", error);
    }
  };

  return (
    <div className="admin-login">
      <section className="admin-image">
        <img src={time} alt="login" />
      </section>
      <section className="admin-login-form">
        <div>
          <h1>Login as Admin</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="admin-email">Email</label>
            <input
              type="text"
              id="admin-email"
              name="admin-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="admin-password">Password</label>
            <input
              type="password"
              id="admin-password"
              name="admin-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="link" style={{ marginTop: "1rem" }} type="submit">
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;