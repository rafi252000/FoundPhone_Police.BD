import React, { useState } from "react";
import MobileForm from "./MobileForm";
import MobileList from "./MobileList";

const AdminDashboard = () => {
  const [mobiles, setMobiles] = useState([]);

  const handleAddMobile = (mobile) => {
    setMobiles([mobile, ...mobiles]);
  };

  return (
    <div className="card">
      <MobileForm onAdd={handleAddMobile} />
      <MobileList data={mobiles} />
    </div>
  );
};

export default AdminDashboard;
