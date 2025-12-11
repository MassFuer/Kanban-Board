import Sidebar from "../components/Sidebar";
import KanbanBoard from "../components/KanbanBoard";
import TaskList from "../components/TaskList";

function DashboardPage({ tasks, handleDelete }) {
  return (
    <>
      <Sidebar />
      <KanbanBoard />
      {/* TaskList (all tasks) / TaskCard
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo
          colummn In progress : get all TaskCard in the TaskList that have the status ToDo
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo */}

      <TaskList tasks={tasks} handleDelete={handleDelete} />
    </>
  );
}

export default DashboardPage;
