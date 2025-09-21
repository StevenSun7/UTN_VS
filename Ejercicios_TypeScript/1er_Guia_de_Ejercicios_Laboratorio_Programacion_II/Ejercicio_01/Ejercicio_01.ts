// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 01
/* Crear una clase Persona que tenga los atributos públicos nombre y apellido.
● Crear una instancia y asignarle valores.
● Mostrar por pantalla los valores asignados. */

// Definición de la clase Persona
class Persona {
    // Atributos públicos (por defecto en TypeScript)
    nombre: string;
    apellido: string;

    // Constructor para inicializar los atributos
    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Creación de una instancia y asignación de valores
const persona1 = new Persona("Juan", "Pérez");

// Mostrar por pantalla los valores asignados
console.log("Nombre:", persona1.nombre);
console.log("Apellido:", persona1.apellido);
console.log("Persona completa:", persona1);