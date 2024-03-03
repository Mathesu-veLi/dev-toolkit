import { Cpf } from "./cpf";

describe("Validate CPF", () => {
  test("should return false to a invalid CPF", () => {
    const cpf = new Cpf("123.456.789-10");
    expect(cpf.isValid()).toBeFalsy();
  });

  test("should return true to a valid CPF", () => {
    const cpf = new Cpf("491.550.570-71");
    expect(cpf.isValid()).toBeTruthy();
  });
});
