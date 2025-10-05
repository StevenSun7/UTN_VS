// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 04
/* Crear una clase Cine que tenga los atributos privados película y horario:
● Crear métodos públicos para la asignación y recuperación de valores.
● Crear un método público obtenerCartelera() que devuelva el nombre de la película y el
horario.
● Crear una instancia y asignarle valores.
● Mostrar por pantalla los valores. */

class Cine {

    constructor(     
    private pelicula: string,
    private horario: number,
    ) {}

    //Métodos públicos para asignar valor y recuperar valor
    public setPelicula(pelicula: string): void {
        this.pelicula = pelicula;
    }

    public setHorario(horario: number): void {
        this.horario = horario;
    }


}