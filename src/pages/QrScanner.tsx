import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
// eslint-disable-next-line
// @ts-ignore
const createConfig = (props) => {
  // eslint-disable-next-line
  // @ts-ignore
  const config = {};

  if (props.fps) {
    // eslint-disable-next-line
    // @ts-ignore
    config.fps = props.fps;
  }
  if (props.qrbox) {
    // eslint-disable-next-line
    // @ts-ignore
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    // eslint-disable-next-line
    // @ts-ignore
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    // eslint-disable-next-line
    // @ts-ignore
    config.disableFlip = props.disableFlip;
  }

  return config;
};
// eslint-disable-next-line
// @ts-ignore
const Html5QrcodePlugin = (props) => {
  useEffect(() => {
    // when component mounts
    const config = createConfig(props);
    const verbose = props.verbose === true;
    // Suceess callback is required.
    if (!props.qrCodeSuccessCallback) {
      throw "qrCodeSuccessCallback is required callback.";
    }
    // eslint-disable-next-line
    // @ts-ignore
    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      // eslint-disable-next-line
      // @ts-ignore
      config,
      verbose
    );
    html5QrcodeScanner.render(
      props.qrCodeSuccessCallback,
      props.qrCodeErrorCallback
    );

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);

  return <div id={qrcodeRegionId} />;
};

export default Html5QrcodePlugin;
