
// clASE
class Libro{
    constructor(nombre, autor, editorial, genero){
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
    }
    mostrarLibro = function(){
        return ("Nombre libro : " +this.nombre + "Autor : "+this.autor+ "Editoria : "+ this.editorial + "Genero :" + this.genero);
    }
}


function selector() {
    let options = [{
        value: "J.K.Rowling",
        text: "J.K.Rowling"
    },
    {   value: "value2",
        text : "Mario Escobar"                   
    },
    {
         value: "Value3",
         text: "Stephen King"   
    }
    ]
 
    var select = createSELECT(options);
    document.body.appendChild(select);
 
} 

var libro1 = new Libro("Harry y el caliz de fuego","J.K.Rowling", "Salamandra","ficcion");
var libro2 = new Libro("La profesia maya","Mario Escobar", "La Factoria", "thriller");
var libro3 = new Libro("IT", "Stephen King", "debolsillo", "terror");

libro1.mostrarLibro();
var lleno = [libro1, libro2, libro3]


function createSELECT(options) {
 
    let select = document.createElement("select");
    if (options && Array.isArray(options)) {
        for (let index = 0; index < options.length; index++) {
            const element = options[index];
 
            let option = document.createElement("option");
 
            if (element.value) {
                option.setAttribute("value", element.value);
            }
            if (element.text) {
                let optionText = document.createTextNode(element.text);
                option.appendChild(optionText);
            }
 
            select.appendChild(option);
        }
    }
 
    return select;
}
 

window.onload = selector;

function filtrarPorAutor(){
    for(i = 0; i< lleno.length; i++){
        if ( select == lleno[i].autor){
            let liAutor = document.createElement('li');
            liAutor.innerText = "Autor(a): "+lleno[i].autor;
            let liLibros = document.createElement('li');
            liLibros.innerText = "Sus libros: "+lleno[i].nombre;
            console.log(liLibros);
            contenedor.appendChild(liAutor)
            contenedor.appendChild(liLibros)

            // al buscar dejar el campo vacio y color verde si fue correcto
            buscar.value = "";
            buscar.style.backgroundColor="#77dd77"; 
        } 
    }
}
/*
select.addEventListener("change", function(){
    var seleccion = select.options.value;
    console.log(seleccion);
    //filtrarPorAutor(seleccion);
})*/
    

