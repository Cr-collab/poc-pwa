import "./App.css";
import CameraPWA from "./pages/Camera.tsx";
import QRScanner from "./pages/QrScanner.tsx";
import { GalleryAccess } from "./pages/TakeTheGalery.tsx";

function App() {
  return (
    <>
      <GalleryAccess />
      <CameraPWA />
      <QRScanner />
    </>
  );
}

export default App;
