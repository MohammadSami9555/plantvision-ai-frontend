export default function Analysis() {
  return (
    <section className="analysis" id="analysis">
      <h2>Analysis Result</h2>

      <div className="result-card">
        <h3>Disease Detected</h3>
        <p className="disease-name">Leaf Spot Disease</p>

        <div className="confidence">
          <span>Confidence</span>
          <strong>92%</strong>
        </div>

        <div className="recommendation">
          <h4>Recommended Action</h4>
          <ul>
            <li>Remove infected leaves</li>
            <li>Use appropriate fungicide</li>
            <li>Avoid over-watering</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
