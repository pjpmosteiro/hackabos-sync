//Batalla estelar
//LANG=es_ES codif utf-8
class Nave {
  constructor(nombre, dano, pvida, estado) {
    this.nombre = nombre;
    this.dano = dano;
    this.pvida = pvida;
    this.estado = estado;
  }
}
class NaveTipo1 extends Nave {
  constructor() {}
}

class NaveTipo2 extends Nave {
  constructor() {}
}

class NaveTipo3 extends Nave {
  constructor() {}
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
