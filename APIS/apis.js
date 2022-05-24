let foto = document.querySelector("img");
let btn =  document.getElementById("boton")


/*
btn.addEventListener("click", function(e){
    $.getJSON("https://dog.ceo/api/breeds/image/random", function(data){        
        let objeto = data;
        let urlImage = data.message;
        foto.setAttribute("src", urlImage);
        $.getJSON("https://dog.ceo/api/breeds/list/all", function(lista){
            let lista1 = lista;
            var list = document.getElementById("lista");
            let liAutor = document.createElement('li');
            liAutor.innerText = "Rasas: "+list;
            console.log(list);
            //list.appendChild(liAutor);
            console.log(lista1);
        })
    })
})
*/
async function buscaRazas(){
    let respuesta = await fetch("https://dog.ceo/api/breeds/list/all") //tiene que esperar cuando consultan con await cuando es una promesa
    //console.log(respuesta) 
    let datos = await respuesta.json();//cada vez que se retorne una promesa "promise" debenmos colocar wl "await"
    //console.log(datos);
    let lista = document.querySelector("ul");

    for(r in datos.message){// r para que reprenserta algo | lee propiedad x propiedo del objeto 
        let elemento = document.createElement("li");
        elemento.innerText = r;
        // agregar comportamiento 
       elemento.addEventListener("click", function(e){
            let foto = document.querySelector("img");
            let urlFoto =  buscarImagenPorRaza(this.innerText); //como se llama funcion asincrona tambnien se le debe colocar
            // await a la llamada de la funcion
            //console.log(e);
            foto.setAttribute("src", urlFoto);
        })

        lista.appendChild(elemento)



    } 
}   
buscaRazas();

async function buscarImagenPorRaza(raza){
    let url ="https://dog.ceo/api/breed/" +raza+ "/images/random";
    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    //console.log(datos);
    return datos.message;
}
async function cargarPerros(){
    let respuesta = await fetch("https://dog.ceo/api/breeds/list/all");
    let datos = await respuesta.json;
    for( r in datos.message){
        console.log()
    }
}
