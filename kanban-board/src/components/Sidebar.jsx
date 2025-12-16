import { useState } from "react";
import { Link } from "react-router-dom";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <button className="collapse-button" onClick={toggleSidebar}>
          {isCollapsed ? (
            <TbLayoutSidebarRightCollapseFilled />
          ) : (
            <TbLayoutSidebarLeftCollapseFilled />
          )}
        </button>
        <Link to="/form">Add a task</Link>
        <Link to="/about">About us</Link>
      </div>
    </>
  );
}

export default Sidebar;