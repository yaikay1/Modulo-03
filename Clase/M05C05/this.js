class Gato{
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza =raza;
    }
    saluda = function(){
        console.log("hola" + this.nombre);
    }
    
}
let gato1 = new Gato("neko","angora");
gato1.nombre;
gato1.saluda();
this.nombre;

let perro ={
    nombre:"Cachupin",
    raza:"terrier"
}

// aqui le prestamos la funcion saluda a la variable perro
let functionPrestada = gato1.saluda.bind(perro);
perro.saluda();
gato1.saluda.call(perro, "uno", "dos", "tres");
 

function saludar(nombre){
    return function(saludo){
        console.log(saludo + "" +nombre);
    }
}
let f = saludar("denis");
f("hola");