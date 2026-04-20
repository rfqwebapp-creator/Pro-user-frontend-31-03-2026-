import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api";

const BuyerRfqEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    heading: "",
    description: "",
  });

  useEffect(() => {
    fetchRFQ();
  }, [id]);

  const fetchRFQ = async () => {
    try {
      const res = await API.get(`/rfq/${id}`);
      console.log("EDIT FETCH RESPONSE:", res.data);

      if (res.data.success) {
        const data = res.data.data;

        setFormData({
          heading: data.heading || "",
          description: data.description || "",
        });
      }
    } catch (error) {
      console.error("FETCH ERROR:", error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/rfq/${id}`, formData);
      alert("RFQ updated successfully");
      navigate(`/buyer/rfq/${id}`);
    } catch (error) {
      console.error("UPDATE ERROR:", error);
      alert("Failed to update RFQ");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow mt-6">
      <h1 className="text-2xl font-bold mb-6">Update RFQ</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Heading</label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate(`/buyer/rfq/${id}`)}
            className="px-5 py-2 rounded-lg border border-gray-300"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-green-700 text-white"
          >
            Update RFQ
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyerRfqEdit;