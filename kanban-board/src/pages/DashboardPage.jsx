import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";
import CreateTask from "../components/CreateTask";

function DashboardPage({ tasks, handleDelete, handleAddTask }) {
  return (
    <>
      <div className="tasks-container">
        <CreateTask handleAddTask={handleAddTask} />
        {/* TaskList (all tasks) / TaskCard
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo
          colummn In progress : get all TaskCard in the TaskList that have the status ToDo
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo */}

        <TaskList tasks={tasks} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default DashboardPage;
