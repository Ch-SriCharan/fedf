import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const loginHandler = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="page-card login-card">
      <div className="card-badge">Secure Access</div>
      <h2>Library Login</h2>
      <p>Sign in to manage books, track updates, and keep your catalog organized.</p>
      <button className="primary-btn" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
}

export default Login;
