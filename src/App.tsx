import { useState } from "react";
import "./App.css";
import CameraPWA from "./pages/Camera.tsx";
import { GalleryAccess } from "./pages/TakeTheGalery.tsx";
import QRScanner from "./pages/QrScanner.tsx";

function App() {
  const [isShowQrCode, setIsShowQrCode] = useState(false);
  // eslint-disable-next-line
  // @ts-ignore
  const [qrCode, setQrCode] = useState("Não foi lido");
  // eslint-disable-next-line
  // @ts-ignore

  return (
    <>
      <GalleryAccess />
      <button onClick={() => setIsShowQrCode(!isShowQrCode)}>
        Mostre QrCode
      </button>
      <h3>QR-CODE : {qrCode}</h3>
      {!isShowQrCode && <CameraPWA />}

      {isShowQrCode && (
        <QRScanner
          // eslint-disable-next-line
          // @ts-ignore
          
          onScan={(result) => {
            // eslint-disable-next-line
            // @ts-ignore

            setQrCode(result[0].rawValue);
          }}
        />
      )}
    </>
  );
}

export default App;
