import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

export const Test = () => {
  const [text, setText] = useState('Not Found');
  return (
    <>
      <h3>{text}</h3>
      <Scanner onScan={(result) => setText(result[0].rawValue)} />;
    </>
  );
};
