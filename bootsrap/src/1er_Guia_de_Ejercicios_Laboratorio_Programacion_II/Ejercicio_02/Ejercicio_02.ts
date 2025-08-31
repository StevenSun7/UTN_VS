// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 02
/* Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado patente.
● Crear una instancia y asignarle valores; notar que el atributo privado no está disponible para la asignación de valores.
● Mostrar por pantalla los valores asignados. */

class Vehiculo {
    // Atributos públicos
    public marca: string;
    public modelo: string;
    
    // Atributo privado (solo accesible dentro de la clase)
    private patente: string;

    // Constructor
    constructor(marca: string, modelo: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    // Método público para acceder al atributo privado (getter)
    public getPatente(): string {
        return this.patente;
    }

    // Método para mostrar información del vehículo
    public mostrarInfo(): void {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Patente: ${this.getPatente()}`);
    }
}

// Creación de una instancia y asignación de valores
const miAuto = new Vehiculo("Toyota", "Corolla", "ABC123");

// Mostrar por pantalla los valores asignados
console.log("=== INFORMACIÓN DEL VEHÍCULO ===");
console.log("Marca:", miAuto.marca);      // ✅ Acceso público
console.log("Modelo:", miAuto.modelo);    // ✅ Acceso público

// Intento de acceso directo al atributo privado (generará error)
// console.log("Patente:", miAuto.patente); // ❌ Error: Property 'patente' is private

// Acceso correcto mediante el método público
console.log("Patente:", miAuto.getPatente()); // ✅ Acceso controlado

// Usando el método de la clase para mostrar información
console.log("\n=== MOSTRANDO INFO CON MÉTODO ===");
miAuto.mostrarInfo();