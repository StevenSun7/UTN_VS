// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 23
/* La empresa tecnológica Kokumo Tech Inc se lanza al mercado de la seguridad mediante la oferta de un 
sistema integral de vigilancia capaz de cubrir aire y tierra; la solución apunta a barrios privados, 
estancias y regiones de decenas de hectáreas.
KTI necesita conciliar los datos de los distintos dispositivos para poder brindar una solución 
homogénea, de modo tal que se debe pensar en una pieza de software sabiendo que:

a. Gr0N3: se trata del dispositivo volador que capta objetos clasificables en grande, pequeños o 
medianos, y es capaz de reconocer si se trata de un humano o un animal.
Para obtener los datos del drone, debe ejecutarse el método estático getData() de la clase FlyingGr0n3, 
pasándole por parámetro el número de id (rango del 1 al 10). Si no existe el id del dispositivo, el 
método lanza una excepción; en caso contrario devuelve una lista (que puede estar vacía) de Gr0n3Object, 
que presenta los siguientes atributos:
    - size (string): admite los valores big, small, medium.
    - type (string): admite los valores human, animal.
    - kind (string): si se trata de un animal, los valores posibles son dog, cat, cow,sheep, 
    horse, undefined.

b. FalderPerr177: se trata de la unidad terrestre que sólo distingue entre humanos y no humanos, con 
la capacidad de identificar el género biológico de los primeros.
Mediante la instancia de la clase FalderP, es posible recuperar los datos si se invoca getData(); la 
función devuelve una lista que contiene a todas las unidades activas y que se modelan a través de la 
clase Perr177, cuyos atributos son:
    - id (entero): un id numérico
    - List<Perr177Data>: es una lista que contiene elementos del tipo Perr177Data,
    que presenta los siguientes atributos:
        - type (string): admite los valores HUMAN, NO_HUMAN, de un enum llamado FPType.
        - size (string): admite los valores rande, pichitito, niranipi.
        - gender (string): admite los valores MALE, FEMALE, de un enum llamado FPGender.

La idea es poder implementar una clase que contenga la función fetchSurveillanceData() encargada de 
recuperar los datos de los distintos dispositivos para, luego, transformarlos en un formato homogéneo 
de modo tal que sea posible pasárselo a la función printInfo(), buscando de esta manera imprimir la 
siguiente información por cada objeto:
Dispositivo: <id dispositivo>
Tipo: <Humano, No humano>
Tamaño: <Grande, mediano, pequeño>
Observaciones: <los valores de kind o de gender, dependiendo el dispositivo></id> */
