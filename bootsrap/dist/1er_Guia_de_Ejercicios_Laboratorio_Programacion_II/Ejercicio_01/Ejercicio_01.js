"use strict";
class Persona {
    nombre;
    apellido;
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
const persona1 = new Persona("Juan", "Pérez");
console.log("Nombre:", persona1.nombre);
console.log("Apellido:", persona1.apellido);
console.log("Persona completa:", persona1);
//# sourceMappingURL=Ejercicio_01.js.map