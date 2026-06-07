import { useState } from "react";
import api from "../api/axios";
import "../css/Register.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    role: "USER", // default role
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await api.post("/auth/register", form);
      alert("Registered successfully");
    } catch (err) {
      console.error(err);
      alert("Error registering");
    }
  };

  return (
    <>
    
    <div className="register-container">
             <h3>Register</h3>
      
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />

      <select name="role" value={form.role} onChange={handleChange}>
        <option value="USER">Normal User</option>
        <option value="STORE_OWNER">Store Owner</option>
        <option value="ADMIN">System Admin</option>
      </select>

      <button onClick={handleSubmit}>Register</button>
    </div>
    </>
  );
}
