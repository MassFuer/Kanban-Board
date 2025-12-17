import { useParams } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskCard from "../components/TaskCard";

function TaskDetailPage({ tasks, handleDelete, handleEdit }) {
  const { taskId } = useParams();
  //   console.log(typeof taskId);
  const task = tasks.find((task) => task.id == taskId);
  //   console.log("task.id", typeof task.id);

  return (
    <>
      <div className="task-detail-page">
        <TaskCard
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}
export default TaskDetailPage;
