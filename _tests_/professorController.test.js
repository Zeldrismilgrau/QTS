const professorController = require("../professorController");

describe("Professor Controller", () => {
  test("Retorna professor", () => {
    expect(professorController.buscarProfessor(1)).toEqual({
      id: 1,
      nome: "João Silva",
      email: "joao@email.com",
      cpf: "12345678900",
      status: "determinado"
    });
  });

  test("Retorna status", () => {
    expect(professorController.buscarStatusProfessor(1))
      .toBe("determinado");
  });
});