import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <KanbanBoard />
      </main>
      <Footer />
    </>
  );
}

export default App;
