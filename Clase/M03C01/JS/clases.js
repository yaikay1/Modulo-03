
class Auto{
    constructor(marca, modelo ,anio){
        this.marca = marca;
        this. modelo = modelo;
        this.anio = anio;
    }
}

let auto = new Auto("audi", "IT", 2003);

class Rectagulo{
    constructor(largo, ancho){
    this.largo = largo;
    this.ancho = ancho;    
    }
    area = function(){
        return this.largo * this.ancho;
   }
   perimetro = function(){
    return (this.largo + this.ancho);
   }
}

let rect1 = new Rectagulo(10, 20);
console.log(rect1.area());
rect1.ancho = 30;
console.log(rect1.perimetro());


/*
var lista = document.createElement('ul');
var item1 = document.createElement('li');
var item2 = document.createElement('li');
var item3 = document.createElement('li');

item1 = nombre;
item2 = comuna;
item3 = rut;
lista.appendChild(imte1);
lista.appendChild(item2);
lista.appendChild(item3);
*/
