import { MdOutlineEdit } from "react-icons/md";
import { IoExpandOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function TaskCard({ task, handleDelete, handleDragStart, handleDrop }) {
  const onDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
    if (handleDragStart) {
      handleDragStart(task);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Calculate if cursor is in top or bottom half of card
    const rect = e.currentTarget.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    const isBottomHalf = e.clientY > midpoint;

    // Store position info for the drop handler
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.dataset.dropPosition = isBottomHalf ? 'after' : 'before';
  };

  const onDrop = (e) => {
    e.stopPropagation();
    if (handleDrop) {
      const dropPosition = e.currentTarget.dataset.dropPosition || 'before';
      handleDrop(e, task.status, task, dropPosition);
    }
  };

  return (
    <>
      <div
        className="task-card"
        data-priority={task.priority}
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <div className="task-card-header">
          <h2>{task.title}</h2>
          <div className="task-card-actions">
            {/* edit button */}
            <NavLink to={`/edit-task/${task.id}`}>
              <button className="edit">
                <MdOutlineEdit />
              </button>
            </NavLink>

            {/* expand button */}
            <NavLink to={`/task-details/${task.id}`}>
              <button className="toggle">
                <IoExpandOutline />
              </button>
            </NavLink>
          </div>
        </div>
        <p className="description">
          <strong>Description: </strong>
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
