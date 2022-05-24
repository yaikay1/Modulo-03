let h2 = document.querySelector(".chistes");
let boton = document.getElementById("cargar");



boton.addEventListener("click", function(){
    $.getJSON("https://api.chucknorris.io/jokes/random", function(data){
        let objeto = data.value;
        let imagenUrl = data.icon_url;
        
        
        h2.innerHTML = ("Chiste del dios Chuck : "+objeto);

    })
})