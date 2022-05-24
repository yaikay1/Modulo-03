
var cuadro = document.querySelectorAll(".square")

var colorDisplay = document.getElementById("colorDisplay")
var mensaje = document.getElementById("message");
var btn1 = document.getElementById("easy");
var btn2 = document.getElementById("hard");
var jugar = document.getElementById("jugar")
var color = [];

//--------------botones -------------------
btn1.addEventListener("click", function(){
    btn2.disabled = true; 
    llenar(2);
    for(i =0 ; i<= 2; i++){
    cuadro[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        consultar(clickedColor);
        if (mensaje.innerText == "Fallaste..Intentalo de nuevo"){
            this.style.backgroundColor= "rgb(35,35,35)";
        }else{
            colorDisplay.style.background = clickedColor;
                for (x = 0; x <= 2 ;x++){
                    cuadro[x].style.backgroundColor= clickedColor;
                    cuadro[x].disable;
                }
            }
    
        })
    }   
})
btn2.addEventListener("click", function(){
    llenar(5); 
    btn1.disabled = true
    for(i =0 ; i<= 5; i++){
        cuadro[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
            consultar(clickedColor);
            if (mensaje.innerText == "Fallaste..Intentalo de nuevo"){
                this.style.backgroundColor= "rgb(35,35,35)";
            }else{
                colorDisplay.style.background = clickedColor;
                    for (x = 0; x <= 5 ;x++){
                        cuadro[x].style.backgroundColor= clickedColor;
                        cuadro[x].disable;
                    }
                }
        
            })
        }    
})
jugar.addEventListener("click", function(){
    location.reload();
})
//funciones
function generateRandomColors(){
    let colores = Math.floor(Math.random()*256)+", " + Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256);
    return colores;
}
function llenar(vueltas){
    
    for (i = 0; i <= vueltas ;i++){
        color.push(generateRandomColors());
         
        colorDisplay.innerHTML = ("rgb("+random+")");
        cuadro[i].style.backgroundColor= "rgb("+color[i]+")";
        var random = randoXwords(color); 
    }    
           
    
}
//--- asignacion ramdon
function easy(){

}
function randoXwords(array){     
    var rand = Math.floor(Math.random()*array.length);     
    var rValue = array[rand];  
    return rValue; 
} 
function consultar(pregunta){
    if (pregunta == colorDisplay.innerText){
        mensaje.innerText = "Winerrrrr....."
        
    }else{
        mensaje.innerText = "Fallaste..Intentalo de nuevo"
        
    }

}





