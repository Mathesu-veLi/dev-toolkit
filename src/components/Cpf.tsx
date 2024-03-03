import { Button } from "./ui/button";

export function Cpf() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col gap-4 justify-center items-center border p-5">
        <h1 className="text-xl font-semibold tracking-wider">CPF Generator</h1>
        <p id="cpf" className="text-lg">
          000.000.000-00
        </p>
        <Button>Generate</Button>
      </div>
    </div>
  );
}
