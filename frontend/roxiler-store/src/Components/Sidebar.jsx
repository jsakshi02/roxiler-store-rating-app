import { Link } from "react-router-dom";

export default function Sidebar() {
  const role = localStorage.getItem("role");

  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h4>Store Rating</h4>

      <hr />

      {role === "ADMIN" && (
        <>
          <Link
            className="d-block text-white mb-2"
            to="/admin"
          >
            Dashboard
          </Link>

          <Link
            className="d-block text-white mb-2"
            to="/admin/users"
          >
            Users
          </Link>

          <Link
            className="d-block text-white mb-2"
            to="/admin/stores"
          >
            Stores
          </Link>
        </>
      )}

      {role === "USER" && (
        <>
          <Link
            className="d-block text-white mb-2"
            to="/user"
          >
            Dashboard
          </Link>

          <Link
            className="d-block text-white"
            to="/stores"
          >
            Stores
          </Link>
        </>
      )}

      {role === "STORE_OWNER" && (
        <>
          <Link
            className="d-block text-white"
            to="/owner"
          >
            Dashboard
          </Link>
        </>
      )}
    </div>
  );
}