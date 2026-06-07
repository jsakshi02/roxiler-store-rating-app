import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import "../css/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      const { token, role, name } = res.data;

      login({ token, role, name });
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);

      if (role === "ADMIN") navigate("/admin");
      else if (role === "USER") navigate("/user");
      else if (role === "STORE_OWNER") navigate("/store");
      else alert("Unknown Role");
    } catch (error) {
      alert(error.response?.data?.message || "Server not responding");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Roxiler Store Rating</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Don’t have an account?
            <Link to="/register" className="ms-2">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
