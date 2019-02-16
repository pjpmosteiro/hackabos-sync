//Batalla estelar --BIDIMENSIONAL
//LANG=es_ES codif utf-8
class Nave {
  constructor(nombre, pdisparo, pvida, dano, estado) {
    this.nombre = nombre;
    this.pdisparo = pdisparo;
    this.pvida = pvida;
    this.dano = dano;
    this.estado = [];
    //estado - funcion get en funcion de vida. If vida = 0,estado = muerto
  }
  Obtenerdano(nave) {
    if ((this.pvida = 0)) {
      return "muerto";
    } else {
      return "vivo";
    }
  }
  Recibirdisparo(dano) {
    this.pvida.push(-i);
  }
}

let disparar = {
  //obtener posicion
  //Ejecutar funcion "recibir disparo"
};
let selecttarget = {
  //Fijar en cordeenadas desde disparar
};

//restar 1 a puntovida del objeto nave

class NaveTipo1 extends Nave {
  constructor(nombre, pdisparo, pvida) {
    super(nombre, "10", "5");
  }
}

class NaveTipo2 extends Nave {
  constructor(nombre, pvida, pdisparo) {
    super(nombre, "5", "10");
  }
}

class NaveTipo3 extends Nave {
  constructor(nombre, pvida, pdisparo) {
    super(nombre, "8", "7");
  }
}

class Ejercito {
  constructor(nombre, listanaves, estado, derrotado) {
    this.nombre = nombre;
    this.listanaves = [];
    this.estado = estado;
    this.derrotado = derrotado;
  }
}
class NaveGenerator {
  constructor() {}
  CrearEjercito(nombre, nave1, nave2, nave3) {
    let ejercito = new Ejercito(nombre);
    for (let i = 0; i < nave1; i++) {
      let nave1 = new NaveTipo1("nave1");
      ejercito.listanaves.push(nave);
    }
    for (let i = 0; i < nave2; i++) {
      let nave2 = new NaveTipo2("nave2");
      ejercito.listanaves.push(nave);
    }
    for (let i = 0; i < nave3; i++) {
      let nave3 = new NaveTipo3("nave3");
      ejercito.listanaves.push(nave);
    }
  }
}

class CampoBatalla {
  constructor(sectorlist, rolecontrol, roleexec) {
    this.sectorlist = [];
    this.rolecontrol = rolecontrol;
    this.roleexec = roleexec;
  }
}
class Sector {
  constructor() {}
}

let Ejercito1 = NaveGenerator.CrearEjercito();
//OPERATIVA
/*
const ejercito1 = generador.CrearEjercito("Rojo", 3, 5, 7);
const ejercito2 = generador.CrearEjercito("Verde", 3, 5, 7);
//(si son distintos se generan partidas desiguales, asi que habrá que controlar esto al añadir los ejercitos)
const campoBatalla = generador.GenerarCampo(ejercito1, ejercito2);

var resultado = campoBatalla.REalizarPartida();
// Dentro se realizarán los turnos
// Se visualizaran los disparos
// Se indica si una nave ha sido destruida: la nave 1 del ejercito rojo ha sido destruida por la nave 3 del ejercito verde
console.log(resultado);
// El ejercito rojo ha ganado
*/
