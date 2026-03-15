import "../styles/Button.css";

export default function BottomNavButton({ label, to }) {
  return (
    <div className="bottom-button-container">
      <button
        className="bottom-nav-button"
        onClick={() => (window.location.href = to)}
      >
        {label}
      </button>
    </div>
  );
}
