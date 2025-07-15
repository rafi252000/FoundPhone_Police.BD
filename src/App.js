// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MobileSearch from "./pages/UserPanel/MobileSearch";
// import AdminDashboard from "./pages/AdminPanel/AdminDashboard";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <h1>📱 মোবাইল ট্র্যাকিং সিস্টেম</h1>
//         <Routes>
//           <Route path="" element={<MobileSearch />} />
//           <Route path="/admin" element={<AdminDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/AdminPanel/Login";
import AdminDashboard from "./pages/AdminPanel/AdminDashboard";
import MobileSearch from "./pages/UserPanel/MobileSearch";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>📱 মোবাইল ট্র্যাকিং সিস্টেম</h1>
        <Routes>
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="" element={<MobileSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
