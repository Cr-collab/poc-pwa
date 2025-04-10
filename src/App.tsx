import { useState } from "react";
import "./App.css";
import CameraPWA from "./pages/Camera.tsx";
import { GalleryAccess } from "./pages/TakeTheGalery.tsx";
import QRScanner from "./pages/QrScanner.tsx";

function App() {
  const [isShowQrCode, setIsShowQrCode] = useState(false);
  // eslint-disable-next-line
  // @ts-ignore
  // eslint-disable-next-line
  // @ts-ignore

  return (
    <>
      <GalleryAccess />
      <button onClick={() => setIsShowQrCode(!isShowQrCode)}>
        Mostre QrCode
      </button>
      {!isShowQrCode && <CameraPWA />}
      {isShowQrCode && <QRScanner />}
    </>
  );
}

export default App;
