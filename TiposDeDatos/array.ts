//Arrays
var listadoDeNombre:Array<string>

listadoDeNombre = [
    "Edwin",
    "Kike",
    "Chepe"
]

console.log("Array: ",listadoDeNombre)

//tamaño de array
console.log("Tamaño de array: ",listadoDeNombre.length)

//acceder a un elemento
console.log("Posicion 0: ", listadoDeNombre[0])
console.log("Posicion 1: ", listadoDeNombre[1])
console.log("Posicion 2: ", listadoDeNombre[2])

//agregar elemento
listadoDeNombre.push("hola")
console.log("Agregando elementos: ",listadoDeNombre)

//quitar elemento con pop, funciona como una pila, es decir ultimo en entrar, primero en salir
listadoDeNombre.pop()
console.log("Quintando elemento: ",listadoDeNombre)

listadoDeNombre.pop()
console.log("Quintando elemento: ",listadoDeNombre)
