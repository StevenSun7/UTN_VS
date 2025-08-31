"use strict";
// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 02
/* Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado patente.
● Crear una instancia y asignarle valores; notar que el atributo privado no está disponible para la asignación de valores.
● Mostrar por pantalla los valores asignados. */

class Vehiculo {
    marca;
    modelo;
    patente;
    constructor(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    getPatente() {
        return this.patente;
    }
    mostrarInfo() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Patente: ${this.getPatente()}`);
    }
}
const miAuto = new Vehiculo("Toyota", "Corolla", "ABC123");
console.log("=== INFORMACIÓN DEL VEHÍCULO ===");
console.log("Marca:", miAuto.marca);
console.log("Modelo:", miAuto.modelo);
console.log("Patente:", miAuto.getPatente());
console.log("\n=== MOSTRANDO INFO CON MÉTODO ===");
miAuto.mostrarInfo();
