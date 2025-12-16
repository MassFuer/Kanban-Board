import TaskCard from "./TaskCard";
import { useState } from "react";

function TaskList({ tasks, handleDelete, handleUpdateStatus, setTasks }) {
  const [draggedTask, setDraggedTask] = useState(null);

  const todos = tasks.filter((el) => el.status === "To Do");
  const inProgress = tasks.filter((el) => el.status === "In Progress");
  const inReview = tasks.filter((el) => el.status === "In Review");
  const done = tasks.filter((el) => el.status === "Done");

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus, targetTask) => {
    e.preventDefault();

    if (!draggedTask) return;

    // If dropping on a specific card
    if (targetTask && targetTask.id !== draggedTask.id) {
      const newTasks = tasks.filter((t) => t.id !== draggedTask.id);
      const targetIndex = newTasks.findIndex((t) => t.id === targetTask.id);

      const updatedTask = { ...draggedTask, status: newStatus };
      newTasks.splice(targetIndex, 0, updatedTask);

      setTasks(newTasks);
    }
    // If dropping on empty column area
    else if (draggedTask.status !== newStatus) {
      handleUpdateStatus(draggedTask.id, newStatus);
    }

    setDraggedTask(null);
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove("drag-over");
  };

  return (
    <div className="tasks-list-container">
      <div
        className="todo"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "To Do")}
        onDragLeave={handleDragLeave}
      >
        <h2>To Do</h2>
        {todos.length ? (
          todos.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
            />
          ))
        ) : (
          <h3>Nothing to display</h3>
        )}
      </div>

      <div
        className="in-progress"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "In Progress")}
        onDragLeave={handleDragLeave}
      >
        <h2>In Progress</h2>
        {inProgress.length ? (
          inProgress.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
            />
          ))
        ) : (
          <h3>Nothing to display</h3>
        )}
      </div>

      <div
        className="in-review"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "In Review")}
        onDragLeave={handleDragLeave}
      >
        <h2>In review</h2>
        {inReview.length ? (
          inReview.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
            />
          ))
        ) : (
          <h3>Nothing to display</h3>
        )}
      </div>

      <div
        className="tasks-done"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "Done")}
        onDragLeave={handleDragLeave}
      >
        <h2>Done</h2>
        {done.length ? (
          done.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
            />
          ))
        ) : (
          <h3>Nothing to display</h3>
        )}
      </div>
    </div>
  );
}

export default TaskList;
