import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api";

const BuyerRfqEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    procurementType: "",
    requisitionType: "",
    bidType: "",
    purpose: "",
    evaluationMethod: "",
    classification: "",
    publishDate: "",
    closingDate: "",
    selectedIndustry: "",
    selectedSubItems: [],
    items: [],
    itemDescriptionNote: "",
    documents: [],
    deliveryTime: "",
    paymentTerms: "",
    supplierOption: "",
    searchSupplierText: "",
    inviteEmails: [],
    rfxVisibility: "",
  });

  useEffect(() => {
    fetchRFQ();
  }, [id]);

  const fetchRFQ = async () => {
    try {
      const res = await API.get(`/rfq/${id}`);
      if (res.data.success) {
        const data = res.data.data;

        setFormData({
          heading: data.heading || "",
          description: data.description || "",
          procurementType: data.procurement_type || "",
          requisitionType: data.requisition_type || "",
          bidType: data.bid_type || "",
          purpose: data.purpose || "",
          evaluationMethod: data.evaluation_method || "",
          classification: data.classification || "",
          publishDate: data.publish_date ? data.publish_date.slice(0, 16) : "",
          closingDate: data.closing_date ? data.closing_date.slice(0, 16) : "",
          selectedIndustry: data.selected_industry || "",
          selectedSubItems: data.selectedSubItems || [],
          items: data.items || [],
          itemDescriptionNote: data.item_description_note || "",
          documents: data.documents || [],
          deliveryTime: data.delivery_time || "",
          paymentTerms: data.payment_terms || "",
          supplierOption: data.supplier_option || "",
          searchSupplierText: data.search_supplier_text || "",
          inviteEmails: data.inviteEmails || [],
          rfxVisibility: data.rfx_visibility || "",
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="heading"
        value={formData.heading}
        onChange={handleChange}
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">Update RFQ</button>
    </form>
  );
};

export default BuyerRfqEdit;