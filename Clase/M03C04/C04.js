let foto = document.querySelector("img")
//let foto2 = $(img);
let btn = document.querySelector("#boton")
//let btn =$(#boton);

btn.addEventListener("click", function(e){
    $.getJSON("https://dog.ceo/api/breeds/image/random", function(data){
        let objeto = data;
        let urlImage = data.message;

        foto.setAttribute("src", urlImage);
    })
})

