import TaskCard from "./TaskCard";
import { NavLink } from "react-router-dom";

function TaskList({ tasks, handleDelete }) {
  // function handleEdit(taskId) {
  //   return <TaskEdit />;
  // }
  return (
    <div className="task-card-container">
      {tasks.map((task) => (
        <NavLink to={`/task-details/${task.id}`}>
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        </NavLink>
      ))}
    </div>
  );
}

export default TaskList;
