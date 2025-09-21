// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 38
/* Una empresa de logística registra durante el día, peticiones de envío de mercadería; éstas se 
caracterizan por un id de pedido, código de ruta y un código alfanumérico que se emplea para 
identificar el artículo a enviar.

Por otro lado, a la tarde, los repartidores nocturnos se loguean a la plataforma de la empresa 
mediante su usuario y un password; el sistema emplea una biblioteca que permite usar la clase 
Security que expone el método loginUser() que admite user name y password, devolviendo true si 
válido y false en caso contrario; excepciones podrían ocurrir aunque no se especifican cuáles.

Cerca de las 23 hs, el sistema ejecuta una tarea que asigna a todos los repartidores logueados, 
hasta 5 envíos; cada repartidor está asociado a un único código de ruta y para saber cuál le 
corresponde, se debe invocar el método getRoute() de la clase Logistic, perteneciente a una 
biblioteca, que espera como parámetro el user name del repartidor.

La asignación del envío consiste en invocar el método setDelivery() de la clase Logistic, pasándole 
como parámetros el user name y la petición de envío; todo envío delegado debe marcarse como asignado 
a un responsable.

Una vez ejecutada la tarea de asignación, se emite un informe con el listado de los artículos 
pendientes. */
