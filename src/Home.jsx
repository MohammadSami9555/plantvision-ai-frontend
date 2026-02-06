export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Identify Plant Diseases <br />
          <span>Using AI</span>
        </h1>

        <p>
          Upload a plant leaf image and get instant disease detection
          using AI-powered analysis.
        </p>

        <a href="#upload" className="hero-btn">
          Detect Disease →
        </a>
      </div>

      <div className="hero-image">
        <img
          src="/hero-plant.jpg"
          alt="Plant Disease Detection"
        />
      </div>
    </div>
  );
}
