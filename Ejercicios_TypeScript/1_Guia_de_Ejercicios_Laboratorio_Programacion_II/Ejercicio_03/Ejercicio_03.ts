// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 03
/* Crear una clase Articulo que tenga los atributos privados marca y modelo.
● Crear métodos públicos para la asignación de valores.
● Crear una instancia y asignarle valores.
● Notar que no es posible mostrar los valores por pantalla y analizar el motivo por lo que
esto ocurre. */

class Articulo {
    // Atributos privados (solo accesibles dentro de la clase)
    constructor(
    private marca: string,
    private modelo: string,
    ) {}

    // Métodos públicos para asignar valores (setters)
    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    // Métodos públicos para obtener valores (getters)
    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    // Método para mostrar información
    public mostrarInfo(): void {
        console.log(`Artículo: ${this.marca} ${this.modelo}`);
    }
}

// Creación de una instancia
const miArticulo = new Articulo("Marca", "Modelo");

// Asignación de valores mediante métodos públicos
miArticulo.setMarca("iPhone");
miArticulo.setModelo("17 Pro Max");

// Intentar mostrar valores directamente (generará error)
console.log("=== INTENTO DE ACCESO DIRECTO ===");
// console.log("Marca:", miArticulo.marca);    // ❌ Error: Property 'marca' is private
// console.log("Modelo:", miArticulo.modelo);  // ❌ Error: Property 'modelo' is private

// Acceso correcto mediante métodos públicos
console.log("=== ACCESO CORRECTO MEDIANTE GETTERS ===");
console.log("Marca:", miArticulo.getMarca());    // ✅ Correcto
console.log("Modelo:", miArticulo.getModelo());  // ✅ Correcto

// Mostrar información usando método de la clase
console.log("=== INFORMACIÓN COMPLETA ===");
miArticulo.mostrarInfo();

