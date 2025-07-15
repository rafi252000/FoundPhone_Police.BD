import React from "react";

const ResultTable = ({ data }) => {
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
        <tr>
          <td>{data.imei}</td>
          <td>{data.brand}</td>
          <td>{data.model}</td>
          <td>{data.date}</td>
          <td>{data.thana}</td>
          <td>{data.status}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
