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

        <h2 className="home-question">What is a biological neuron?</h2>

        <p>
          Biological neurons are messengers of information in biological systems. In general, they consist of a cell body, a group of dendrites, an axon, and an axon terminal. 
          Neurons send signals to one another using either rapid electrical impulses called action potentials along their axons, or chemical neurotransmitters
          across synapses.
        </p>

          <img
          src="../images/NNB_1.jpg"
          alt="Brain Neuron Diagram"
          className="text-image"
          />


        <p>
          A neuron sending a message (referred to as a presynaptic neuron) does so via its axon termial, while a receiving neuron (a postsynaptic neuron) receives input messages from other neurons through its dendrites. 
          In other words, a presynaptic neuron's axon terminal forms a connection with a postsynaptic neuron's dendrites.
          The cell body integrates the input message; if the input message's electrical impulse meets a certain threshold, the receiving neuron sends its own message down its' axon by utilizing action potentials.
          Action potential propagates to the axon terminal, causing it to release chemicals known as neurotransmitters (e.g. GABA and Glutamate) to the next neuron.
          When neurotransmitters bind to the next neuron, the next neuron opens its channels to receive input messages, such as sodium ions. 
      </p>

        <img
          src="../images/NNB_2.jpg"
          alt="Brain Neuron Diagram V2"
          className="text-image"
        />

         <h2 className="home-question">Neurons Working Together</h2>

        <p>Neurons send information across different parts of the brain and throughout the body, but no single neuron can handle this process all alone.</p>
        
          <br></br>

        <p>
          Each neuron receives signals from many other neurons through its dendrites and sends signals onward through its axon. 
          These branching connections link thousands of neurons together, forming the large‑scale networks that allow the brain to process information.
          This forms what is known as a biologal neural network.
        </p>
        
        <br></br>
        <p>For example, we will explore how the Visual Cortex works in the brain.</p>

        <br></br>
        <p>
          Each neuron has a preferred stimulus e.g. Neurons in the visual cortex may have different preferred orientations of a line (reffered to as a stimulus).  
          One neuron may prefer a line to be oriented at 45 deg, while another may prefer reacting to a line to be oriented at 90 deg (as shown in fig A).
          When a person sees a line in a specific orientation, neurons that prefer that orientation fire more frequently (referred to as their response).
        </p>

        <img
          src="../images/NNB_3.jpg"
          alt="Line Orientation Graph"
          className="text-image"
        />

        <p>
          Assuming that a line oriented at 90 degrees is shown to a person, we may expect to see:
        </p>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
              <th style={{ paddingRight: "10px" }}>Neuron Preference</th>
              <th style={{ paddingLeft: "10px" }}>Firing Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>90°</td>
                <td>High</td>
              </tr>
              <tr>
                <td>40°</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>0°</td>
                <td>Low or None</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br></br>

      <p>
        Together, these responses form a pattern across the entire group of neurons. It is this neural network working together that tells the brain what orientation is being seen, 
        not a neuron on its own.
      </p>

      <h2 className="home-question">Color Reception From Your Eyes to Your Brain! </h2>
      <p>
        We can explore how the brain represents color using groups of neurons!
        In the brain, color reception begins when light reaches the photoreceptor cells in your retina. This light acts as the stimulus, which triggers chemical and electrical proccesses in the rods and 
        cones and the retinal cells that they connect to. These cells are organized into layers, each responsible for a different part of the visual processing pathway.
        For example, the first layer contains the three types of cone photoreceptors: S-cones, M-cones, and L-cones, which all respond to different ranges of light wavelengths. Depending on the 
        wavelength that enters the eye, one type of cone will fire more strongly than the others while another may be less active.
      </p>

      <br></br>

      <p>For instance, S‑cones respond most to short wavelengths and are associated with blue light, peaking around 420–440 nm. M‑cones respond to medium wavelengths, corresponding to green light, 
      with peak sensitivity around 530–534 nm. L‑cones respond to long wavelengths, associated with red light, and peak around 560–564 nm.
      </p>

      <img
          src="../images/NNB_4.jpg"
          alt="Wavelength Color"
          className="text-image"
      />

      <p>
        After the cones convert light into electrical signals, this information travels through the retinal circuit (photoreceptor cells → bipolar cells → ganglion cells) and into the brain via the 
        optic nerve. The visual cortex then interprets these signals, allowing us to perceive color.
      </p>

      <img
          src="../images/NNB_5.jpg"
          alt="Wavelength Color"
          className="text-image"
      />

      <h2 className="home-question">How the Brain Represents Color</h2>

      <p>
        Focusing on cones for our purposes, the first layer of processing involves the cone photoreceptors, which support high‑acuity color vision in bright light. Each cone type contains a different visual 
        pigment: erythrolabe in L‑cones, chlorolabe in M‑cones, and cyanolabe in S‑cones, allowing them to respond differently to various wavelengths of light. The pattern and strength of activity across 
        these three cone types form the basis of how color is represented.
      </p>

      <br></br>

      <p>
        In the next layer, cones connect to both ON and OFF bipolar cells. These parallel pathways help the visual system distinguish increases and decreases in light, contributing to how color and contrast are encoded.
      </p>

      <br></br>

      <p>
        Finally, ganglion cells receive this processed information and send it through the optic nerve to the lateral geniculate nucleus (LGN) of the thalamus. From there, signals travel to the visual 
        cortex, where areas such as V4 perform higher‑level color processing.
      </p>

      </Section>


      <Section>
        <h3 className="home-subtitle">Neural Networks in Code</h3>
         <p>
          Neural networks in code are computer models that take inspiration from how neurons in the brain work together. Instead of being
          electrical-chemical processes in biological tissue, these are processes represented by math and functions. In this setting, a neural
          network is made up of many simple units, often called artificial neurons or perceptrons.
        </p>
        <br></br>
        <p>
          These artificial neurons play a similar role to biological neurons but in a much more simplified way. These neural networks typically consist of one or more 
          integers as inputs (x<sub>i</sub>), integer “weights” (w<sub>i</sub>) to be multiplied with their corresponding input, and an integer referred to as the “bias”.
          This bias is added to the final sum of adding all the products x<sub>i</sub>*w<sub>i</sub>
        </p>
          
        <p>
          i.e <i> x<sub>1</sub>*w<sub>1</sub> + x<sub>2</sub>*w<sub>2</sub> + bias. </i>
        </p>

          <br></br>

        <p>
          This result is passed through what is known as an “activation function” that decides how strongly that neuron “fires,” resulting in a new output number “z.” For example, 
          given a perceptron activation function, if your <i>z</i> is a positive number, your final output would always equal 1; otherwise it equals 0. 
          Different activation functions can be utilized based on your type of neural network model such that it showcases the type of behavior you want to depict.
          These functions let the neuron detect basic patterns like whether a weighted combination of inputs is above or below the function's threshold. 
        </p>

          <img
          src="../images/NNC_1.jpg"
          alt="Artificial network diagram"
          className="text-image"
          />

        <p>
          We could start to detect more complex patterns if we integrate these networks as different layers in one combined network. In other words, the output of one layer is used as the input to the next layer.
          Every neuron within these layers will continue to have its own corresponding weight. The first layer is known as the input layer, the last layer as the output layer, and all 
          the layers in between are known as “hidden layers.” These types of networks can be reffered to as “Deep Neural Networks.”
        </p>


          <img
          src="../images/NNC_2.jpg"
          alt="DNN diagram"
          className="text-image"
          />

        <p>
        When we begin to put these units together through connections of multiple neural layers, we create a network that can learn from examples instead of having every situation or scenario hand‑coded.
        For example, if we trained a model via a Supervised Learning method, the network sees many input–output pairs, compares its predictions to the correct answers, and slightly adjusts the weights on its 
        connections to reduce the error over time. As this process repeats, the network improves its predictions, thus providing more useful feedback about the input.
        </p>

        <br></br>

        <p>
          Thus, when we connect many of these units into layers, we get an artificial neural network that can learn to map inputs to outputs in a way that loosely mirrors 
          biologal systems. For example, as discussed earlier, the brain does not have a single neuron to represent color; large population of neurons respond to 
          different wavelenghths, and the pattern across the whole group represents the perceived color. In code, we can achieve a similar idea by feeding pixel values
          into a network and letting the layers transform those numbers into meaningful features. The input layer receives raw data (such as RGB values), hidden layers 
          learn to detect useful patterns, and the output layer produces a final prediction. While the underlying mechanisms differ, both biological and computational 
          systems rely on combining many simple signals to represent complex information.
        </p>

      </Section>

      <Section>
        <h3 className="home-subtitle">Population Coding</h3>

        <h2 className="home-question">What is Population Coding?</h2>

        <p>Throughout the examples above (orientation tuning in V1, cone responses to color, and how neurons in artifical networks work together), you may have noticed a theme:
            <br></br><br></br>
            <span style={{ color: "#b57bff", fontWeight: "600" }}>no single neuron carries the whole message on its own.</span>
            <br></br><br></br>
            Instead, information is represented by the pattern of activity across many neurons.
            This principle is called 
             <span style={{ color: "#b57bff", fontWeight: "600" }}> population coding</span>; 
             information is represented by the combined activity of many neurons working as a network, with
             each neuron contributing its own response to help form the final interpretation.  For example, when neurons that prefer reddish
            wavelengths and neurons that prefer bluish wavelengths are both active, the brain interprets that combined pattern as the color purple.
        </p>

        <h2 className="home-question">Guided Demonstration</h2>

        <br></br>

        <p>Given that we've explored how population coding works in both computers and humans, we can observe the principle in Convolutional Neural Networks and in the Human Visual Pathway!</p>
        
        <br></br>

        <p>The situation that we are focusing on is how the color
           <span style={{ color: "#b57bff", fontWeight: "600" }}> purple </span>
           is labeled and perceived in its respective networks.
        </p>

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