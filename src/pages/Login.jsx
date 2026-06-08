import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <input
          type="email"
          placeholder="Enter email address"
        />

        <input
          type="password"
          placeholder="Enter password"
        />

        <button onClick={() => navigate("/profile")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;