import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src={logoImg} alt="logo" />
        </NavLink>
      </div>
      <div className="title">
        <p>Super Kanban</p>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
