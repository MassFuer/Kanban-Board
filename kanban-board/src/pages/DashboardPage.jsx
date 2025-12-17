import TaskList from "../components/TaskList";
import CreateTask from "../components/CreateTask";

function DashboardPage({
  tasks,
  handleDelete,
  handleAddTask,
  handleDragStart,
  handleDrop,
}) {
  return (
    <>
      <div className="tasks-container">
        <CreateTask handleAddTask={handleAddTask} />
        {/* TaskList (all tasks) / TaskCard
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo
          colummn In progress : get all TaskCard in the TaskList that have the status In Progress
          colummn In Review : get all TaskCard in the TaskList that have the status In Review
          colummn Done : get all TaskCard in the TaskList that have the status Done */}

        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
        />
      </div>
    </>
  );
}

export default DashboardPage;
