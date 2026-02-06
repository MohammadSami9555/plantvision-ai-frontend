export default function HowItWorks() {
  return (
    <section className="how">
      <h2>How It Works</h2>

      <div className="how-steps">
        <div className="how-card">
          <span className="step-no">01</span>
          <h3>Upload Image</h3>
          <p>
            Upload a clear image of the plant leaf you want to analyze.
          </p>
        </div>

        <div className="how-card">
          <span className="step-no">02</span>
          <h3>AI Analysis</h3>
          <p>
            Our AI system analyzes the image using machine learning.
          </p>
        </div>

        <div className="how-card">
          <span className="step-no">03</span>
          <h3>Get Result</h3>
          <p>
            Instantly get disease name and treatment suggestion.
          </p>
        </div>
      </div>
    </section>
  );
}
