import "../styles/login.css";
import time from "../assets/time.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate here

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:9090/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (data.code == "00") {
        console.log("Successfully logged in");
        alert("Login Success!")
        navigate("/admin");
      } else {
        console.error("Login failed:", data.message || res.statusText);
        alert(data.message || "Invalid Credentials")
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="login">
      <section className="login-image">
        <img src={time} alt="login" />
      </section>
      <section className="login-form">
        <div>
          <h1>Login as Admin</h1>
          <form onSubmit={handleSubmit}> 
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email" 
              value={email}
              placeholder="Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password" 
              value={password}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="link" style={{ marginTop: "1rem" }}>
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;