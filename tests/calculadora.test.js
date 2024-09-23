const { soma, subtracao } = require('../src/calculadora');

test('Soma de 2 + 2 deve ser 4', () => {
  expect(soma(2, 2)).toBe(4);
});

test('Soma de 0 + 5 deve ser 5', () => {
  expect(soma(0, 5)).toBe(5);
});

test('Soma de números negativos: -1 + -1 deve ser -2', () => {
  expect(soma(-1, -1)).toBe(-2);
});

// Teste que vai falhar
test('Subtração de 5 - 3 deve ser 2', () => {
  expect(subtracao(5, 3)).toBe(2); // Este teste vai falhar, pois a função está incorreta
});
