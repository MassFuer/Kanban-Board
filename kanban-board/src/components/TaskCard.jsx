import { MdOutlineEdit } from "react-icons/md";
import { IoExpandOutline } from "react-icons/io5";

function TaskCard({ task, handleDelete, handleEdit }) {
  return (
    <>
      <div className="task-card">
        <h2>{task.title}</h2>
        {/* edit button */}
        <button onClick={() => handleEdit(task.id)} className="edit">
          <MdOutlineEdit />
        </button>
        {/* expand button */}
        <button className="toggle">
          <IoExpandOutline />
        </button>

        <textarea type="text" value={task.description} disabled />
        <p>Assign to: {task.assignee}</p>
        <div className="task-status">
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
        </div>
        <div className="task-dates">
          <p>
            Created date:
            <br />
            {task.createdDate}
          </p>
          <p>
            Due date:
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
