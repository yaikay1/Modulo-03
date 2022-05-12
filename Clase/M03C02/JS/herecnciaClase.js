class Usuario{
    constructor(nombre, password){
        this.nombre = nombre;
        this.password = password;
    }
    ingresar = function(){
        console.log("Bienvenido " +this.nombre);

    }
    salir = function(){
        console.log("adios "+this.nombre);
    }
}

var usuario = new Usuario("Alejandro", "1223");
var usuario2 = new Usuario("francisco", "1223");
var usuario3 = new Usuario("pedro", "1223");

var arregloUsuario = [usuario, usuario2, usuario3];

usuario.ingresar();
console.log("el usuario es " + arregloUsuario[1].nombre);
//************************************************************ */
// se crea la clase administrador y agregar los datos de la clase usuario
class Administrador extends Usuario{
    constructor(nombre, password, sistema){
        super(nombre, password);
        this.sistema = sistema;
    }
    ingresar = function(){
        console.log("Bienvenido administrador " +this.nombre);
    }


    eliminarUsuario = function(nombre){// se crea la funcion eliminar usuario
        arregloUsuario = arregloUsuario.filter(function(u){ //u pertenece al arregloUsuario
            return u.nombre !=nombre;
        })
    }
}
var adm1 = new Administrador ("Cas", "1223");
console.table(adm1);
adm1.ingresar();

class Figura{
    constructor(cantidadLados, medidda){
        this.cantidadLados = cantidadLados;
        this.medidda = medidda;

    }
    perimtero = function(){
        return this.cantidadLados * medidda;
    }
}

class Cuadrado extends Figura{
    constructor(medidda){
    super( 4, medidda);//al ingresar el 4 se le entrego en forma fija la cantidad de lados 
    }   
    area = function(){
        return this.medida * this.medida;
    }
}

class trinagualo extends Figura{
        constructor(medida){
            super(3, medida);
            
            area = function(){
                let h= Math.sqrt(Math.pow(this.medida,2) - Math.pow(this.medida /2,2));
                return (h* this.medida)/2;
            }
        }
}
var cuadrado1 = new Cuadrado(3);
console.log(cuadrado1.area());
// caluclar perimtero sumar todos los lados 
//calcualr area cuadra se multiplica lado x lado
// calcular area de un trinagualo base por la altura  dicvido por 2
