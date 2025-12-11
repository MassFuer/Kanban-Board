import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className="not-found">
        <h1>Wrong way Man !</h1>
        <button>
          <NavLink to="/">Go Back Home</NavLink>
        </button>
      </div>
    </>
  );
}

export default NotFoundPage;
