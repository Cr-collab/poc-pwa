import { Scanner } from "@yudiel/react-qr-scanner";

// eslint-disable-next-line
// @ts-ignore
const QRScanner = ({ onScan }) => {
  return (
    <div>
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
    </div>
  );
};

export default QRScanner;
