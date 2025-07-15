import React, { useState } from "react";
import ResultTable from "./ResultTable";
import NotFoundMessage from "./NotFoundMessage";
import demoData from "../../data/demoData";

const MobileSearch = () => {
  const [imei, setImei] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const match = demoData.find((item) => item.imei === imei);
    setResult(match || "not_found");
  };

  return (
    <div className="card">
      <input
        type="text"
        placeholder="IMEI নম্বর দিন"
        value={imei}
        onChange={(e) => setImei(e.target.value)}
      />
      <button onClick={handleSearch}>অনুসন্ধান করুন</button>
      {result && result !== "not_found" && <ResultTable data={result} />}
      {result === "not_found" && <NotFoundMessage />}
    </div>
  );
};

export default MobileSearch;
