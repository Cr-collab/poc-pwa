import { useState } from "react";
import "./App.css";
import CameraPWA from "./pages/Camera.tsx";
import { Test } from "./pages/QrScanner.tsx";
import { GalleryAccess } from "./pages/TakeTheGalery.tsx";

function App() {
  const [isShowQrCode, setIsShowQrCode] = useState(false); 
  return (
    <>
      <GalleryAccess />
      <button onClick={() => setIsShowQrCode(!isShowQrCode)}> Mostre QrCode</button>
      {!isShowQrCode && <CameraPWA />}
      {isShowQrCode && <Test />}
    </>
  );
}

export default App;
