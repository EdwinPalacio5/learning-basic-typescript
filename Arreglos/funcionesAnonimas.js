var pacientes = ["Hayley", "Jeimy", "Josué", "Kevin", "Dylan", "Alexis", "Henry"];
console.info("Funcion anonima: Foreach");
//Funcion anónima
//forEach: recorre cada elemento del arreglo
pacientes.forEach(function (paciente) {
    console.log("Accediendo mediante funcion anonima: ", paciente);
});
console.info("Funcion anonima: Find");
//find: en este caso se busca en el arreglo el elemento que incluye el nombre "Josue"
var pacienteEncontrado = pacientes.find((function (paciente) {
    return paciente.includes("Josué");
}));
console.log("El paciente encontrado fue: ", pacienteEncontrado);
