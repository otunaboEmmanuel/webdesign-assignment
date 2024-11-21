import "../styles/studentlogin.css";
import time from "../assets/time.svg";

const StudentLogin = () => {
    return (
        <div className="student-login">
            <section className="student-image">
                <img src={time} alt="login" />
            </section>
            <section className="student-login-form">
                <div>
                    <h1>Login as Student</h1>

                    <label htmlFor="student-email">Email</label>
                    <input type="text" id="student-email"/>

                    <label htmlFor=""> Password</label>
                    <input type="password" />

                    <button className="link" style={{ marginTop: "1rem" }}>
                        Login
                    </button>
                </div>
            </section>
        </div>
    );
}

export default StudentLogin;
