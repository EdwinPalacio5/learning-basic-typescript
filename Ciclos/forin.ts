interface Usuario{
    username:string,
    password:string
}

var listadoUsuarios:Array<Usuario> = [
    {
        username:"diana@gmail.com",
        password:"dianapass"
    },
    {
        username:"vero@gmail.com",
        password:"veropass"
    }
]

//FOR IN
//permite recorrer un arreglo, de una manera legible traves de su posición
console.info("FOR IN")

for(let posicion in listadoUsuarios){
    console.log("Username: ", listadoUsuarios[posicion].username, " Password: ",listadoUsuarios[posicion].password)
}