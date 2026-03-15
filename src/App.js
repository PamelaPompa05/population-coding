import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import InteractiveSimulation from "./pages/InteractiveSimulation";
import './App.css';

const App = () => {
  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interactive-simulation" element={<InteractiveSimulation />} />
      </Routes>
    </div>
  );
};

export default App;