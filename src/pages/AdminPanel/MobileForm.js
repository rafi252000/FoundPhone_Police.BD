import React, { useState } from "react";

const MobileForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    imei: "",
    brand: "",
    model: "",
    date: "",
    thana: "",
    status: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      imei: "",
      brand: "",
      model: "",
      date: "",
      thana: "",
      status: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="imei"
        placeholder="IMEI নম্বর"
        value={form.imei}
        onChange={handleChange}
        required
      />
      <input
        name="brand"
        placeholder="ব্র্যান্ড"
        value={form.brand}
        onChange={handleChange}
        required
      />
      <input
        name="model"
        placeholder="মডেল"
        value={form.model}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
        name="thana"
        placeholder="থানা"
        value={form.thana}
        onChange={handleChange}
        required
      />
      <input
        name="status"
        placeholder="অবস্থা"
        value={form.status}
        onChange={handleChange}
        required
      />
      <button type="submit">তথ্য যুক্ত করুন</button>
    </form>
  );
};

export default MobileForm;
