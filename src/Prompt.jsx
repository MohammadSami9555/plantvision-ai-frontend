import { useState } from "react";

export default function Prompt() {
  const [image, setImage] = useState(null);

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <>
      <h2>Upload Plant Image</h2>
      <input type="file" onChange={handleImage} />

      {image && (
        <img src={image} alt="preview" className="preview" />
      )}
    </>
  );
}
