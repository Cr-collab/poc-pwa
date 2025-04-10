// src/components/GalleryAccess.jsx
import { useState, useRef } from "react";

export function GalleryAccess() {
  // eslint-disable-next-line
  // @ts-ignore
  const processImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        // eslint-disable-next-line
        // @ts-ignore
        img.src = event.target.result;
        img.onload = () => {
          // Criar um canvas para redimensionamento
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Definir tamanho máximo para evitar imagens grandes
          const maxWidth = 800;
          const maxHeight = 800;
          let { width, height } = img;

          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width *= ratio;
            height *= ratio;
          }

          canvas.width = width;
          canvas.height = height;
          // eslint-disable-next-line
          // @ts-ignore
          ctx.drawImage(img, 0, 0, width, height);

          // Converter para JPEG para garantir compatibilidade
          resolve(canvas.toDataURL("image/jpeg", 0.8));
        };
      };
    });
  };
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  // eslint-disable-next-line
  // @ts-ignore
  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    const processedImages = await Promise.all(files.map(processImage));
    // eslint-disable-next-line
    // @ts-ignore
    setImages(processedImages);
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
