const componenteController = require("./componenteController");

describe("Componente Controller", () => {
  test("Retorna nome do componente", () => {
    expect(componenteController.buscarNomeComponente(1))
      .toBe("Matemática");
  });

  test("Retorna horário", () => {
    expect(componenteController.buscarHorarioComponente(1))
      .toEqual({
        inicio: "08:00",
        fim: "10:00",
        diaSemana: "Segunda-feira"
      });
  });

  test("Retorna detalhes do componente", () => {
    expect(componenteController.buscarDetalhesComponente(1))
      .toEqual({
        professor: "professor determinado",
        nome: "Matemática",
        inicio: "08:00",
        fim: "10:00",
        diaSemana: "Segunda-feira"
      });
  });
});