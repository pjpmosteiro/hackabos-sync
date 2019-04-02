/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//ejercicio 1
//let age;

//if (age >= 14 && age <= 90);

//ejercicio 2

//let age;

//if (!(age >= 14 && age <= 90));
// // // // //
//let age;

//if (age <= 14 && age >= 90);

//ejercicio 3
let username;
let password;

username = prompt("Introduce usuario");

function getPassword() {
  userPassword = prompt("Introduce contraseña");
  return userPassword;
}

function evaluePassword() {
  if (userPassword == "TheMaster") return true;
  else return false;
}

function evalCancelUsername() {
  if (username == "" || username == null) alert("Cancelled");
  else {
    if (username != "Admin") alert("I don't know you");
  }
}

if (username == "Admin") {
  let result = evaluePassword(getPassword());
  if (result) alert("Welcome");
  else {
    alert("Wrong password");
  }
}

evalCancelUsername();
