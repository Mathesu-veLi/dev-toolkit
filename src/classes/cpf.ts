import { generateRandomInt } from "@/lib/utils";

export class Cpf {
  constructor(private cpf: string) {
    this.cpf = this.cpf.replace(/\D+/g, "");
  }

  public generate() {
    for (let c = 0; c < 10; c++) {
      this.cpf += String(generateRandomInt(0, 9));
    }

    this.cpf = this.discoverVerifierDigits();

    const regex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    const formattedCpf = this.cpf.replace(regex, "$1.$2.$3-$4");

    return formattedCpf;
  }

  public isValid(): boolean {
    if (this.cpf.length !== 11) return false;

    const fullCpf = this.discoverVerifierDigits();

    if (fullCpf !== this.cpf) return false;
    return true;
  }

  private discoverVerifierDigits(): string {
    const cpfArray = Array.from(this.cpf.substring(0, 9)).map((value) =>
      Number(value)
    );

    this.discoverDigit(cpfArray, 10);
    this.discoverDigit(cpfArray, 11);
    return cpfArray.join("");
  }

  private discoverDigit(array: number[], value: 10 | 11) {
    let sum = 0;

    array.reduce((accumulator, element) => {
      sum += element * accumulator;

      return (accumulator -= 1);
    }, value);

    const digit = 11 - (sum % 11);
    array.push(digit > 9 ? 0 : digit);
  }
}
