import { Scanner } from "@yudiel/react-qr-scanner";
import { toast } from "react-toastify/unstyled";

// eslint-disable-next-line
// @ts-ignore
const QRScanner = () => {
  const onScan = (result) => {
    console.log("🚀 ~ onScan ~ result:", result)
    toast.info(result[0]);
  };
  return (
    <div>
      <Scanner
        onScan={onScan}
        constraints={{
          facingMode: "environment",
        }}
        formats={[
          "aztec",
          "codabar",
          "code_128",
          "code_39",
          "code_93",
          "data_matrix",
          "databar",
          "databar_expanded",
          "databar_limited",
          "dx_film_edge",
          "ean_13",
          "ean_8",
        ]}
      />
    </div>
  );
};

export default QRScanner;
