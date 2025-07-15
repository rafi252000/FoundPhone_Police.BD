import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const MobileStats = () => {
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const snap = await getDocs(collection(db, "mobiles"));
      const docs = snap.docs.map((doc) => doc.data());
      const total = docs.length;
      const approved = docs.filter((d) => d.review === "approved").length;
      const pending = docs.filter((d) => d.review === "pending").length;
      const rejected = total - approved - pending;
      setStats({ total, approved, pending, rejected });
    };
    fetchStats();
  }, []);

  return (
    <div className="card">
      <p>🔢 মোট মোবাইল তথ্য: {stats.total}</p>
      <p>✔️ এপ্রুভড: {stats.approved}</p>
      <p>⏳ পেন্ডিং: {stats.pending}</p>
      <p>❌ রিজেক্টেড: {stats.rejected}</p>
    </div>
  );
};

export default MobileStats;
