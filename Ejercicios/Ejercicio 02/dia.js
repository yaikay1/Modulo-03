var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
var hoy = new Date().getDay();

function diaDelaSemana(){
    for (i=0; i< semana.length; i++){
        if (i == hoy){
            alert("El dia de hoy es:  "+ semana[i])
        }
    }
}

diaDelaSemana();