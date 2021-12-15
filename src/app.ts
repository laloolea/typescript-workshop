enum STATUS{ACTIVO,BAJA}
//Creacion de la clase abstracta Persona
// interface Person{
//     nombre:string;
//     edad:number;
//     nac:Date;
//     ciudad:string;
//     pais:string;
// }

abstract class Persona/* implements Person*/{

    protected _edad:number;
    constructor(protected nombre:string,protected apellido:string, protected nac:Date, protected ciudad:string,protected pais:string){
        //Se calcula la edad en base al año actual menos el año que nacio.


        this._edad= new Date().getFullYear() - this.nac.getFullYear(); 
    }
       //Metodo para devover la edad
    public get edad(){
        return this._edad;
    } 
  

}

//Creacion de la clase 
class Estudiante extends Persona{
    constructor(  nombre:string,  apellido:string,  nac:Date,  ciudad:string,   pais:string, protected carrera:string,protected campus:string,protected status:number,protected fechaIngreso:Date){
        super(nombre,apellido,nac,ciudad,pais);
        
    }
    //Metodo que devuelve datos de el estudiante
    getStudentData():string{

        return `Nombre del alumno: ${this.nombre} ${this.apellido}, edad: ${this.edad}, campus: ${this.campus}`;
    }

}

//Creamos un alumno para probar la clase
const lalo = new Estudiante("Eduardo","Gonzalez",new Date(1997, 12, 18),"Hermosillo","Mexico","Ciencias de la Computacion","Unison",STATUS.ACTIVO,new Date(2016, 7, 10));

//Se imprimem sus datos
console.log(lalo);
//se muestra su edad utilizando el .get
console.log(lalo.edad); 
//Mostramos sus datos
console.log(lalo.getStudentData());