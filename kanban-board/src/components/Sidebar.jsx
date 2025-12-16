import { Link } from "react-router-dom";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <button className="collapse-button">
          <TbLayoutSidebarLeftCollapseFilled />
        </button>
        <Link to="/form">Add a task</Link>
        <Link to="/about">About us</Link>
      </div>
    </>
  );
}

export default Sidebar;
