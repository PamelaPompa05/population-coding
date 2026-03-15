import "../styles/Button.css";

export default function ModeButton({ label, onClick }) {
  return (
    <div className="bottom-button-container">
      <button className="bottom-nav-button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
