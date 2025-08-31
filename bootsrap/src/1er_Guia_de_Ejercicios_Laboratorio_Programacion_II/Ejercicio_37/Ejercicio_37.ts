// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 37
/* Modelar una mascota virtual, semejante a un Tamagotchi, que incluya las funciones correspondientes a 
las acciones comer y jugar, y funciones que permitan saber si puede jugar o no, y una que permita 
devolver un valor numérico comprendido entre 0 o 10 cuyo significado es el nivel de felicidad.
Una mascota, que puede encontrarse aburrida, hambrienta o contenta, se comporta en base a su estado 
de ánimo.

Cuando come, esto es lo que ocurre:
• Si está hambrienta, se pone contenta.
• Si está contenta, su nivel se incrementa en una unidad.
• Si está aburrida, y hace más de 80 minutos que está aburrida, entonces se pone contenta.
• Si está aburrida desde hace 80 minutos o menos, entonces no le pasa nada, no cambia nada.

Cuando juega, esto es lo que ocurre:
• Si está contenta, su nivel se incrementa en dos unidades.
• Si está aburrida, se pone contenta.
• No produce ningún efecto jugar con la mascota si está hambrienta.

Una mascota puede jugar si está contenta o aburrida, si está hambrienta no.

Si no juega cada 15 segundos, se aburre; si estaba aburrida, pierde un punto de felicidad. Si en 
20 segundos no come, pasa a estar con hambre.

NO SE PUEDE CONSULTAR DE NINGUNA MANERA EL ESTADO ACTUAL DE LA MASCOTA.

Esto quiere decir que está prohibido hacer comparaciones del tipo estado = ‘contento’ o cualquiera 
similar utilizando mensajes especiales. */
