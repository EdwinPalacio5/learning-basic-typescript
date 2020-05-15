interface Usuario{
    username:string,
    password:string
}

var listadoUsuarios:Array<Usuario> = [
    {
        username:"edwin@gmail.com",
        password:"edwinpass"
    },
    {
        username:"joel@gmail.com",
        password:"joelpass"
    }
]

//FOR OF
//permite recorrer un arreglo de una manera más legible
console.info("FOR OF")

for(let usuario of listadoUsuarios){
    console.log("Username: ", usuario.username, " Password: ",usuario.password)
}