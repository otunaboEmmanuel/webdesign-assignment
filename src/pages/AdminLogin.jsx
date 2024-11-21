import "../styles/adminlogin.css";
import time from "../assets/time.svg";

function AdminLogin() {
  return (
    <div className="admin-login">
      <section className="admin-image">
        <img src={time} alt="login" />
      </section>
      <section className="admin-login-form">
        <div>
          <h1>Login as Admin</h1>

          <label htmlFor="">Email</label>
          <input type="text" />

          <label htmlFor=""> Password</label>
          <input type="text" />

          <button className="link" style={{ marginTop: "1rem" }}>
            Login
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;
