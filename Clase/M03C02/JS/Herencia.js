
let plantas = ['ruda', 'oregano', 'cilantro', 'perejil','tomate']
// elimina plata al final
plantas.pop()
//eliminar planta al principio
plantas.shift();
//agregar planta al final
plantas.push("menta")
//
let plantas2 = ['ruda', 'oregano', 'cilantro', 'perejil','tomate']
var platas2=[];
for(i=0; i<plantas2.length;i++){
    if(plantas[i] != "cilantro"){
        platas2.push(plantas[i]);
    }
}
console.table(platas2);

function eliminarElemento(arrego, elemento){
    var resultado = [];
    for(i =0; i<= arrego.length;i++){
        if(arrego[i] != elemento){
            resultado.push(arrego[i]);
        }
    }
    return resultado;
}
var planta3 = eliminarElemento(plantas2,"tomate");
console.table(planta3);
var auto = ["toyota", "car", "audi", "notes"];
var aures = eliminarElemento(auto, "audi");
console.table(aures);

var numeros =[1,2,3,4,5,6];
//numeros distito de 3
var num2 = numeros.filter(function(numeros){
    return numeros !=3;
})
console.log("numeros distinto de 3 :" +num2);
var num3 = numeros.filter(function(n){
    return n>3;
})
console.log("numeros mayores de 3 :" +num3)

let pla = ['ruda', 'oregano', 'cilantro', 'perejil','tomate']
let resultado = pla.filter((function(text){
    return text !="perejil";
}))
console.table(" sss : " +resultado);
//eliminar planta que comiuence con letra p
let pla2 = ['ruda', 'oregano', 'cilantro', 'perejil','tomate']
let resultado2 = pla.filter((function(planta){
    return planta[0]!='p' //la palabra en ej"  planta[0] significa la primera letra, posicion 0 se compara con 
                          // p c[0] i[1] l[2] a[3] n[4] t[5] r[6] o[7]                      
}))
console.table(" result 2 : " +resultado2);
//eliminiar planta que terminen letra "o 

var p3 = pla2.filter(function(p){
    return p[p.length-1] != "o";
});
console.table("Eliminar plabra letra O : " +p3); 

var fecha = new Date();
console.log(fecha)

var anio = fecha.getFullYear();
console.log("anio : "+anio);
var hoy = new Date(2022,10); //dedfinimos nosotros una fecvha
console.log("hoy : " +hoy);

var edad = Number(prompt("ingrese a'o nacimiento"))
console.log("Tu edad es: " +(anio - edad)) ;

console.log("--------------")
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.toDateString());
console.log(fecha.toTimeString());
//********************************************************************* */

class Usuario{
    constructor(nombre, password){
        this.nombre = nombre;
        this.password = password;
    }
    ingresar = function(){
        console.log("Bienvenido " +this.nombre);

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
    eliminarUsuario = function(nombre){
        arregloUsuario = arregloUsuario.filter(function(u){
            return u.nombre !=nombre;
        })
    }

}

