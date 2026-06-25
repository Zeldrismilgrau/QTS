const cursoService = require("./cursoService");

function buscarNomeCurso(id) {
  return cursoService.getNomeCurso(id);
}

function buscarPeriodoCurso(id) {
  return cursoService.getPeriodoCurso(id);
}

module.exports = {
  buscarNomeCurso,
  buscarPeriodoCurso
};