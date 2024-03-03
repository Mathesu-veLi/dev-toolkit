import { CpfGenerator } from "@/components/CpfGenerator";
import { CpfValidator } from "@/components/CpfValidator";

export function Cpf() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-full">
      <div>
        <CpfGenerator />
        <CpfValidator />
      </div>
    </div>
  );
}
