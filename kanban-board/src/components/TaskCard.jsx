import { MdOutlineEdit } from "react-icons/md";
import { IoExpandOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function TaskCard({ task, handleDelete }) {
  return (
    <>
      <div className="task-card">
        <h2>{task.title}</h2>
        {/* edit button */}
        <NavLink to={`/task-details/${task.id}`}>
          <button className="edit">
            <MdOutlineEdit />
          </button>
        </NavLink>

        {/* expand button */}
        <button className="toggle">
          <IoExpandOutline />
        </button>

        <p>
          <strong>Description:</strong>
          {task.description}
        </p>
        <p>
          <strong>Assign to: </strong>
          {task.assignee}
        </p>
        <div className="task-status">
          <p>
            <strong>Status:</strong> {task.status}
          </p>
          <p>
            <strong>Priority:</strong> {task.priority}
          </p>
        </div>
        <div className="task-dates">
          <p>
            <strong>Created date:</strong>

            <br />
            {task.createdDate}
          </p>
          <p>
            <strong>Due date:</strong>
            <br />
            {task.dueDate}
          </p>
        </div>
        <button onClick={() => handleDelete(task.id)} className="delete">
          Delete
        </button>
      </div>
    </>
  );
}

export default TaskCard;
