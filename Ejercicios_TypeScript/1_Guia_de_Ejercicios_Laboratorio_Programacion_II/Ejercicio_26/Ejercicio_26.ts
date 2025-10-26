// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 26
/* Una empresa de correo está expandiendo sus dominios y ha decidido abrir una sucursal en el reino de 
Caballito.
La empresa en cuestión posee una sede central y un conjunto de dependencias que, a su vez, nuclean 
hasta tres sucursales cada una.
Para mantener el balance de carga laboral, siempre que se abre una sucursal se evalúa si las 
dependencias existentes ya están nucleando a tres; en caso, de ser así, se elige arbitrariamente a 
una y se le asigna la nueva sucursal; sin embargo, si existe alguna que nuclea a menos de tres, ésta 
recibirá la nueva sucursal bajo su control.
Si resulta que ya existe una dependencia con cuatro sucursales, entonces ésta cuarta debe transformarse 
a dependencia y la nueva sucursal quedar bajo su supervisión.
Plantear el diseño, diagrama e implementar la estructura que permita armar la estructura sabiendo que 
ambas tienen un id y nombre que las identifica, y que la única diferencia entre dependencia y sucursal, 
es que la sucursal no nuclea. */
