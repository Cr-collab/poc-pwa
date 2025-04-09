import { useState } from "react";
import "./App.css";
import CameraPWA from "./pages/Camera.tsx";
import Html5QrcodePlugin from "./pages/QrScanner.tsx";
import { GalleryAccess } from "./pages/TakeTheGalery.tsx";

function App() {
  const [isShowQrCode, setIsShowQrCode] = useState(false);
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
      {isShowQrCode && <Html5QrcodePlugin />}
    </>
  );
}

export default App;
