import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/KanbanBoard";
import KanbanBoard from "./components/KanbanBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <KanbanBoard />
      <Footer />
    </>
  );
}

export default App;
