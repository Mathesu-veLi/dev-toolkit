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

describe("Generate CPF", () => {
  test("should return a cpf with 11 numbers", () => {
    const cpf = new Cpf("").generate();
    const formattedCpf = cpf.replace(/\D+/g, "");
    
    expect(formattedCpf.length).toBe(11);
  });

  test("should return a valid cpf", () => {
    const cpf = new Cpf("");
    cpf.generate();
    expect(cpf.isValid()).toBeTruthy();
  });

  test("should return a formatted CPF", () => {
    const cpf = new Cpf("").generate();
    expect(cpf.match(/(\d{3}\.){2}\d{3}-\d{2}/)).not.toBeNull();
  });
});
