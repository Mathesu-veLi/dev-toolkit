import { useState } from "react";
import { Button } from "./ui/button";

export function CpfGenerator() {
  const [cpf, setCpf] = useState<string>("000.000.000-00");

  return (
    <div className="flex flex-col gap-4 justify-center items-center border p-5 w-80">
      <h1 className="text-xl font-semibold tracking-wider">CPF Generator</h1>
      <p className="text-lg">{cpf}</p>
      <Button onClick={() => setCpf(generateCpf())}>Generate</Button>
    </div>
  );
}
