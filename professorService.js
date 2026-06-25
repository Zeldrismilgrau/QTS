const professores = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    cpf: "12345678900",
    status: "determinado"
  },
  {
    id: 2,
    nome: "Maria Souza",
    email: "maria@email.com",
    cpf: "98765432100",
    status: "indeterminado"
  }
];

function getProfessor(id) {
  return professores.find(p => p.id === id) || null;
}

function getStatusProfessor(id) {
  const professor = professores.find(p => p.id === id);
  return professor ? professor.status : null;
}

module.exports = {
  getProfessor,
  getStatusProfessor
};