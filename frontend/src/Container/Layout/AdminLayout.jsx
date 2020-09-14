import React from "react";
import Navbar from "../Compoment/Navbar/Navbar";

const AdminLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="sidebar"></div>
      <div className="wrapper">{props.children}</div>
    </>
  );
};
export default AdminLayout;
