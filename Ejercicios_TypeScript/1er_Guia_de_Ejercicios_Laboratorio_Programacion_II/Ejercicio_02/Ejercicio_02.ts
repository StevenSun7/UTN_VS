// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 02
/* Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado patente.
● Crear una instancia y asignarle valores; notar que el atributo privado no está disponible para la asignación de valores.
● Mostrar por pantalla los valores asignados. */

class VehiculoModerno {
    // Atributos se declaran directamente en el constructor
    constructor(
        public marca: string,
        public modelo: string,
        private patente: string
    ) {}

    public getPatente(): string {
        return this.patente;
    }

    public mostrarInfo(): void {
        console.log(`Vehículo: ${this.marca} ${this.modelo} - Patente: ${this.getPatente()}`);
    }
}

const autoModerno = new VehiculoModerno("Ford", "Focus", "XYZ789");
autoModerno.mostrarInfo();