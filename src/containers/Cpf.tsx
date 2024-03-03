import { CpfGenerator } from "@/components/CpfGenerator";
import { CpfValidator } from "@/components/CpfValidator";

export function Cpf() {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="grid gap-10">
          <CpfGenerator />
          <CpfValidator />
        </div>
      </div>
    </>
  );
}
