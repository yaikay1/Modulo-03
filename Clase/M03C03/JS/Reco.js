const gato =  {
    nombre: "pez",
    raza: "British",
    pelaje: "corto",
    sexo: macho
}
class Gato{
    constructor(nombre, raza, pelaje, sexo){
        this.nombre;
        this.raza;
        this.pelaje;
        this.sexo;
    }    
}
const juego = {
    tiempo : 30,
    paseo : "si"

}
const veterinario = {
    nombre: "pedro",
    control: "si",
    vacunas: "si"
}
const casa = {
    cuantos: 3,
    perros: "si",
    peligros: "si"
    
}

//clase televisonr
class Televisor {
    constructor( tamano, marca, modelo){
        this.tamano = tamano;
        this.marca = marca;
        this.modelo = modelo

    }
}
const pared = {
    resistente: "si",
    revestimiento: ladrillos
}
const accesorios = {
    adaptador : "no"
}

// 4 archivos
class Archivos{
    constructor(nombre, tamano, ruta ){
        this.nombre = nombre;
        this.tamano = tamano;
        this.ruta = ruta;
    }
}
const documento = {
    tipo: "exe",
    ejecucion: false
}

//5
class Canciones{
    constructor(autor, nombre, duracion){
        this.autor = autor;
        this.nombre = nombre;
        this.duracion = duracion;
    }
}
//6 
class Discografia{
    constructor(autor, disco, anio){
        this.autor = autor;
        this.disco = disco;
        this.anio = anio;
    }
    
}
const nube = {
    derechos : "si",
    pagados: false
}
const reproductor = {

}

class Playlist extends Canciones{
    constructor(genero)
    super(auto,nombre, duracion){
     }
     agregarCanciones = function(cancion){
        var canciones = [];
        canciones.forEach(item => canciones.push(cancion));
    }
    eliminarCanciones = function(cancion){
        arregloCancio = arregloCnacion.filter(function(u){
            return u.cancion !=cancion;
        })
    }
    eliminarAutor = function(autor){
        for(i=0; i<=autor.lenght;i++){
            
        }
    }
}

