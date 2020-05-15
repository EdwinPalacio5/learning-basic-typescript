//Funciones simples

//Funciones sin paramentros
console.info("Funcion sin parametro")

function mensajeDeBienvenida(){
    console.log("Bienvenido/a")
}

mensajeDeBienvenida()

//Funciones con parametros
var username:string = "Estupinian"
var password:string = "pass"

console.info("Funcion con parametro")

function login(username:string,password:string){
    if(username == "Estupinian" && password == "pass"){
        console.log("Bienvenido: ",username)
    }else{
        console.log("Sus datos no son válidos")
    }
}

login(username,password)


