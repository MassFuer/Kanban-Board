import TaskCard from "./TaskCard";

function TaskList({ tasks, handleDelete, updateTaskStatus }) {
  // drag and drop
  const handleDrop = (e, status) => {
    const taskId = e.dataTransfer.getData("taskId");
    updateTaskStatus(taskId, status);
  };

  const allowDrop = (e) => e.preventDefault();

  const todos = tasks.filter((el) => el.status === "To Do");
  const inProgress = tasks.filter((el) => el.status === "In Progress");
  const inReview = tasks.filter((el) => el.status === "In Review");
  const done = tasks.filter((el) => el.status === "Done");

  return (
    <div className="tasks-list-container">
      <div
        className="todo"
        onDragOver={allowDrop}
        onDrop={(e) => handleDrop(e, "To Do")}
      >
        <h2>To Do</h2>
        {todos.length ? (
          todos.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))
        ) : (
          <h3>Nothing to display</h3>
        )}
      </div>

      <div
        className="in-progress"
        onDragOver={allowDrop}
        onDrop={(e) => handleDrop(e, "In Progress")}
      >
        <h2>In Progress</h2>
        {inProgress.length ? (
          inProgress.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))
        ) : (
          <h3>Nothing to display</h3>
        )}
      </div>

      <div
        className="in-review"
        onDragOver={allowDrop}
        onDrop={(e) => handleDrop(e, "In Review")}
      >
        <h2>In review</h2>
        {inReview.length ? (
          inReview.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))
        ) : (
          <h3>Nothing to display</h3>
        )}
      </div>

      <div
        className="tasks-done"
        onDragOver={allowDrop}
        onDrop={(e) => handleDrop(e, "Done")}
      >
        <h2>Done</h2>
        {done.length ? (
          done.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))
        ) : (
          <h3>Nothing to display</h3>
        )}
      </div>
    </div>
  );
}

export default TaskList;
