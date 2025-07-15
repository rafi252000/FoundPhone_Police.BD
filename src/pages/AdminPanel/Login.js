import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // ✅ লগইন সফল → ড্যাশবোর্ডে পাঠাও
      navigate("/admin/dashboard");
    } catch (err) {
      setError("ইমেইল বা পাসওয়ার্ড ভুল হয়েছে");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card card">
        <h2>🔐 অ্যাডমিন লগইন</h2>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="ইমেইল"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="পাসওয়ার্ড"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">লগইন</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
