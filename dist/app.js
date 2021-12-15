"use strict";
var STATUS;
(function (STATUS) {
    STATUS[STATUS["ACTIVO"] = 0] = "ACTIVO";
    STATUS[STATUS["BAJA"] = 1] = "BAJA";
})(STATUS || (STATUS = {}));
class Persona {
    constructor(nombre, apellido, nac, ciudad, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nac = nac;
        this.ciudad = ciudad;
        this.pais = pais;
        this._edad = new Date().getFullYear() - this.nac.getFullYear();
    }
    get edad() {
        return this._edad;
    }
}
class Estudiante extends Persona {
    constructor(nombre, apellido, nac, ciudad, pais, carrera, campus, status, fechaIngreso) {
        super(nombre, apellido, nac, ciudad, pais);
        this.carrera = carrera;
        this.campus = campus;
        this.status = status;
        this.fechaIngreso = fechaIngreso;
    }
    getStudentData() {
        return `Nombre del alumno: ${this.nombre} ${this.apellido}, edad: ${this.edad}, campus: ${this.campus}`;
    }
}
const lalo = new Estudiante("Eduardo", "Gonzalez", new Date(1997, 12, 18), "Hermosillo", "Mexico", "Ciencias de la Computacion", "Unison", STATUS.ACTIVO, new Date(2016, 7, 10));
console.log(lalo);
console.log(lalo.edad);
console.log(lalo.getStudentData());
