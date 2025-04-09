import { Scanner } from "@yudiel/react-qr-scanner";

export const Test = () => {
  return (
    <>
      <Scanner onScan={(result) => console.log(result)} />;
    </>
  );
};
