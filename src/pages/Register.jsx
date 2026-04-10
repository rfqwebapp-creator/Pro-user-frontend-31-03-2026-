import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Register() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const [form, setForm] = useState({
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    industry: "",
    workNumber: "",
    gst: "",
    companyName: "",
    referralCode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Invalid email format ❌");
      return;
    }

    // ✅ Password match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    // ✅ Strong password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(form.password)) {
      setError(
        "Password must be strong (8+, uppercase, lowercase, number, special char)"
      );
      return;
    }

    try {
      setLoading(true);
      const res = await API.post(
  "/auth/register",
  JSON.stringify(form),
  {
    headers: {
      "Content-Type": "application/json"
    }
  }
);

      if (res.status === 200 || res.status === 201) {
        setSuccess("Registered Successfully ✅ Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      console.error("Registration Error:", error);

      if (error.code === 'ERR_NETWORK') {
        setError("Cannot connect to backend. Please check backend URL.");
      } else if (error.response?.status === 400) {
        setError(error.response?.data?.message || "Email already registered or validation failed");
      } else if (error.response?.status === 404) {
        setError("Backend API not found. Contact support.");
      } else if (error.response?.data) {
        setError(error.response.data.message || error.response.data);
      } else {
        setError("Registration failed ❌. " + (error.message || "Unknown error"));
      }
    }
    setLoading(false);
  };

  // Custom Earthy Styles
  const styles = {
    container: "min-h-screen flex justify-center items-center p-6",
    card: "w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden border border-[#7A9C83]/20",
    header: "bg-[#43624A] p-8 text-[#F5F2EA]",
    input: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A9C83] focus:border-[#43624A] outline-none transition-all bg-[#F5F2EA]/30",
    label: "block text-sm font-semibold text-[#2A2A2A] mb-1",
    button: "w-full bg-[#43624A] text-[#F5F2EA] py-3 rounded-lg font-bold hover:bg-[#2A2A2A] transition-colors shadow-md",
  };

  return (
    <div className={styles.container} style={{ backgroundColor: "#F5F2EA" }}>
      <div className={styles.card}>
        
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className="text-3xl font-bold">Create your account</h2>
          <p className="opacity-90 mt-2">
            Join the Procural network and streamline your supply chain.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {/* Status Messages */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}
          {success && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <p className="text-green-700 text-sm">{success}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Personal Details Section */}
            <div className="space-y-4">
              <h3 className="text-[#43624A] font-bold border-b border-[#7A9C83] pb-2 uppercase text-xs tracking-wider">Personal Information</h3>
              
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className={styles.label}>First Name</label>
                  <input type="text" name="firstName" placeholder="John" onChange={handleChange} className={styles.input} />
                </div>
                <div className="w-1/2">
                  <label className={styles.label}>Last Name</label>
                  <input type="text" name="lastName" placeholder="Doe" onChange={handleChange} className={styles.input} />
                </div>
              </div>

              <div>
                <label className={styles.label}>Work Email</label>
                <input type="email" name="email" placeholder="email@company.com" onChange={handleChange} className={styles.input} />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className={styles.label}>Password</label>
                  <input type="password" name="password" placeholder="••••••••" onChange={handleChange} className={styles.input} />
                </div>
                <div className="w-1/2">
                  <label className={styles.label}>Confirm Password</label>
                  <input type="password" name="confirmPassword" placeholder="••••••••" onChange={handleChange} className={styles.input} />
                </div>
              </div>

              <div>
                <label className={styles.label}>Phone Number</label>
                <input type="text" name="phone" placeholder="+1..." onChange={handleChange} className={styles.input} />
              </div>
            </div>

            {/* Business Details Section */}
            <div className="space-y-4">
              <h3 className="text-[#43624A] font-bold border-b border-[#7A9C83] pb-2 uppercase text-xs tracking-wider">Business Information</h3>
              
              <div>
                <label className={styles.label}>Country</label>
                <select name="country" onChange={handleChange} className={styles.input}>
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>UAE</option>
                </select>
              </div>

              <div>
                <label className={styles.label}>Company Name</label>
                <input type="text" name="companyName" placeholder="Acme Corp" onChange={handleChange} className={styles.input} />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className={styles.label}>GST Number</label>
                  <input type="text" name="gst" placeholder="GSTIN..." onChange={handleChange} className={styles.input} />
                </div>
                <div className="w-1/2">
                  <label className={styles.label}>Industry</label>
                  <input type="text" name="industry" placeholder="Logistics" onChange={handleChange} className={styles.input} />
                </div>
              </div>

          <div className="flex gap-4">
  <div className="w-1/2">
    <label className={styles.label}>Work Number</label>
    <input
      type="text"
      name="workNumber"
      placeholder="Ext..."
      onChange={handleChange}
      className={styles.input}
    />
  </div>

  <div className="w-1/2">
    <label className={styles.label}>Referral Code</label>
    <input
      type="text"
      name="referralCode"
      placeholder="Optional"
      onChange={handleChange}
      className={styles.input}
    />
  </div>
</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center mb-6">
              <input type="checkbox" required className="w-4 h-4 text-[#43624A] border-gray-300 rounded focus:ring-[#7A9C83]" />
              <span className="ml-3 text-sm text-gray-600">
                I accept the <a href="#" className="text-[#43624A] underline font-medium">Terms and Conditions</a> and Privacy Policy.
              </span>
            </div>

            <button type="submit" disabled={loading} className={styles.button + (loading ? ' opacity-50 cursor-not-allowed' : '')}>
              {loading ? 'Registering...' : 'Complete Registration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;