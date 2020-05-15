//Uso de Switch
var opcionMenu:number = 4

//Variable enumerable, permite crear un objeto al cual puede server como
//un catalogo de opciones a las que se les asigna una numeración

enum tipoOpcion{
    canciones = 1,
    inicio,
    perfil
}

switch(opcionMenu){
    case tipoOpcion.canciones :{
        console.log("Has elegido la opción: ",opcionMenu)
        break
    }
    case tipoOpcion.inicio :{
        console.log("Has elegido la opción: ",opcionMenu)
        break
    }
    case tipoOpcion.perfil :{
        console.log("Has elegido la opción: ",opcionMenu)
        break
    }
    default :{
        console.log("La opción: ",opcionMenu, " no es válida")
        break
    }
}
