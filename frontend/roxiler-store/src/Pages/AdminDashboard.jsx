import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../Layouts/DashboardLayout";
import "../css/AdminDashboard.css"; 

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/admin/dashboard");
        setStats(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <DashboardLayout>
      <div className="dashboard">
        <h2>Admin Dashboard</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <h3>{stats.totalUsers || 0}</h3>
              <p>Total Users</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h3>{stats.totalStores || 0}</h3>
              <p>Total Stores</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h3>{stats.totalRatings || 0}</h3>
              <p>Total Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
