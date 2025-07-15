import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const OfficerList = () => {
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, "users"));
      const data = snap.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((user) => user.role === "officer");
      setOfficers(data);
    };
    fetch();
  }, []);

  const toggleDuty = async (id, current) => {
    await updateDoc(doc(db, "users", id), { onDuty: !current });
    setOfficers((prev) =>
      prev.map((o) => (o.id === id ? { ...o, onDuty: !current } : o))
    );
  };

  return (
    <div>
      <h3>Officer Accounts</h3>
      {officers.map((off, i) => (
        <div key={i} className="card">
          <p>
            👤 {off.name} - 📍 {off.thana} - 📧 {off.email}
          </p>
          <p>
            🆔 Badge: {off.badge} | 🎖️ Rank: {off.rank}
          </p>
          <button onClick={() => toggleDuty(off.id, off.onDuty)}>
            {off.onDuty ? "✅ On Duty" : "❌ Off Duty"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OfficerList;
