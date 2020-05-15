// Funciones que devuelven un valor

console.info("Funcion que devuelve un dato")
//La siguiente función devuelve true si un nuero es par, o false si es impar
function esPar(numero:number):boolean{
    var ispar:boolean = false
    if(numero%2 == 0){
        ispar = true
    }
    return ispar
}

if(esPar(4)){
    console.log("El numero es par")
}else{
    console.log("El numero es impar")
}