// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import DashboardPage from "./pages/DashboardPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import tasksData from "./data/kanban.json";
import EditTaskPage from "./pages/EditTaskPage";
import { useNavigate } from "react-router-dom";
import CreateTask from "./components/CreateTask";

function App() {
  // This allows use to navigate without clicking
  const nav = useNavigate();
  const [tasks, setTasks] = useState(tasksData);
  function handleDelete(taskId) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }

  function handleAddTask(newTask) {
    return setTasks([newTask, ...tasks]);
  }

  function handleEditTask(updatedTask) {
    const updatedTaskArray = tasks.map((task) => {
      if (task.id == updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    // this take us to the nav url defined above
    nav("/");
    return setTasks(updatedTaskArray);
  }

  const handleUpdateStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                tasks={tasks}
                handleDelete={handleDelete}
                handleAddTask={handleAddTask}
                handleUpdateStatus={handleUpdateStatus}
                setTasks={setTasks}
              />
            }
          />
          <Route
            path="/task-details/:taskId"
            element={
              <TaskDetailPage tasks={tasks} handleDelete={handleDelete} />
            }
          />
          <Route
            path="/edit-task/:taskId"
            element={
              <EditTaskPage tasks={tasks} handleEditTask={handleEditTask} />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<CreateTask />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
