console.info("Clases")

class Alumno{
    private nombre:string;
    private apellido: string;
    private carnet: string;
    avance: number;

    constructor(nombre:string, apellido:string, carnet:string, avance:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.carnet = carnet;
        this.avance = avance;
    }

    getNombre():string{
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }
}

var alumno1:Alumno = new Alumno("Kike","Menjivar","MT16007",80);

alumno1.setNombre("Oscar Enrique")
alumno1.avance = 81.25

console.log("Alumno con clase: ", alumno1)