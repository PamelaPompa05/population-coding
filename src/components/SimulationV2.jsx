import { useState, useMemo, useRef, useEffect } from "react";
import ModeButton from "../components/ModeButton";

export default function PopulationCodingNetwork() {
  const [mode, setMode] = useState("manual");

  // Stimulus values
  const [hue, setHue] = useState(0);
  const [sat, setSat] = useState(100);

  // Decoded values
  const [decodedHue, setDecodedHue] = useState(0);
  const [decodedSat, setDecodedSat] = useState(100);

  // Image mode summary
  const [finalStats, setFinalStats] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const canvasRef = useRef(null);
  const pixelRef = useRef([]); // now stores {h, s}
  const frameIndexRef = useRef(0);

  // -----------------------------
  // Preferred values
  // -----------------------------
  const preferredHues = Array.from({ length: 12 }, (_, i) => i * 30);
  const preferredSats = [0, 20, 40, 60, 80, 100];

  const sigmaHue = 40;
  const sigmaSat = 18;

  function circularDistance(a, b) {
    let d = Math.abs(a - b) % 360;
    return d > 180 ? 360 - d : d;
  }

  // -----------------------------
  // Hue neuron responses
  // -----------------------------
  const hueNeurons = useMemo(() => {
    return preferredHues.map(mu => {
      const d = circularDistance(hue, mu);
      const r = Math.exp(-(d ** 2) / (2 * sigmaHue ** 2));
      return { mu, r };
    });
  }, [hue]);

  // -----------------------------
  // Saturation neuron responses
  // -----------------------------
  const satNeurons = useMemo(() => {
    return preferredSats.map(mu => {
      const d = Math.abs(sat - mu);
      const r = Math.exp(-(d ** 2) / (2 * sigmaSat ** 2));
      return { mu, r };
    });
  }, [sat]);

  // -----------------------------
  // Decode hue (population vector)
  // -----------------------------
  useEffect(() => {
    let X = 0, Y = 0;
    hueNeurons.forEach(n => {
      const rad = (n.mu * Math.PI) / 180;
      X += n.r * Math.cos(rad);
      Y += n.r * Math.sin(rad);
    });
    let angle = Math.atan2(Y, X) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    setDecodedHue(angle);
  }, [hueNeurons]);

  // -----------------------------
  // Decode saturation (weighted average)
  // -----------------------------
  useEffect(() => {
    let num = 0, den = 0;
    satNeurons.forEach(n => {
      num += n.r * n.mu;
      den += n.r;
    });
    setDecodedSat(den === 0 ? 0 : num / den);
  }, [satNeurons]);

  // -----------------------------
  // RGB → HSL (we only need h + s)
  // -----------------------------
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = d / (1 - Math.abs(2 * l - 1));
      switch (max) {
        case r: h = ((g - b) / d) % 6; break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h *= 60;
      if (h < 0) h += 360;
    }
    return { h, s: s * 100 };
  }

  // -----------------------------
  // Upload handler
  // -----------------------------
  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setFinalStats(null);
    setIsScanning(true);

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const data = ctx.getImageData(0, 0, img.width, img.height).data;

      const pixels = [];
      const targetSamples = 400;
      const step = Math.max(
        1,
        Math.floor(Math.sqrt((img.width * img.height) / targetSamples))
      );

      for (let y = 0; y < img.height; y += step) {
        for (let x = 0; x < img.width; x += step) {
          const idx = (y * img.width + x) * 4;
          const { h, s } = rgbToHsl(data[idx], data[idx + 1], data[idx + 2]);
          pixels.push({ h, s });
        }
      }

      pixelRef.current = pixels;
      frameIndexRef.current = 0;
      animatePixels();
    };
  }

  // -----------------------------
  // Animation loop
  // -----------------------------
  function animatePixels() {
    const pixels = pixelRef.current;
    if (pixels.length === 0) {
      setIsScanning(false);
      return;
    }

    const i = frameIndexRef.current;
    setHue(pixels[i].h);
    setSat(pixels[i].s);

    frameIndexRef.current++;

    if (frameIndexRef.current < pixels.length) {
      setTimeout(animatePixels, 15);
    } else {
      computeFinalStats();
      setIsScanning(false);
    }
  }

  // -----------------------------
  // Compute image summary
  // -----------------------------
  function computeFinalStats() {
  const pixels = pixelRef.current;

  // --- circular mean for hue ---
  let X = 0, Y = 0;
  pixels.forEach(p => {
    const rad = (p.h * Math.PI) / 180;
    X += Math.cos(rad);
    Y += Math.sin(rad);
  });
  let avgHue = Math.atan2(Y, X) * (180 / Math.PI);
  if (avgHue < 0) avgHue += 360;

  // --- linear mean for saturation (this is fine) ---
  const avgSat = pixels.reduce((a, p) => a + p.s, 0) / pixels.length;

  // Dominant hue via hue neurons (unchanged)
  const hueHist = Array(preferredHues.length).fill(0);
  pixels.forEach(p => {
    preferredHues.forEach((mu, i) => {
      const d = circularDistance(p.h, mu);
      hueHist[i] += Math.exp(-(d ** 2) / (2 * sigmaHue ** 2));
    });
  });
  const dominantHue = preferredHues[hueHist.indexOf(Math.max(...hueHist))];

  // Dominant saturation via sat neurons (unchanged)
  const satHist = Array(preferredSats.length).fill(0);
  pixels.forEach(p => {
    preferredSats.forEach((mu, i) => {
      const d = Math.abs(p.s - mu);
      satHist[i] += Math.exp(-(d ** 2) / (2 * sigmaSat ** 2));
    });
  });
  const dominantSat = preferredSats[satHist.indexOf(Math.max(...satHist))];

  setFinalStats({ avgHue, avgSat, dominantHue, dominantSat });
}


  // Reset when switching to manual
  function switchToManual() {
    setMode("manual");
    setFinalStats(null);
    setHue(0);
    setSat(100);
  }

  // -----------------------------
  // SVG layout
  // -----------------------------
  const centerX = 200;
  const centerY = 200;

  const hueRadius = 140;
  const satRadius = 190;   // OUTSIDE ring
  const satRotation = 15;  // R3 rotation

  return (
    <div style={{ marginTop: "20px", marginBottom: "40px", textAlign: "center" }}>

      {/* Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <ModeButton label="Manual Mode" onClick={switchToManual} />
        <ModeButton label="Image Mode" onClick={() => setMode("image")} />
      </div>

      {/* Explanatory text */}
      {mode === "manual" && (
        <p style={{ marginTop: "10px", opacity: 0.8 }}>
          Drag the sliders to see how the two neural populations encode color through population coding.
        </p>
      )}

      {mode === "image" && (
        <p style={{ marginTop: "10px", opacity: 0.8 }}>
          Upload an image to see how the two neural populations sample pixels and decode the average and dominant hue and saturation.
        </p>
      )}

      {/* Manual sliders */}
      {mode === "manual" && (
        <>
          <h3>Stimulus Hue: {Math.round(hue)}°</h3>

          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={e => setHue(Number(e.target.value))}
              style={{
                width: "60%",
                maxWidth: "800px",
                marginBottom: "20px"
              }}
            />
          </div>

          <h3>Stimulus Saturation: {Math.round(sat)}%</h3>

          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <input
              type="range"
              min="0"
              max="100"
              value={sat}
              onChange={e => setSat(Number(e.target.value))}
              style={{
                width: "60%",
                maxWidth: "800px",
                marginBottom: "20px"
              }}
            />
          </div>
        </>
      )}

      {/* Image upload */}
      {mode === "image" && (
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <label
            htmlFor="file-upload"
            style={{
              display: "inline-block",
              padding: "8px 18px",
              backgroundColor: "#D66BFF",
              color: "#0a063d",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 600,
              boxShadow: "0 0 10px rgba(214,107,255,0.4)",
              fontSize: "0.9rem"
            }}
          >
            Choose Image
          </label>

          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleUpload}
            style={{ display: "none" }}
          />

          <canvas ref={canvasRef} style={{ display: "none" }} />

          {isScanning && <h3 style={{ marginTop: "10px" }}>Scanning image…</h3>}
        </div>
      )}

      {/* SVG Network */}
      <div style={{ display: "flex", justifyContent: "center", overflow: "visible" }}>
        <svg
          width="500"
          height="520"
          viewBox="-40 -40 480 500"
          style={{ pointerEvents: "none" }}
        >
          {/* Center stimulus */}
          <circle
            cx={centerX}
            cy={centerY}
            r={18}
            fill={`hsl(${hue}, ${sat}%, 50%)`}
            style={{ filter: "drop-shadow(0 0 6px white)", transition: "0.2s" }}
          />

          {/* Hue neurons */}
          {hueNeurons.map((n, i) => {
            const angle = (n.mu - 90) * (Math.PI / 180);
            const nx = centerX + hueRadius * Math.cos(angle);
            const ny = centerY + hueRadius * Math.sin(angle);

            return (
              <g key={"h" + i}>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={nx}
                  y2={ny}
                  stroke={`hsl(${n.mu}, 100%, 60%)`}
                  strokeWidth={1 + n.r * 4}
                  strokeOpacity={0.6 + n.r * 0.4}
                  style={{ transition: "0.2s" }}
                />
                <circle
                  cx={nx}
                  cy={ny}
                  r={10 + n.r * 12}
                  fill={`hsl(${n.mu}, 100%, 50%)`}
                  opacity={0.7 + n.r * 0.3}
                  style={{
                    filter: `drop-shadow(0 0 ${10 + n.r * 20}px hsl(${n.mu}, 100%, 60%))`,
                    transition: "0.2s"
                  }}
                />
              </g>
            );
          })}

          {/* Saturation neurons (outer ring) */}
          {satNeurons.map((n, i) => {
            const angle = ((n.mu * 3) + satRotation - 90) * (Math.PI / 180);
            const nx = centerX + satRadius * Math.cos(angle);
            const ny = centerY + satRadius * Math.sin(angle);

            return (
              <circle
                key={"s" + i}
                cx={nx}
                cy={ny}
                r={6 + n.r * 10}
                fill={`hsl(${hue}, ${n.mu}%, 50%)`}
                style={{
                  filter: `drop-shadow(0 0 ${6 + n.r * 18}px hsl(${hue}, ${n.mu}%, 60%))`,
                  transition: "0.2s"
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* Decoded color */}
      <h3>Decoded Color</h3>
      <div
        style={{
          width: "70px",
          height: "70px",
          background: `hsl(${decodedHue}, ${decodedSat}%, 40%)`,
          borderRadius: "10px",
          margin: "auto",
          boxShadow: "0 0 12px rgba(255,255,255,0.3)",
          transition: "0.2s"
        }}
      />

      {/* Image summary */}
      {mode === "image" && finalStats && (
        <div style={{ marginTop: "20px" }}>
          <h3>Image Summary</h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              marginLeft: "20px"
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p>Average Hue</p>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: `hsl(${finalStats.avgHue}, 100%, 40%)`,
                  borderRadius: "10px",
                  marginLeft: "20px",
                  boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <p>Average Saturation</p>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: `hsl(${decodedHue}, ${finalStats.avgSat}%, 40%)`,
                  borderRadius: "10px",
                  marginLeft: "43px",
                  boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <p>Dominant Hue</p>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: `hsl(${finalStats.dominantHue}, 100%, 40%)`,
                  borderRadius: "10px",
                  marginLeft: "23px",
                  boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <p>Dominant Saturation</p>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: `hsl(${decodedHue}, ${finalStats.dominantSat}%, 40%)`,
                  borderRadius: "10px",
                  marginLeft: "45px",
                  boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


