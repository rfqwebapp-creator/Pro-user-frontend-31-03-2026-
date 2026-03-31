import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data);
    } else {
      // ✅ store login
      localStorage.setItem("token", "true");

      // optional: store user
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/buyer/dashboard");
    }
  } catch (error) {
    console.error(error);
    alert("Server error ❌");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      <button
  type="submit"
  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
>
  Login
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