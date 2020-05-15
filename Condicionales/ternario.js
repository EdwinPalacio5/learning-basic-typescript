var miLaptop = {
    marca: "hp",
    memoria: 4,
    almacenamiento: 1024,
    calificacion: 0
};
//USO DE TERNARIO
console.info("TERNARIO");
miLaptop.calificacion = miLaptop.memoria > 8 ? 5 : 3;
//miLaptop.memoria > 8 : condicion
//? 5 : 3              : si la condicion es cierta, se almacenará el valor de 5, sino se almacenará el valor de 3
console.log("La calificación de su laptop es de: ", miLaptop.calificacion);
