import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Password() {
  const [password, setPassword] = useState<string>("passwoRd123!");
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col gap-4 justify-center items-center border p-5 w-80 rounded-sm">
        <h1 className="text-xl font-semibold tracking-wider">
          Password Generator
        </h1>
        <p className="text-lg">{password}</p>
        <Button onClick={() => setPassword(generatePassword())}>
          Generate
        </Button>
      </div>
    </div>
  );
}
