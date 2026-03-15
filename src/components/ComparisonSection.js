import "../styles/ComparisonSection.css";

export default function ComparisonSection() {
  return (
    <div className="comparison-grid">
      {/* LEFT COLUMN — Artificial Neurons */}
      <div className="comparison-column">
        <img
          src="/images/temp_image.jpg"
          alt="Artificial neuron diagram"
          className="comparison-image"
        />
        <p className="comparison-caption">
          Placeholder caption for artificial neurons. Replace with real text later.
        </p>
      </div>

      {/* RIGHT COLUMN — Biological Neurons */}
      <div className="comparison-column">
        <img
          src="/images/temp_image.jpg"
          alt="Biological neuron diagram"
          className="comparison-image"
        />
        <p className="comparison-caption">
          Placeholder caption for biological neurons. Replace with real text later.
        </p>
      </div>
    </div>
  );
}