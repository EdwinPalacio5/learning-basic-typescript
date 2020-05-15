var listadoUsuarios = [
    {
        username: "edwin@gmail.com",
        password: "edwinpass"
    },
    {
        username: "joel@gmail.com",
        password: "joelpass"
    }
];
//FOR OF
//permite recorrer un arreglo de una manera más legible
console.info("FOR OF");
for (var _i = 0, listadoUsuarios_1 = listadoUsuarios; _i < listadoUsuarios_1.length; _i++) {
    var usuario = listadoUsuarios_1[_i];
    console.log("Username: ", usuario.username, " Password: ", usuario.password);
}
