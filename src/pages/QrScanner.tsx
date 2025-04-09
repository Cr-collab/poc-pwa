import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

export const Test = (props) => {
  const [data, setData] = useState("No result");

  return (
    <>
      <Scanner onScan={(result) => console.log(result)} />;
    </>
  );
};
