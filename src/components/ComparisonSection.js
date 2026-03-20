import "../styles/ComparisonSection.css";

export default function ComparisonSection() {
  return (
    <div className="comparison-grid">
      {/* LEFT COLUMN — Artificial Neurons */}
      <div className="comparison-column">
  
        <h2 className="column-header">Convolutional Neural Network</h2>

        <p><strong>Step 1:</strong> Input: RGB channels with weights of R = 128, G = 0, B = 255</p>

        <img
          src="/images/CNN_1.jpg"
          alt="Convoluaton Neural Network 1"
          className="comparison-image"
        />

        <p><strong>Step 2:</strong> Decompose the input into channels: High values in the Blue (B) channel, low values in the Red (R) channel, and none in the Green (G) channel. </p>

        <img
          src="/images/CNN_2.jpg"
          alt="Convoluaton Neural Network 2"
          className="comparison-image"
        />

        <p><strong>Step 3:</strong> Activation function (ReLU) decides which “neurons” in the first layer of the network should fire based on the input’s intensity value. </p>

        <img
          src="/images/CNN_3.jpg"
          alt="Convoluaton Neural Network 3"
          className="comparison-image"
        />

        <p><strong>Step 4:</strong> A convolutional layer, consisting of small filters, slides across the input channels, looking for blue or red intensities and passing the weight sum to the next layer. </p>

        <img
          src="/images/CNN_4.jpg"
          alt="Convoluaton Neural Network 4"
          className="comparison-image"
        />

        <p><strong>Step 5:</strong> The weighted sum from the previous layer is taken and turned into directional “opponent” signals seen in feature maps. Simultaneous high output in the 
        “Blue-detecting” feature map and a moderate output in the “Red-detecting” feature map encode for the color purple. </p>

        <img
          src="/images/CNN_5.jpg"
          alt="Convoluaton Neural Network 5"
          className="comparison-image"
        />

        <p><strong>Step 6:</strong> The last few layers integrate the distributed population codes into a single vector and allow for the RGB channels to be labelled/identified as the color purple! </p>

        <img
          src="/images/CNN_6.jpg"
          alt="Convoluaton Neural Network 6"
          className="comparison-image"
        />

      </div>



      {/* RIGHT COLUMN — Biological Neurons */}
      <div className="comparison-column">

        <h2 className="column-header">Human Visual Pathway</h2>

          
          <p> 
            <strong>Step 1: </strong> Light rays with wavelengths of 400-450 nm and 635-700 nm activate photopsins in cone photoreceptors. 
          </p>

        <br></br>
        <br></br>
        <br></br>

        <img
          src="/images/HVP_1.jpg"
          alt="Human Visual Pathway 1"
          className="comparison-image"
        />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <p>
          <strong>Step 2: </strong> Cyanolabe photopsins (blue color pigment) in S-cones are highly activated, followed by erythrolabe photopsins (red color pigment) in L-cone photoreceptors. While M-cones are very weakly activated. 
        </p>

        <br></br>

        <img
          src="/images/HVP_2.jpg"
          alt="Human Visual Pathway 2"
          className="comparison-image"
        />

        <br></br>
        <br></br>

          <p>
            <strong>Step 3: </strong> The pigments undergo conformational changes and initiate a signalling cascade that hyperpolarizes the cone photoreceptors, reducing the amount of neurotransmitters (glutamate) from being released. 
          </p>

          <br></br>
          <br></br>
          <br></br>

          <img
            src="/images/HVP_3.jpg"
            alt="Human Visual Pathway 3"
            className="comparison-image"
          />

          <br></br>
          <br></br>
          <br></br>

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