import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useState } from "react";

type IOptions = "lower" | "upper" | "number" | "symbol";

export function Password() {
  const [password, setPassword] = useState<string>("passwoRd123!");
  const [passwordSize, setPasswordSize] = useState<number>(10);
  const [passwordOptions, setPasswordOptions] = useState<IOptions[]>([]);

  useEffect(() => {
    if (!passwordOptions.length) {
      setPasswordOptions(["lower"]);
    }
  }, [passwordOptions]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col gap-10 justify-center items-center border p-5 w-96 rounded-sm">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-xl font-semibold tracking-wider">
            Password Generator
          </h1>
          <p className="text-lg">{password}</p>
        </div>
        <div className="grid gap-7">
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

          <ToggleGroup
            type="multiple"
            className="*:w-10"
            onValueChange={(e) => setPasswordOptions(e)}
            value={passwordOptions}
          >
            <ToggleGroupItem value="uppercase" title="Uppercase">
              A
            </ToggleGroupItem>
            <ToggleGroupItem value="lowercase" title="Lowercase">
              a
            </ToggleGroupItem>
            <ToggleGroupItem value="numbers" title="Numbers">
              1
            </ToggleGroupItem>
            <ToggleGroupItem value="symbol" title="Special characters">
              !
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}
