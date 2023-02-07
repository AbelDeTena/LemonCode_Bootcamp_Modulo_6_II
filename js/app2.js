//EJERCICIO 2 - GENERADOR

console.log("EJERCICIO 2 - GENERADOR ALEATORIO");

//Con esta función se crea un número aleatorio. Le damos como parámetros rango y valor mínimo.
var generarNumero = (rango, min) => Math.floor(Math.random() * rango) + min;

//Siguiendo las directrices marcadas, tenemos una funcion que tiene como parámetros la cantidad de números que hay que generar, asi que como el valor mínimo y máximo.
//A partir de estos datos:
//1º Generamos un array donde vamos a almacenar los números generados.
//2º Determinamos el rango.
//3º Se realiza un ciclo for, mientras la longitud del array sea menor que la canitdad de numeros deseada.
// En este ciclo vamos generando numeros aleatorios y comprobando mediante un IF que no sean repetidos.
//4º Finalmente los agremos al array y se muestra por consola.

function randonPick(n, min, max) {
  var resultados = [];
  var rango = max - min + 1;
  for (let i = 0; resultados.length < n; i++) {
    newNumber = generarNumero(rango, min);
    if (resultados.indexOf(newNumber) === -1) {
      resultados.push(newNumber);
    }
  }
  console.log(resultados);
}
randonPick(13, 1, 14);
randonPick(10, 1, 100);
randonPick(1, 1, 2);
randonPick(10, 0, 9);
