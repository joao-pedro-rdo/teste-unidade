// src/calculadora.js
function soma(a, b) {
  return a + b;
}

// Função com erro proposital
function subtracao(a, b) {
  return a + b; // O correto seria `a - b`, mas deixamos o erro para simular o problema
}

module.exports = { soma, subtracao };
