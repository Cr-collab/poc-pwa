import { Scanner } from "@yudiel/react-qr-scanner";

// eslint-disable-next-line
// @ts-ignore
const QRScanner = ({ onScan }) => {
  return (
    <div>
      <>
        <Scanner
          onScan={onScan}
          constraints={{
            facingMode: "environment",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          }}
          formats={['aztec','codabar', 'code_128', 'code_39', 'code_93', 'data_matrix', 'databar', 'databar_expanded', 'databar_limited', 'dx_film_edge', 'ean_13', 'ean_8']}
        />
      </>
    </div>
  );
};

export default QRScanner;
