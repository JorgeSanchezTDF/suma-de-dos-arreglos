/* Sumar Dos Arreglos

• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 
los números de los arreglos los carga el usuario
• Meterlo todo en una funcion que devuelva el arreglo
*/

let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);

function SumarArreglos(arregloA: number[], arregloB: number[]): number[] {
  let resultado: number[] = new Array(6);
  for (let i = 0; i < arreglo1.length; i++) {
    resultado[i] = arreglo1[i] + arreglo2[i];
  }
  return resultado;
}

for (let i = 0; i < arreglo1.length; i++) {
  arreglo1[i] = Number(prompt("Ingrese primer lista de numeros"));
}

for (let i = 0; i < arreglo2.length; i++) {
  arreglo2[i] = Number(prompt("Ingrese segunda lista de numeros"));
}

let resultado: number[] = SumarArreglos(arreglo1, arreglo2);
console.log(resultado);
