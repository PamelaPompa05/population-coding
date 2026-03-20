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

        <h2 className="column-header">Human Visual Pathway</h2>
          
          <p> 
            <strong>Step 1: </strong> Light rays with wavelengths of 400-450 nm and 635-700 nm activate photopsins in cone photoreceptors. 
          </p>

        <img
          src="/images/HVP_1.jpg"
          alt="Human Visual Pathway 1"
          className="comparison-image"
        />

        <p>
          <strong>Step 2: </strong> Cyanolabe photopsins (blue color pigment) in S-cones are highly activated, followed by erythrolabe photopsins (red color pigment) in L-cone photoreceptors. While M-cones are very weakly activated. 
        </p>

        <img
          src="/images/HVP_2.jpg"
          alt="Human Visual Pathway 2"
          className="comparison-image"
        />

          <p>
            <strong>Step 3: </strong> The pigments undergo conformational changes and initiate a signalling cascade that hyperpolarizes the cone photoreceptors, reducing the amount of neurotransmitters (glutamate) from being released. 
          </p>

          <img
            src="/images/HVP_3.jpg"
            alt="Human Visual Pathway 3"
            className="comparison-image"
          />

          <p>
            <strong>Step 4: </strong> Specific bipolar cells, such as S-cone bipolar cells and diffuse bipolar cells, depolarize and release glutamate neurotransmitters.
          </p>

          <img
            src="/images/HVP_4.jpg"
            alt="Human Visual Pathway 4"
            className="comparison-image"
          />

          <p>
            <strong>Step 5: </strong> Glutamate is received by ganglion cells, which causes them to generate an action potential. Ganglion cells in the “Blue-Yellow” group fire intensely for “Blue”, while the “Red-Green” group fires slightly for “Red”.
          </p>

          <img
            src="/images/HVP_5.jpg"
            alt="Human Visual Pathway 5"
            className="comparison-image"
          />

          <p>
            <strong>Step 6: </strong> The action potential created by the ganglion cells becomes electrical signals traveling from the optic nerve to the primary visual cortex found in the occipital lobe for perception.
          </p>

          <img
            src="/images/HVP_6.jpg"
            alt="Human Visual Pathway 6"
            className="comparison-image"
          />
      </div>
    </div>
  );
}