import '../styles/login.css'
import student from '../assets/student.svg'



function StudentLogin() {
  return (
    <div className="login">
    <section className="login-image">
      <img src={student} alt="login" />
    </section>
    <section className="login-form">
      <div>
        <h1>Login as Student</h1>

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
  )
}

export default StudentLogin
