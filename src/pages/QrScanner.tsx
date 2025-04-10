import { Scanner } from "@yudiel/react-qr-scanner";

// eslint-disable-next-line
// @ts-ignore
const QRScanner = ({ onScan }) => {

  return (
    <div>
      {scanning && (
        <>
          <Scanner
            onScan={onScan}
            constraints={{
              facingMode: "environment",
              width: { ideal: 1280 },
              height: { ideal: 720 },
            }}
          />
        </>
      )}
      <button onClick={() => setScanning(true)}>Iniciar Scanner</button>
    </div>
  );
};

export default QRScanner;
