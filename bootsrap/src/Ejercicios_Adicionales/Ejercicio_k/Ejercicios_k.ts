// EJERCICIOS ADICIONALES de la Primer Guia de Ejercicios Laboratorio - Programacion II

/* EJERCICIO K:
Little Horse Robotics, reconocida fábrica de robots a nivel intergaláctico, utiliza una estrategia 
basada en estaciones para el ensamblado de sus productos (lo que sale de una estación, entra en la 
siguiente).

Debido a la pluralidad de artículos que confecciona, la cantidad de estaciones requeridas puede 
variar y es necesario saber qué modelo de robots se manufacturará para prepararlas, es decir, 
ordenarlas en secuencia y asignarles los materiales que necesitarán (tipo y cantidad).
Si en medio proceso de manufactura alguna estación se queda sin insumos, la construcción debe 
abortarse y dar aviso.

Todos los robots se construyen sobre el mismo esqueleto base, el que tiene slots para incorporar:
- GPU
- Brazos y piernas
- Torso
- Box-e-tracio (para sensores y otros elementos)

La cadena productiva más común está compuesta por la estación de ensamblado de GPU, la de extremidades 
y la de torso; sin embargo, algunos modelos podrían requerir elementos adicionales (como sensores), 
los que se incorporan en sus respectivas estaciones de nombre homónimo y siempre antes de instalar 
el torso.

Los R54 requieren 1 GPU M1, 2 brazos S1, 2 piernas S1 y 1 torso S1.
Los Z17 requieren 1 GPU M1, 2 brazos S1, 2 piernas S1, 1 pierna S2, 1 torso F1 y 1 sensor K23.
Los K1llm3 requieren 1 GPU A1, 2 piernas S2 y 3 microantenas A7.

Implementar una solución que modele la dinámica de trabajo; crear diagrama e implementar código.

Probar construyendo varios sets de robots. */
