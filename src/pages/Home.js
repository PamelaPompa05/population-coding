import "../styles/Home.css"
import Section from "../components/Section";
import ComparisonSection from "../components/ComparisonSection";
import BottomNavButton from "../components/BottomNavButton";

export default function Home() {
  return (
    <div className = "home-container">
      <h1 className="home-title">A Guide for Population Coding</h1>

      <Section>
        <h3 className="home-subtitle">Neural Networks in the Brain</h3>
        <p>Team text goes here...</p>
      </Section>

      <Section>
        <h3 className="home-subtitle">Neural Networks in Code</h3>
        <p>Team text goes here...</p>
      </Section>

      <Section>
        <h3 className="home-subtitle">Population Coding</h3>
        <p>Team text goes here...</p>
      </Section>

      <Section>
        <ComparisonSection />
      </Section>

      <BottomNavButton 
        label="Try the Interactive Simulation"
        to="/interactive-simulation"
      />
  
    </div>
  );
}