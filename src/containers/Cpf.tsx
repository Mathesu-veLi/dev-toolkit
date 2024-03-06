import { CpfGenerator } from "@/components/Cpf/CpfGenerator";
import { CpfValidator } from "@/components/Cpf/CpfValidator";

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
