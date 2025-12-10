import { useState } from "react";
import tasksData from "../data/kanban.json";
import TaskCard from "./TaskCard";

function TaskList() {
  const [tasks, setTasks] = useState(tasksData);

  function handleDelete(taskId) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }
  function handleEdit(taskId) {
    return <TaskEdit />;
  }
  return (
    <div className="task-card-container">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
