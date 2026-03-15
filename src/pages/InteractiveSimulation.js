import "../styles/InteractiveSimulation.css"
import Simulation from "../components/Simulation";
import BottomNavButton from "../components/BottomNavButton";

export default function InteractiveSimulation() {
  return (
    <div className = "simulation-container">
      <h1 className="simulation-title">Population Coding Simulation</h1>

      <Simulation />
      

      <BottomNavButton 
        label="A Guide for Population Coding"
        to="/"
      />
  
    </div>
  );
}