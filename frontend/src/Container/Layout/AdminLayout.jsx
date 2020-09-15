import React, { useCallback, useState } from "react";
import Navbar from "../Compoment/Navbar/Navbar";
import Sidebar from "../Compoment/Sidebar/Sidebar";

const AdminLayout = (props) => {
  const [isOpenSidebar, SetIsOpenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    SetIsOpenSidebar((pre) => !pre);
  }, []);
  return (
    <>
      <div
        className={`overlay-scrollbar ${
          isOpenSidebar ? "sidebar-expand" : "sidebar-close"
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar />
        <div className="wrapper">{props.children}</div>
      </div>
    </>
  );
};
export default AdminLayout;
