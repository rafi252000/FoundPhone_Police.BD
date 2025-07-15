import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const PendingList = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, "mobiles"));
      const data = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((d) => d.review === "pending");
      setMobiles(data);
    };
    fetch();
  }, []);

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "mobiles", id), { review: status });
    setMobiles((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div>
      {mobiles.map((m, i) => (
        <div key={i} className="card">
          <p>📱 IMEI: {m.imei}</p>
          <p>🗒️ বিবরণ: {m.description}</p>
          <p>📍 অবস্থান: {m.location}</p>
          <button onClick={() => updateStatus(m.id, "approved")}>
            ✔️ অনুমোদন
          </button>
          <button onClick={() => updateStatus(m.id, "rejected")}>
            ❌ বাতিল
          </button>
        </div>
      ))}
    </div>
  );
};

export default PendingList;
