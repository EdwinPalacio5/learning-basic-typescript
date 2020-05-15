console.info("Clases");
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, carnet, avance) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.carnet = carnet;
        this.avance = avance;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Alumno;
}());
var alumno1 = new Alumno("Kike", "Menjivar", "MT16007", 80);
alumno1.setNombre("Oscar Enrique");
alumno1.avance = 81.25;
console.log("Alumno con clase: ", alumno1);
