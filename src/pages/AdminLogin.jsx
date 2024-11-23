import "../styles/login.css";
import time from "../assets/time.svg";

function AdminLogin() {
  return (
    <div className="login">
      <section className="login-image">
        <img src={time} alt="login" />
      </section>
      <section className="login-form">
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
