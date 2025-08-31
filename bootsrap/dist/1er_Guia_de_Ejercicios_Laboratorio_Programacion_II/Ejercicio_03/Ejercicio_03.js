"use strict";
class Articulo {
    marca;
    modelo;
    setMarca(marca) {
        this.marca = marca;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    mostrarInfo() {
        console.log(`Artículo: ${this.marca} ${this.modelo}`);
    }
}
const miArticulo = new Articulo();
miArticulo.setMarca("Samsung");
miArticulo.setModelo("Galaxy S23");
console.log("=== INTENTO DE ACCESO DIRECTO ===");
console.log("=== ACCESO CORRECTO MEDIANTE GETTERS ===");
console.log("Marca:", miArticulo.getMarca());
console.log("Modelo:", miArticulo.getModelo());
console.log("=== INFORMACIÓN COMPLETA ===");
miArticulo.mostrarInfo();
//# sourceMappingURL=Ejercicio_03.js.map