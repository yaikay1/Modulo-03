
async function nombrePokemon(name){
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+name); //tiene que esperar cuando consultan con await cuando es una promesa
    let datos = await respuesta.json();//cada vez que se retorne una promesa "promise" debenmos colocar wl "await"
    console.log(datos);
        //let lista = document.querySelector("ul");
}

nombrePokemon("greninja");
async function obtenerPokemon(numero){
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+numero);
    let datos=await respuesta.json();
    console.log(datos);
}
obtenerPokemon(760);