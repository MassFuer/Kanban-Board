import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa"; // Font Awesome's GitHub icon
import { FaLinkedin } from "react-icons/fa";

function AboutPage() {
  return (
    <>
      <div className="project">
        <h1>Project Description</h1>
        <p>Super Kanban to manage your tasks</p>
        <p>Team Member :</p>
        <div className="members">
          <div className="profile-links">
            <span>Amrit</span>
            <NavLink to="https://github.com/amritbiswal">
              <FaGithub />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/amritbiswal/">
              <FaLinkedin />
            </NavLink>
          </div>
          <div className="profile-links">
            <span>Maxime</span>
            <NavLink to="https://github.com/MassFuer">
              <FaGithub />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/maximeducamp/">
              <FaLinkedin />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
