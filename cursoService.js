const cursos = [
  { id: 1, nome: "ADS", periodo: "noturno" },
  { id: 2, nome: "Engenharia", periodo: "matutino" },
  { id: 3, nome: "Direito", periodo: "vespertino" }
];

function getNomeCurso(id) {
  const curso = cursos.find(c => c.id === id);
  return curso ? curso.nome : null;
}

function getPeriodoCurso(id) {
  const curso = cursos.find(c => c.id === id);
  return curso ? curso.periodo : null;
}

module.exports = {
  getNomeCurso,
  getPeriodoCurso
};