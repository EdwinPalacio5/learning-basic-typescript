//Se crea la interfaz, esta interfaz no se transfiere al archivo js, una vez compiplado el js
interface Persona{
    nombre: string,
    apellido: string,
    edad : number,
    peso : number
}

var persona1:Persona = {
    nombre:"Joel",
    apellido:"Amaya",
    edad:22,
    peso:233
}

persona1.nombre = "Joelito"

console.log("Objeto creado con interfaz: ", persona1)