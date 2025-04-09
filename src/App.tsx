import { useEffect, useState } from "react";
import "./App.css";
import CameraPWA from "./pages/Camera.tsx";
import { Test } from "./pages/QrScanner.tsx";
import { GalleryAccess } from "./pages/TakeTheGalery.tsx";
import { requestCameraPermission } from "./functions/permissionCamera.ts";

function App() {
  const [isShowQrCode, setIsShowQrCode] = useState(false); 
  const [stream, setStream] = useState(null);
  useEffect(() => {
    (async () => {
      const streamA  = await requestCameraPermission()
          // eslint-disable-next-line
        // @ts-ignore
      setStream(streamA);
    })()
  }, [])
  return (
    <>
      <GalleryAccess />
      <button onClick={() => setIsShowQrCode(!isShowQrCode)}> Mostre QrCode</button>
      {!isShowQrCode && <CameraPWA stream={stream} />}
      {isShowQrCode && <Test />}
    </>
  );
}

export default App;
