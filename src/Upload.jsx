export default function Upload() {
  return (
    <section className="upload upload-layout" id="upload">
      
      {/* LEFT CONTENT */}
      <div className="upload-text">
        <h2>Upload Plant Image</h2>

        <p>
          Upload a clear photo of the plant leaf to detect possible diseases
          using AI-powered analysis.
        </p>

        <input type="file" accept="image/*" />
      </div>

      {/* RIGHT IMAGE */}
      <div className="upload-image">
        <img
          src="/upload-preview.jpg"
          alt="Plant preview"
        />
      </div>

    </section>
  );
}
