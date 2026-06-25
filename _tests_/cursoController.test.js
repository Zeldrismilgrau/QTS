const cursoController = require("./cursoController");

describe("Curso Controller", () => {
  test("Retorna nome do curso", () => {
    expect(cursoController.buscarNomeCurso(1)).toBe("ADS");
  });

  test("Retorna período do curso", () => {
    expect(cursoController.buscarPeriodoCurso(1)).toBe("noturno");
  });
});