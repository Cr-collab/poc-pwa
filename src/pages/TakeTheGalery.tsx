// src/components/GalleryAccess.jsx
import { useState, useRef } from "react";

export function GalleryAccess() {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  // eslint-disable-next-line
  // @ts-ignore
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => {
      // eslint-disable-next-line
      // @ts-ignore
      URL.createObjectURL(file);
    });
    // eslint-disable-next-line
    // @ts-ignore
    setImages(imageUrls);
  };

  const openFilePicker = () => {
    // eslint-disable-next-line
    // @ts-ignore
    fileInputRef.current.click();
  };

  return (
    <div>
      <button onClick={openFilePicker}>Selecionar Imagens</button>
      <input
        type="file"
        ref={fileInputRef}
        multiple
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 10 }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index}`}
            style={{ width: 100, height: 100, margin: 5 }}
          />
        ))}
      </div>
    </div>
  );
}
