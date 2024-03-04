import { useState } from "react";
import { Button } from "./ui/button";
import { generateRandomInt } from "@/lib/utils";

export function Ip() {
  const [ip, setIp] = useState("255.255.255.255");

  function generateIp() {
    let tempIp = "";
    for (let i = 0; i < 4; i++) {
      tempIp += generateRandomInt(0, 255);
    }

    return tempIp;
  }

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
