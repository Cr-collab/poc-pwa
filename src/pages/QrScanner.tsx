import { useState, useEffect } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

const QRReader = () => {
  const [result, setResult] = useState([]);
  const [hasPermission, setHasPermission] = useState(false);
  const [isIos, setIsIos] = useState(false);

  // Detecta se é iOS
  useEffect(() => {
    setIsIos(/iPad|iPhone|iPod/.test(navigator.userAgent));
  }, []);

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true 
      });
      // Câmera liberada!
      return stream;
      setHasPermission(true);
    } catch (error) {
      console.error("Permissão negada:", error);
      setHasPermission(false)
      alert("Por favor, permita o acesso à câmera nas configurações do navegador.");
    }
  }

  // Verifica permissão de câmera
  useEffect(() => {
    requestCameraPermission()
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Leitor de QR Code</h2>

      {/* Aviso para iOS */}
      {isIos && (
        <div style={{ color: "red", marginBottom: "15px" }}>
          📱 <strong>Importante:</strong> No iOS, instale este PWA para a câmera
          funcionar!
        </div>
      )}

      {/* Mensagem de permissão */}
      {hasPermission === false && (
        <div style={{ color: "red", margin: "20px 0" }}>
          Permissão da câmera negada. Por favor, habilite nas configurações.
        </div>
      )}

      {/* Leitor QR Code */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
          border: "2px solid #333",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
       
        {hasPermission && <Scanner onScan={(result) => {setResult(result)}} />}
      </div>

      {/* Resultado */}
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "blue",
          borderRadius: "8px",
          wordBreak: "break-word",
        }}
      >
        <strong>Conteúdo:</strong> {result?.[0]?.["rawValue"]}
      </div>

      {/* Dicas para iOS */}
      {isIos && hasPermission && (
        <div style={{ marginTop: "20px", color: "#555" }}>
          <p>Dica: Mantenha o QR Code dentro da área destacada</p>
        </div>
      )}
    </div>
  );
};

export default QRReader;
