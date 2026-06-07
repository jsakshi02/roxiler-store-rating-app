import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar navbar-dark bg-primary px-3">
      <span className="navbar-brand">
        Roxiler Store Rating
      </span>

      <button
        className="btn btn-light"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}