import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

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

  if (error.response) {
    if (error.response.status === 401) {
      setError("Invalid email or password ❌");
    } else {
      setError(error.response.data?.message || "Login failed ❌");
    }
  } else if (error.request) {
    setError("Server not responding properly ❌");
  } else {
    setError(error.message || "Something went wrong ❌");
  }
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F5F2EA" }}>
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-opacity-10"
        style={{ borderColor: "#43624A" }}
      >
        <div className="flex justify-center mb-6">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
            style={{ backgroundColor: "#43624A" }}
          >
            P
          </div>
        </div>

        <h2 className="text-3xl font-extrabold mb-2 text-center" style={{ color: "#2A2A2A" }}>
          Welcome Back
        </h2>
        <p className="text-center mb-8 text-sm opacity-70" style={{ color: "#2A2A2A" }}>
          Please enter your details to sign in
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r shadow-sm">
            {error}
          </div>
        )}

        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1" style={{ color: "#43624A" }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 transition-all"
              style={{ 
                borderColor: "#7A9C83", 
                "--tw-ring-color": "#43624A" 
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1 ml-1" style={{ color: "#43624A" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 transition-all"
              style={{ 
                borderColor: "#7A9C83", 
                "--tw-ring-color": "#43624A" 
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
<div className="flex justify-end mt-2">
  <span
    onClick={() => navigate("/forgot-password")}
    className="text-sm cursor-pointer hover:underline"
    style={{ color: "#7A9C83" }}
  >
    Forgot Password?
  </span>
</div>
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-8 text-white py-3 rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#43624A" }}
        >
          {loading ? 'Authenticating...' : 'Sign In'}
        </button>

        <p className="text-center mt-8 text-sm" style={{ color: "#2A2A2A" }}>
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer font-bold transition-colors hover:opacity-70"
            style={{ color: "#7A9C83" }}
          >
            Create account
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
