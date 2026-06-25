const professorService = require("./professorService");

function buscarProfessor(id) {
  return professorService.getProfessor(id);
}

function buscarStatusProfessor(id) {
  return professorService.getStatusProfessor(id);
}

module.exports = {
  buscarProfessor,
  buscarStatusProfessor
};