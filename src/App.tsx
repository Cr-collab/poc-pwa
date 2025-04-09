import { useState } from "react";
import "./App.css";
import CameraPWA from "./pages/Camera.tsx";
import Html5QrcodePlugin from "./pages/QrScanner.tsx";
import { GalleryAccess } from "./pages/TakeTheGalery.tsx";

function App() {
  const [isShowQrCode, setIsShowQrCode] = useState(false);
  const [qrCode, setQrCode] = useState('Não foi lido');
    // eslint-disable-next-line
    // @ts-ignore
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("🚀 ~ onNewScanResult ~ decodedResult:", decodedResult)
    console.log("🚀 ~ onNewScanResult ~ decodedText:", decodedText)
    setQrCode(decodedResult)
    // handle decoded results here
};

  return (
    <>
      <GalleryAccess />
      <button onClick={() => setIsShowQrCode(!isShowQrCode)}>
        Mostre QrCode
      </button>
      <h3>QR-CODE : {qrCode}</h3>
      {!isShowQrCode && <CameraPWA />}
      {isShowQrCode && (
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      )}
    </>
  );
}

export default App;
