import { useEffect, useState } from "react";
import api from "../api/axios";

export default function StoreDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/owner/dashboard").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Store Dashboard</h2>

      {data.map((u) => (
        <div key={u.id}>
          <p>{u.name}</p>
          <p>{u.rating}</p>
        </div>
      ))}
    </div>
  );
}