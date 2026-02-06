export default function About() {
  return (
    <div className="about">
      <h2 className="about-title">About the Project</h2>

      <p className="about-desc">
        <strong>PlantVision AI</strong> is an AI-based system designed to
        detect plant diseases by analyzing leaf images.
        <br /><br />
        The system uses <span>Computer Vision</span> and
        <span> Convolutional Neural Networks (CNN)</span> to provide accurate
        disease identification under real-world conditions.
      </p>

      <div className="about-cards">
        <div className="about-card">
          🌿
          <h4>Image-Based Detection</h4>
          <p>
            Upload a clear image of a plant leaf to identify potential diseases
            quickly and efficiently.
          </p>
        </div>

        <div className="about-card">
          🤖
          <h4>AI-Powered Analysis</h4>
          <p>
            Advanced deep learning models analyze the image to deliver reliable
            and accurate results.
          </p>
        </div>

        <div className="about-card">
          ⚡
          <h4>Fast & Accurate Results</h4>
          <p>
            Get instant disease predictions along with confidence scores and
            recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
