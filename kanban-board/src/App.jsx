// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import DashboardPage from "./pages/DashboardPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import tasksData from "./data/kanban.json";

function App() {
  const [tasks, setTasks] = useState(tasksData);
  function handleDelete(taskId) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }

  function handleEdit(taskId) {
    return;
  }
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage tasks={tasks} handleDelete={handleDelete} />
            }
          />
          <Route
            path="/task-details/:taskId"
            element={
              <TaskDetailPage
                tasks={tasks}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
