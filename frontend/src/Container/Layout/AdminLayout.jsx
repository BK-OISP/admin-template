import React from "react";
import Navbar from "../Compoment/Navbar/Navbar";
import Sidebar from "../Compoment/Sidebar/Sidebar";

const AdminLayout = (props) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="wrapper">{props.children}</div>
    </>
  );
};
export default AdminLayout;
