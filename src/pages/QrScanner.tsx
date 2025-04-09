import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
import { useEffect } from "react";

// Creates the configuration object for Html5QrcodeScanner.

const Html5QrcodePlugin = () => {
  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
        qrbox: { width: 250, height: 250 },
      },
      false
    );

    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);

  return <div id={"reader"} />;
};

export default Html5QrcodePlugin;
