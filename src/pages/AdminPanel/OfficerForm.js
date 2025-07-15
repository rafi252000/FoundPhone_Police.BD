import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const OfficerForm = () => {
  const [officer, setOfficer] = useState({
    name: "",
    email: "",
    badge: "",
    rank: "",
    thana: "",
    role: "officer",
    onDuty: false,
  });

  const handleChange = (e) => {
    setOfficer({ ...officer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "users"), officer);
    alert("অফিসার সফলভাবে যুক্ত হয়েছে");
    setOfficer({
      name: "",
      email: "",
      badge: "",
      rank: "",
      thana: "",
      role: "officer",
      onDuty: false,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={officer.name}
        onChange={handleChange}
        placeholder="নাম"
        required
      />
      <input
        name="email"
        value={officer.email}
        onChange={handleChange}
        placeholder="ইমেইল"
        required
      />
      <input
        name="badge"
        value={officer.badge}
        onChange={handleChange}
        placeholder="ব্যাজ নাম্বার"
        required
      />
      <input
        name="rank"
        value={officer.rank}
        onChange={handleChange}
        placeholder="পদবি"
        required
      />
      <input
        name="thana"
        value={officer.thana}
        onChange={handleChange}
        placeholder="থানা"
        required
      />
      <button type="submit">অফিসার সংরক্ষণ করুন</button>
    </form>
  );
};

export default OfficerForm;
