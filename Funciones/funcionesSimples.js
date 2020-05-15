//Funciones simples
//Funciones sin paramentros
console.info("Funcion sin parametro");
function mensajeDeBienvenida() {
    console.log("Bienvenido/a");
}
mensajeDeBienvenida();
//Funciones con parametros
var username = "Estupinian";
var password = "pass";
console.info("Funcion con parametro");
function login(username, password) {
    if (username == "Estupinian" && password == "pass") {
        console.log("Bienvenido: ", username);
    }
    else {
        console.log("Sus datos no son válidos");
    }
}
login(username, password);
