import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>
          Create your <br />
          PopX account
        </h1>

        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Phone number" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Company name" />

        <div className="agency">
          <p>Are you an Agency? *</p>

          <div className="agency-options">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                defaultChecked
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                value="no"
              />
              No
            </label>
          </div>
        </div>

        <button onClick={() => navigate("/profile")}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;