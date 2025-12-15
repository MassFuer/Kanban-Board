import TaskCard from "./TaskCard";

function TaskList({ tasks, handleDelete }) {
  const todos = tasks.filter((el) => el.status === "To Do");
  const inProgress = tasks.filter((el) => el.status === "In Progress");
  const inReview = tasks.filter((el) => el.status === "In Review");
  const done = tasks.filter((el) => el.status === "Done");

  return (
    <div className="tasks-list-container">
      <div className="todo">
        <h2>To Do</h2>
        {todos.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </div>

      <div className="in-progress">
        <h2>In Progress</h2>
        {inProgress.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </div>

      <div className="in-review">
        <h2>In review</h2>
        {inReview.length ? (
          inReview.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))
        ) : (
          <h3>Nothing to display</h3>
        )}
      </div>

      <div className="tasks-done">
        <h2>Done</h2>
        {done.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
