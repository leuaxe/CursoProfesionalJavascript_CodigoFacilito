/*el primer argumento que recibe la funcion dentro del metodo reduce se
un acumulador y no el elemento que se esta iterando, el segundo
argumento si sera el elemento que se itere. */

// let numeros = [1, 2, 3, 4, 5];

// let suma = numeros.reduce(function(acc, numero){
//     return acc + numero;
// }, 0); //el cero es el valor que le damos al acumulador(acc)

// console.log(suma); 15

//otro ejemplo
let nombres = ["Uriel", "Cody"];

let html = nombres.reduce(function(acc, nombre){
    return acc + "<li>" + nombre + "</li>";
}, "");

console.log(html);  //<li>Uriel</li><li>Cody</li>