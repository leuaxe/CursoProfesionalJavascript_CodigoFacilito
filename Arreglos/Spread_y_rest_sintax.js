//Iterable
//spread syntax (...)


// let arreglo = [1, 2, 3];
// let nombre = "Uriel";

// console.log(nombre);  //Uriel
// console.log(...nombre); // U r i e l

// Rest parameters (...)
//la idea es que dos valores que estan separados se unifiquen en un
// solo arreglo
// function demo(...arr){
//     console.log(arr);
// }

// demo(10, 2);  //[ 10, 2 ]

//otro ejemplo de rest
function promedio(nombre, ...calificaciones){
    console.log(nombre, calificaciones);
}

promedio("Uriel", 1, 10, 5, 4, 20);         Uriel   [ 1, 10, 5, 4, 20 ]