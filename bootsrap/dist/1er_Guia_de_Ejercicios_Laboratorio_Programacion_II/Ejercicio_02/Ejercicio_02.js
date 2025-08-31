"use strict";
class VehiculoModerno {
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
        console.log(`Vehículo: ${this.marca} ${this.modelo} - Patente: ${this.getPatente()}`);
    }
}
const autoModerno = new VehiculoModerno("Ford", "Focus", "XYZ789");
autoModerno.mostrarInfo();
//# sourceMappingURL=Ejercicio_02.js.map