import React from "react";
import MobileForm from "./MobileForm";
import PendingList from "./PendingList";
import OfficerForm from "./OfficerForm";
import OfficerList from "./OfficerList";
import MobileStats from "./MobileStats";

const AdminDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🛡️ Admin Dashboard</h2>

      <section style={{ marginBottom: "30px" }}>
        <h3>📊 মোবাইল পরিসংখ্যান</h3>
        <MobileStats />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3>👮 অফিসার অ্যাকাউন্ট তৈরি করুন</h3>
        <OfficerForm />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3>📋 সকল অফিসারের তালিকা</h3>
        <OfficerList />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3>📱 মোবাইল তথ্য এন্ট্রি (অফিসার কর্তৃক)</h3>
        <MobileForm />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3>🕵️ অনুমোদনের অপেক্ষায় থাকা তথ্য</h3>
        <PendingList />
      </section>
    </div>
  );
};

export default AdminDashboard;
