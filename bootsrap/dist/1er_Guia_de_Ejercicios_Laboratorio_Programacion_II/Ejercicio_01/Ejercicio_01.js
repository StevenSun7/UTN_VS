"use strict";
// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 01
/* Crear una clase Persona que tenga los atributos públicos nombre y apellido.
● Crear una instancia y asignarle valores.
● Mostrar por pantalla los valores asignados. */

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