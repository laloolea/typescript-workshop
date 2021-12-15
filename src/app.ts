enum STATUS{ACTIVO,BAJA}
//Creacion de la clase abstracta Persona
interface Person{
    nombre:string;
    apellido:string;
    edad?:number;
    nac:Date;
    ciudad:string;
    pais:string;
}
interface Student extends Person{
    carrera:string;
    campus:string;
    status:number;
    fechaIngreso:Date;
}
abstract class Persona{
    constructor(protected persona:Person){
        //Se calcula la edad en base al año actual menos el año que nacio.

        this.persona.edad = new Date().getFullYear() - this.persona.nac.getFullYear(); 
    }
       //Metodo para devover la edad
    public get edad(){
        return this.persona.edad;
    } 
  

}

//Creacion de la clase 
class Estudiante extends Persona{
    constructor( protected estudiante:Student){
        super(estudiante);
        
    }
    //Metodo que devuelve datos de el estudiante
    getStudentData():string{

        return `Nombre del alumno: ${this.estudiante.nombre} ${this.estudiante.apellido}, edad: ${this.estudiante.edad}, campus: ${this.estudiante.campus}`;
    }

    public getContext(){
        return this.estudiante;
    }

}

//Creamos un alumno para probar la clase
const laloInformation : Student= {nombre:"Eduardo",apellido:"Gonzalez",nac:new Date(1997, 12, 18),ciudad:"Hermosillo",pais:"Mexico",carrera:"Ciencias de la Computacion",campus:"Unison",status:STATUS.ACTIVO,fechaIngreso:new Date(2016, 7, 10)}
const lalo = new Estudiante(laloInformation);

//Se imprimem sus datos
console.log(lalo.getStudentData());
//se muestra su edad utilizando el .get
console.log(lalo.getContext());
console.log(lalo.edad); 
//Mostramos sus datos
console.log(lalo.getStudentData());
