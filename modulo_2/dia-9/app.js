/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

// arrays ejercicio 5

function SumValores() {
  let numeros = [];
  while (true) {
    let valor = prompt("¡Dame número!");
    if (valor === "" || valor === null || valor === !Number) break;
    numeros.push(+valor);
  }

  let sum = 0;
  for (let numero of numeros) {
    sum += numero;
  }
  return sum;
}

alert(SumValores());
