import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">Sidebar</div>
      <Link to="/form">Add a task</Link>
    </>
  );
}

export default Sidebar;
