import { Shield } from "lucide-react";
import { School } from "lucide-react";
import "./styles/app.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <section className="home-login">
        <Link className="link" to="/adminlogin">
          <p style={{ margin: 0 }}>Login as Admin</p> <Shield /> 
        </Link>

        <Link className="link">
          <p style={{ margin: 0 }}>Login as Student</p> <School />
        </Link>
      </section>
    </div>
  );
};

export default App;
