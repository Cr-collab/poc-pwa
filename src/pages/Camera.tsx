import React, { useRef, useState } from "react";
import { toast } from "react-toastify"; // Opcional para feedback

const CameraPWA = () => {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [isIos, setIsIos] = useState(false);

  // Detecta se é iOS
  React.useEffect(() => {
    setIsIos(/iPad|iPhone|iPod/.test(navigator.userAgent));
  }, []);

  // Inicia a câmera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment", // Câmera traseira
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });
      if (videoRef.current) {
        // eslint-disable-next-line
        // @ts-ignore
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Erro na câmera:", err);
      toast.error(
        isIos
          ? "No iOS, instale este PWA para acessar a câmera!"
          : "Permissão da câmera negada"
      );
    }
  };

  // Tira a foto
  const takePhoto = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    // eslint-disable-next-line
    // @ts-ignore
    canvas.width = videoRef.current.videoWidth;
    // eslint-disable-next-line
    // @ts-ignore
    canvas.height = videoRef.current.videoHeight;
    // eslint-disable-next-line
    // @ts-ignore
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

    const photoUrl = canvas.toDataURL("image/jpeg");
    // eslint-disable-next-line
    // @ts-ignore
    setPhoto(photoUrl);
  };

  // Para a câmera
  const stopCamera = () => {
    // eslint-disable-next-line
    // @ts-ignore
    if (videoRef.current?.srcObject) {
      // eslint-disable-next-line
      // @ts-ignore
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
  };

  React.useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Câmera PWA</h2>

      {/* Aviso para iOS */}
      {isIos && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          📱 Instale este PWA para melhor funcionamento no iOS!
        </div>
      )}

      {/* Visualização da Câmera */}
      <video
        ref={videoRef}
        autoPlay
        playsInline // ESSENCIAL para iOS
        muted
        style={{
          width: "100%",
          maxWidth: "500px",
          border: "2px solid #333",
          marginBottom: "10px",
        }}
      />

      {/* Botões de Controle */}
      <div style={{ margin: "10px 0" }}>
        <button
          onClick={takePhoto}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Tirar Foto
        </button>
        <button
          onClick={stopCamera}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Parar Câmera
        </button>
      </div>

      {/* Pré-visualização da Foto */}
      {photo && (
        <div>
          <h3>Sua Foto:</h3>
          <img
            src={photo}
            alt="Captura"
            style={{
              maxWidth: "100%",
              border: "1px solid #ddd",
              marginTop: "10px",
            }}
          />
          <button onClick={() => setPhoto(null)} style={{ marginTop: "10px" }}>
            Tirar Outra Foto
          </button>
        </div>
      )}
    </div>
  );
};

export default CameraPWA;
