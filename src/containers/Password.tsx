import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function Password() {
  const [password, setPassword] = useState<string>("passwoRd123!");
  const [passwordSize, setPasswordSize] = useState<number>(10);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col gap-10 justify-center items-center border p-5 w-96 rounded-sm">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-xl font-semibold tracking-wider">
            Password Generator
          </h1>
          <p className="text-lg">{password}</p>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h2>Number of Characters</h2>
            <div className="flex gap-4">
              <Input
                type="number"
                className="w-2/6"
                value={passwordSize}
                onChange={(e) => setPasswordSize(Number(e.target.value))}
              />
              <Slider
                max={50}
                step={1}
                className="w-4/6"
                value={[passwordSize]}
                onValueChange={([value]) => setPasswordSize(value)}
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
