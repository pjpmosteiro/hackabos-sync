/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");
//Ejercicio 1
/*
//Ejercicio 1

function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

ucFirst();

//Ejercicio 2 ()
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}
alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));
// Ejercicio 3

function truncate(str, maxlenght) {
  return str.lenght > maxlenght ? str.slice(0, maxlenght - 1) + "..." : str;
}

//Ejercicio 4
function extractCurrencyValue(str) {
  +str.slice(1);
}

alert(extractCurrencyValue("$120") === 120); //Tiene que dar true

*/

//ARRAYS
//Ejercicio 2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length - 1) / 2] = "Classics";
styles.shift();
styles.unshift("Rap", "Reagge");

alert(styles);
//Ejercicio 3
