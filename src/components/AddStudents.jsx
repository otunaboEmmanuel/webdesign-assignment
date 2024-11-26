

function AddStudents() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'3rem'}}>
      <section>
          <h1>Welcome Dr Jerry </h1>
          <p>Add students to your timetable on this page</p>
        </section>

        <section style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <h3>Add Students</h3>
            <label>Sudents Email</label>
            <input type="email" style={{padding:'10px'}} />
            <label>Students Password</label>
            <input type="text" style={{padding:'10px'}} />
            <button className="link">Add Student</button>
        </section>

    </div>
  )
}

export default AddStudents
