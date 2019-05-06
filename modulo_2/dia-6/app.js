/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//BLOQUE 04 04
//Ejercicio 1
/*

let user = {
  name: "John",
  go: function() {
    alert(this.name);
  }
};
user.go();
*/

//Ejercicio 2
/*
let obj, method;

obj = {
  go: function() {
    alert(this);
  }
};

obj.go(); // (1) [object Object]

obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

//-> Debido a que se asigna el métdo en el tercero y se pierde el "this".
*/

//ejercicio 3
/*
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // What's the result?

// undefined  
*/

//ejercicio 4
/*
let calculator = {
  read: function() {
    this.valor1 = +prompt("numero 1?");
    this.valor2 = +prompt("numero 2?");
  },
  sum: function() {
    alert(this.valor1 + this.valor2);
  },
  mul: function() {
    alert(this.valor1 * this.valor2);
  }
};

calculator.read();
calculator.sum();
calculator.mul();
*/

//ejercicio 5
/*
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    // shows the current step
    alert(this.step);
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep(); // 1
*/


//BLOQUE 04 05
