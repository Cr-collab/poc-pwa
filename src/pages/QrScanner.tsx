import { Scanner } from "@yudiel/react-qr-scanner";
import { useLayoutEffect, useState } from "react";
    // eslint-disable-next-line
    // @ts-ignore
const QRScanner = ({ onScan }) => {
  const [scanning, setScanning] = useState(true);


  useLayoutEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }, // Usa a câmera traseira
    });
  }, []);

  return (
    <div>
      {scanning && (
        <>
          <Scanner
            onScan={onScan}
          />
        </>
      )}
      <button onClick={() => setScanning(true)}>Iniciar Scanner</button>
    </div>
  );
};

export default QRScanner;
