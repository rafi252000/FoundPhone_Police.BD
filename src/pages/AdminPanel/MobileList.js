import React from "react";

const MobileList = ({ data }) => {
  if (!data.length)
    return <p className="not-found">এখনো কোনো তথ্য যুক্ত হয়নি।</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>IMEI</th>
          <th>ব্র্যান্ড</th>
          <th>মডেল</th>
          <th>তারিখ</th>
          <th>থানা</th>
          <th>অবস্থা</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.imei}</td>
            <td>{item.brand}</td>
            <td>{item.model}</td>
            <td>{item.date}</td>
            <td>{item.thana}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MobileList;
