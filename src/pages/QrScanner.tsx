import { Scanner } from "@yudiel/react-qr-scanner";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
// eslint-disable-next-line
// @ts-ignore
const QRScanner = ({ onScan }) => {
  const [scanning, setScanning] = useState(true);
  const videoRef = useRef(null);

  const [isIos, setIsIos] = useState(false);

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

  const stopCamera = () => {
    // eslint-disable-next-line
    // @ts-ignore
    if (videoRef.current?.srcObject) {
      // eslint-disable-next-line
      // @ts-ignore
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    setIsIos(/iPad|iPhone|iPod/.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  return (
    <div>
      {scanning && (
        <>
          <Scanner onScan={onScan} />
        </>
      )}
      <button onClick={() => setScanning(true)}>Iniciar Scanner</button>
    </div>
  );
};

export default QRScanner;
