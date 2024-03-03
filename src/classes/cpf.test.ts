import { Cpf } from "./cpf";

describe("Validate Cpf", () => {
  test("checks if an invalid cpf is marked as invalid", () => {
    const cpf = new Cpf("123.456.789-10");
    expect(cpf.isValid()).toBeFalsy();
  });

  test("checks if an valid cpf is marked as valid", () => {
    const cpf = new Cpf("491.550.570-71");
    expect(cpf.isValid()).toBeTruthy();
  });
});
