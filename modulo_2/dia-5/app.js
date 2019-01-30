/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//ejercicio 1
/*

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//ejercicio 2

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}


let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
// ejercicio 5

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);
*/
// ejercicio 8

function multiplyNumeric() {
  for (let key in obj) {
    typeof [obj] == "number";
    {
      key[obj] * 2;
    }
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

alert(multiplyNumeric);
