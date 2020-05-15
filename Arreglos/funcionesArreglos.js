var pacientes = ["Hayley", "Jeimy", "Josué", "Kevin", "Dylan", "Alexis", "Henry"];
console.info("Funciones de arreglos");
console.log("Lista original: ", pacientes);
//------------------------------------- AGREGAR -----------------------------------------------
//Push: agrega un elemento al final del arreglo
pacientes.push("Ashley");
console.log("Agregando con push, al final del arreglo:", pacientes);
//unshift: agrega un elemento al inicio del arreglo
pacientes.unshift("Adriancito");
console.log("Agregando con unshift, al inicio del arreglo: ", pacientes);
//------------------------------------- ELIMINAR -----------------------------------------------
//Pop: elimina el ultimo elemento del arreglo
pacientes.pop();
console.log("Eliminando con pop, el ultimo elemento en el arreglo: ", pacientes);
//shift: elimina el primer elemento en el arreglo
pacientes.shift();
console.log("Eliminando con shift: el primer elemento en el arreglo ", pacientes);
//Splice: elimina mediante posición, el primer parametro es la posición, y el segundo
//parametro corresponde a cuantos elementos se desean elminar a partir de la posición indicada 
pacientes.splice(1, 1);
console.log("Eliminando con splice, la posicion 1: ", pacientes);
//------------------------------------- ORDENAMIENTO -----------------------------------------------
//Sort: ordena el arreglo ascendemente
pacientes.sort();
console.log("Lista ordenada:", pacientes);
//--------------------------------------- ACCESO ---------------------------------------------------
//Accediendo a un elemento en especifico
console.log("Accediendo al elemento del indice 3:", pacientes[3]);
