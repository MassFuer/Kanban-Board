import TaskCard from "./TaskCard";

function TaskList({ tasks, handleDelete }) {
  // function handleEdit(taskId) {
  //   return <TaskEdit />;
  // }
  return (
    <div className="tasks-list-container">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
