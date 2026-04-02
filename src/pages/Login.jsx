import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; // adjust path if needed
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  
  if (!email || !password) {
    setError("Please enter both email and password");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const res = await API.post("/auth/login", { email, password });
    const data = res.data;

    localStorage.setItem("token", data.token || "true");
    localStorage.setItem("user", JSON.stringify(data.user || data));

    setLoading(false);
    navigate("/buyer/dashboard");

  } catch (error) {
    setLoading(false);
    console.error("Login Error:", error);
    
    if (error.code === 'ERR_NETWORK') {
      setError("Cannot connect to backend. Please check backend URL.");
    } else if (error.response?.status === 401) {
      setError("Invalid email or password ❌");
    } else if (error.response?.status === 404) {
      setError("Backend API not found. Contact support.");
    } else if (error.response?.data?.message) {
      setError(error.response.data.message);
    } else {
      setError("Login failed ❌. " + (error.message || "Unknown error"));
    }
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

      <button
  type="submit"
  disabled={loading}
  className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
>
  {loading ? 'Logging in...' : 'Login'}
</button>

{/* ✅ REGISTER LINK */}
<p className="text-center mt-4 text-sm">
  Don’t have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    className="text-blue-600 cursor-pointer font-semibold hover:underline"
  >
    Register
  </span>
</p>
      </form>
    </div>
  );
}

export default Login;