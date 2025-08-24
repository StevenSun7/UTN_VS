// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 22
/* Un sistema de gestión automatizada necesita ser capaz de analizar documentos digitales de distintos 
organismos nacionales; su objetivo es aceptarlos o rechazarlos, según cumplan con las condiciones 
descritas más abajo.
Cada cierto tiempo el sistema en cuestión recupera los datos mediante comunicación directa con cada 
uno de los subsistemas, modelando los valores en clases que presentan la estructura que los del origen.
Desarrollar una solución que permita normalizar los objetos y analizar los siguientes datos:
- id (numérico): es el número de legajo, folio o expediente, del documento a analizar.
- issueDate (date): es la fecha de emisión, lanzamiento o erogación.
- body (String): se trata del cuerpo, contenido, desarrollo o caso.
- responsible (String): nombre, autor o firmante, del documento.
La solución debe poder contar con una función que reciba por parámetro una lista de Document con los 
atributos a priori mencionados y mostrar por pantalla "aprobado" en caso de estar aprobado y "rechazado" 
en caso contrario; el criterio de aprobación es que estén todos los datos completos y que el cuerpo 
contenga al menos 100 caracteres y la fecha no sea mayor a la de hoy.

Considerar que el sistema tiene las siguientes clases y atributos:
Escrito                   Documento                    Ley
- legajo                  - expediente                 - folio
- erogación               - lanzamiento                - emisión
- cuerpo                  - contenido                  - desarrollo
- autor                   - nombre                     - firmante

Desarrollar una solución que permita adecuar estos documentos al formato de Document, incluyendo 
diagramas, etc. */
