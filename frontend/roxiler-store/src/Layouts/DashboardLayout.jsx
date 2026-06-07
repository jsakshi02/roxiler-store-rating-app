import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Navbar />

        <div className="container mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}