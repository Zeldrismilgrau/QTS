const componenteService = require("./componenteService");

function buscarNomeComponente(id) {
  return componenteService.getNomeComponente(id);
}

function buscarHorarioComponente(id) {
  return componenteService.getHorarioComponente(id);
}

function buscarDetalhesComponente(id) {
  return componenteService.getDetalhesComponente(id);
}

module.exports = {
  buscarNomeComponente,
  buscarHorarioComponente,
  buscarDetalhesComponente
};