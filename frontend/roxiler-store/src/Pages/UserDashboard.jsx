import { useEffect, useState } from "react";
import api from "../api/axios";

export default function UserDashboard() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    api.get("/user/stores").then((res) => setStores(res.data));
  }, []);

  const submitRating = async (storeId, rating) => {
    await api.post("/user/rate", {
      storeId,
      rating,
    });

    alert("Rating submitted");
  };

  return (
    <div>
      <h2>User Dashboard</h2>

      {stores.map((s) => (
        <div key={s.id}>
          <h3>{s.name}</h3>
          <p>{s.address}</p>

          <input
            type="number"
            min="1"
            max="5"
            onBlur={(e) => submitRating(s.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}