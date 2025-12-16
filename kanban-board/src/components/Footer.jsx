import { FaGithub } from "react-icons/fa"; // Font Awesome's GitHub icon
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="info">
        <h4>KanbanCorp</h4>
        <p>123 street abc</p>
        <Link to="/">Find us on Gmaps</Link>
      </div>

      <div className="github">
        <a href="https://github.com/MassFuer/Kanban-Board">
          <FaGithub /> Go to Repo
        </a>
      </div>
    </footer>
  );
}

export default Footer;
