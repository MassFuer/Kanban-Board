import { NavLink } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <div className="project">
        <h1>Project Description</h1>
        <p>Team Member:</p>
        <div className="members">
          <div className="profile-links">
            <span>Amrit</span>
            <NavLink to="">Link to Github</NavLink>
            <NavLink to="">Link to LinkedIn</NavLink>
          </div>
          <div className="profile-links">
            <span>Maxime</span>
            <NavLink to="">Link to Github</NavLink>
            <NavLink to="">Link to LinkedIn</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
