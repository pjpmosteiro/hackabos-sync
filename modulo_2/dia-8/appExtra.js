/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//Ejercicio 1
let precio;
let entregado;

precio = prompt("Precio?");
entregado = prompt("Entregado?");

function change(precio, entregado) {
  return +precio - +entregado;
}
let cambio = change(precio, entregado);
alert(cambio);
//ejercicio 2
