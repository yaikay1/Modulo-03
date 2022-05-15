class Gato{
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
        
    }
}

let gato1 = new Gato("pez", "siames");
let gato2 = new Gato("pinky", "persa");

let gatoJSON = JSON.stringify(gato1);
console.log(gato1);
console.log("---GATO JSON BAJO ---");
console.log(gatoJSON)

console.log("------gatoobj----")
let gatoObj = JSON.parse(gatoJSON);
console.log(gatoObj);

console.log("---arreglo---")
let arregloGatos = [gato1, gato2];
let arregloGatosJSON= JSON.stringify(arregloGatos);
console.log(arregloGatosJSON);

console.log("============== POKEMON API =======================")
$.getJSON("https://pokeapi.co/api/v2/pokemon/25", function(data){
    let pokemon = data;
    console.log(pokemon)
    console.log("Nombre pokemon" +pokemon.name);
    console.log("Nombre id" +pokemon.id);
    for(i=0;i<pokemon.types.length;i++){
        console.log("tipos pokemon" +pokemon.types[i].type.name);
    }
    console.log("Foto : " + pokemon.sprites.front_default);
})

console.log("============== weI =======================")
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
    console.log(data.main.temp)
    console.log(data)
})

$.getJSON("https://dog.ceo/api/breeds/image/ra")