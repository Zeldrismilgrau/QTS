const componentes = [
  {
    id: 1,
    nome: "Matemática",
    inicio: "08:00",
    fim: "10:00",
    diaSemana: "Segunda-feira"
  }
];

function getNomeComponente(id) {
  const componente = componentes.find(c => c.id === id);
  return componente ? componente.nome : null;
}

function getHorarioComponente(id) {
  const componente = componentes.find(c => c.id === id);

  if (!componente) return null;

  return {
    inicio: componente.inicio,
    fim: componente.fim,
    diaSemana: componente.diaSemana
  };
}

function getDetalhesComponente(id) {
  const componente = componentes.find(c => c.id === id);

  if (!componente) return null;

  return {
    professor: "professor determinado",
    nome: componente.nome,
    inicio: componente.inicio,
    fim: componente.fim,
    diaSemana: componente.diaSemana
  };
}

module.exports = {
  getNomeComponente,
  getHorarioComponente,
  getDetalhesComponente
};