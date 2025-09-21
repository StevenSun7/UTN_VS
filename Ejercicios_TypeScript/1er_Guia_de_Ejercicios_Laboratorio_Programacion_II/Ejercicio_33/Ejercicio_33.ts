// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 33
/* Digital Horse, empresa de desarollo de juegos, quiere incursionar en los juegos masivos multiplayer 
de rol, razón por la que están preparando un prototipo, decidiendo iniciar por la construcción de los 
personajes.

Los personajes, que pueden ser de la clase guerrero o mago, se caracterizan por poseer nivel, puntos 
de experiencia, un árbol de habilidades, un arma, una armadura, inventario, unidades de desplazamiento, 
puntos de vitalidad y un nombre.
Las armas poseen nombre, cantidad de daño que efectúan, y tipo de ataque (CORTANTE, PERFORANTE, 
APLASTANTE, MÁGICO).
Las armaduras se caracterizan por el nombre, los puntos de defensa, la restricción que le imponen a 
los puntos de desplazamiento, y el tipo de ataque del que protege (CORTANTE, PERFORANTE, APLASTANTE, 
MÁGICO).
Las habilidades poseen nombre, nivel requerido, puntos de efecto que se agregan a los existentes y 
tipo (DEFENSA, ATAQUE). 

Todos los personajes deben iniciar con 0 puntos de experiencia, 20 de energía y tienen la capacidad de 
atacar, defenderse y avanzar.
Cuando se ataca, el daño potencial que se produce es igual a los puntos del arma sumado todas las 
habilidades de ATAQUE, aunque el atacado puede reducir el daño según la protección de la armadura y 
las habilidades de DEFENSA que posea.
Más precisamente, si el ataque se produce por un arma que no es del tipo para la que fue creada la 
armadura, el daño causado es del 100%; si los tipos coinciden, entran en juego los puntos de defensa 
y habilidades.
Las armaduras mágicas son capaces de repeler 100% los ataques mágicos, y son capaces de defender 
cualquier tipo de ataque, es decir, aplican los puntos de defensa de la armadura y habilidades defensivas.
Los personajes pueden avanzar sin detenerse, tantos metros como unidades de desplazamiento posean, 
menos los puntos de penalización indicados por la armadura.

Cuando un personaje muere, pierde su arma y armadura, la que pasa automáticamente al inventario del 
ganador; adicionalmente, el ganador adquiere tantos puntos de experiencia como energía haya quitado.
Los personajes adquieren nuevos niveles cada vez que los puntos de experiencia se igualan a su próximo 
nivel al cuadrado.
Cada vez que se sube de nivel, se desbloquean todas las habilidades cuyo nivel requerido coincida con 
el del personaje; adicionalmente, la cantidad de puntos de energía total resulta en la multiplicación 
de 20 por el nuevo nivel adquirido.
VER IMAGEN EN EL PEDF DE EJERCICIOS */
