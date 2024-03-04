import { useState } from "react";
import { Button } from "./ui/button";

export function Ip() {
  const [ip, setIp] = useState("255.255.255.255");

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col gap-4 justify-center items-center border p-5 w-80 rounded-sm">
        <h1 className="text-xl font-semibold tracking-wider">IP Generator</h1>
        <p className="text-lg">{ip}</p>
        <Button onClick={() => setIp(generateIp())}>Generate</Button>
      </div>
    </div>
  );
}
