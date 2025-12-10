import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <KanbanBoard />
        {/* TaskList (all tasks) / TaskCard
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo
          colummn In progress : get all TaskCard in the TaskList that have the status ToDo
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo
          colummn Todo : get all TaskCard in the TaskList that have the status ToDo */}

        <TaskList />
      </main>
      <Footer />
    </>
  );
}

export default App;
