export class Cpf {
  constructor(private cpf: string | undefined) {}

  public isValid(): boolean {
    if(!this.cpf) return false;

    this.cpf = this.cpf.replace(/\D+/g, "");
    if (this.cpf.length !== 11) return false;

    const cpfArray = Array.from(this.cpf.substring(0, 9)).map((value) =>
      Number(value)
    );

    this.discoverDigit(cpfArray, 10);
    this.discoverDigit(cpfArray, 11);

    if (cpfArray.join("") !== this.cpf) return false;
    return true;
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
