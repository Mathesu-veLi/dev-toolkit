import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useState } from "react";
import { generateRandomInt } from "@/lib/utils";

type IOptions = "lower" | "upper" | "number" | "symbol";

export function Password() {
  const [password, setPassword] = useState<string>("passwoRd123!");
  const [passwordSize, setPasswordSize] = useState<number>(10);
  const [passwordOptions, setPasswordOptions] = useState<IOptions[]>(["lower"]);

  function generatePassword() {
    let tempPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      let subPassword = "";

      passwordOptions.forEach((option) => {
        switch (option) {
          case "lower":
            subPassword += String.fromCharCode(generateRandomInt(97, 122));
            break;
          case "upper":
            subPassword += String.fromCharCode(generateRandomInt(65, 90));
            break;
          case "number":
            subPassword += String.fromCharCode(generateRandomInt(48, 57));
            break;
          case "symbol":
            subPassword += String.fromCharCode(generateRandomInt(33, 47));
            break;
        }
      });

      tempPassword +=
        subPassword[generateRandomInt(0, passwordOptions.length - 1)];
    }
    setPassword(tempPassword);
  }

  useEffect(() => {
    if (!passwordOptions.length) {
      setPasswordOptions(["lower"]);
    }

    generatePassword();
  }, [passwordOptions, passwordSize]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col gap-10 justify-center items-center border p-5 w-96 rounded-sm">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-xl font-semibold tracking-wider">
            Password Generator
          </h1>
          <p className="text-lg max-w-80 break-words font-mono">{password}</p>
        </div>
        <div className="grid gap-7">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2>Number of Characters</h2>
            <div className="flex gap-4 w-64">
              <Input
                type="number"
                className="w-2/6"
                value={passwordSize}
                max={25}
                min={1}
                onChange={(e) => setPasswordSize(Number(e.target.value))}
              />
              <Slider
                max={25}
                min={1}
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
            onValueChange={(e: IOptions[]) => setPasswordOptions(e)}
            value={passwordOptions}
          >
            <ToggleGroupItem value="upper" title="Uppercase">
              A
            </ToggleGroupItem>
            <ToggleGroupItem value="lower" title="Lowercase">
              a
            </ToggleGroupItem>
            <ToggleGroupItem value="number" title="Numbers">
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
