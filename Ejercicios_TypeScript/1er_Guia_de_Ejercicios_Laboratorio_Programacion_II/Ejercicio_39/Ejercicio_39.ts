// Primer Guia de Ejercicios Laboratorio - Programacion II

// EJERCICIO 39
/* Un satélite que orbita al planeta Tierra, toma imágenes de la superficie; cada vez que puede envía 
las fotos a la estación terrena que está sobrevolando para descargar todos los datos y poder seguir 
operando; el satélite puede capturar hasta 20 imágenes en FMZR (Full Mega Zarpad Resolution) ya que 
luego la memoria se llena.

Las estaciones reciben las imágenes como si fueran una cadena de texto (no menor a 24 caracteres y 
con un largo múltiplo de 8) y las transforman del siguiente modo:
- Los primeros 8 elementos son el código de identificación
- Los siguientes 8 elementos refieren a la zona en la que fue tomada (codificada)
- El resto el resto es la imagen per sé.

Una vez modeladas, tienen que ser procesadas por 3 algoritmos; el primero convierte a mayúsculas todas 
las letras y suma 1 a cada número (si el número resultante es 10, se considera 0), el segundo de los 
procesos trabaja con los elementos entre la posición 9 y 16 de la imagen invirtiendo el orden, y el 
tercero de los procesos elimina los tres primeros caracteres de la cadena si el primer número 
encontrado (recorriendo desde el inicio) es par. 

No puede procederse al procesamiento si el paso anterior no se ejecutó exitosamente.

Más procesos podrían incluirse en un futuro. */
