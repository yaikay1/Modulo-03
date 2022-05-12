

var lista = document.querySelector(".lista")
var id = document.getElementById("id");
var nombre = document.getElementById("nombre");
var boton = document.querySelector("#boton");

class Usuario{
    constructor(id,  nombre){
        this.id = id;
        this.nombre = nombre;
     }
}
var arreglo = [];

boton.addEventListener("click", function(){
    const detalle = document.createElement('li')
    let usuario = new Usuario(id.value ,nombre.value);
    arreglo.push(usuario);
    detalle.innerText = "ID : " + usuario.id;
    lista.appendChild(detalle);    
    console.log(arreglo);
})
    
    


     

