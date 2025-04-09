// src/components/GalleryAccess.jsx
import { useState, useRef } from 'react';

export function GalleryAccess() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Tenta usar a API moderna primeiro
    if ('showOpenFilePicker' in window) {
      openWithModernAPI();
    } else {
      // Fallback para o método tradicional
      fileInputRef.current.click();
    }
  };

  const openWithModernAPI = async () => {
    try {
      const handles = await window.showOpenFilePicker({
        types: [{
          description: 'Images',
          accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] }
        }],
        multiple: false
      });
      const file = await handles[0].getFile();
      displayImage(file);
    } catch (error) {
      // Se o usuário cancelar ou API falhar, usa fallback
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) displayImage(file);
  };

  const displayImage = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    // Limpar o input para permitir selecionar o mesmo arquivo novamente
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button 
        onClick={handleButtonClick}
        style={{
          padding: '12px 24px',
          backgroundColor: '#4285f4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Acessar Galeria
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={selectedImage}
            alt="Imagem selecionada"
            style={{
              maxWidth: '100%',
              maxHeight: '300px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Remover Imagem
          </button>
        </div>
      )}
    </div>
  );
}