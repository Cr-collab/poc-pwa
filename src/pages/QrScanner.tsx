import { Scanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";

const QRScanner = ({ onScan }) => {
  const [scanning, setScanning] = useState(true);

  const handleScan = (data) => {
    if (data) {
      setScanning(false);
      onScan(data.text || data); // Algumas versões retornam um objeto, outras apenas o texto
    }
  };

  const handleError = (err) => {
    console.error("Erro no scanner:", err);
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }, // Usa a câmera traseira
    });
  }, []);

  return (
    <div>
      {scanning && (
        <>
          <Scanner
            onScan={handleScan}
          />
        </>
      )}
      <button onClick={() => setScanning(true)}>Iniciar Scanner</button>
    </div>
  );
};

export default QRScanner;
