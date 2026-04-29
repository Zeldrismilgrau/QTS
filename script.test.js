const { somar, mensagemBoasVindas } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(10);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});