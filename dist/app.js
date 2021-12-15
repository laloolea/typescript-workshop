"use strict";
var STATUS;
(function (STATUS) {
    STATUS[STATUS["ACTIVO"] = 0] = "ACTIVO";
    STATUS[STATUS["BAJA"] = 1] = "BAJA";
})(STATUS || (STATUS = {}));
class Persona {
    constructor(persona) {
        this.persona = persona;
        this.persona.edad = new Date().getFullYear() - this.persona.nac.getFullYear();
    }
    get edad() {
        return this.persona.edad;
    }
}
class Estudiante extends Persona {
    constructor(estudiante) {
        super(estudiante);
        this.estudiante = estudiante;
    }
    getStudentData() {
        return `Nombre del alumno: ${this.estudiante.nombre} ${this.estudiante.apellido}, edad: ${this.estudiante.edad}, campus: ${this.estudiante.campus}`;
    }
    getContext() {
        return this.estudiante;
    }
}
const laloInformation = { nombre: "Eduardo", apellido: "Gonzalez", nac: new Date(1997, 12, 18), ciudad: "Hermosillo", pais: "Mexico", carrera: "Ciencias de la Computacion", campus: "Unison", status: STATUS.ACTIVO, fechaIngreso: new Date(2016, 7, 10) };
const lalo = new Estudiante(laloInformation);
console.log(lalo.getStudentData());
console.log(lalo.getContext());
console.log(lalo.edad);
console.log(lalo.getStudentData());
