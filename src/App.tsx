import "./App.css";
import CameraPWA from "./pages/Camera.tsx";
import  { BarcodeDetectorComponent, Test } from "./pages/QrScanner.tsx";
import { GalleryAccess } from "./pages/TakeTheGalery.tsx";

function App() {
  return (
    <>
      <GalleryAccess />
      <CameraPWA />
      <Test />
    </>
  );
}

export default App;
