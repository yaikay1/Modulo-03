let foto = document.querySelector("img");
let btn =  document.getElementById("boton")



btn.addEventListener("click", function(e){
    $.getJSON("https://dog.ceo/api/breeds/image/random", function(data){        
        let objeto = data;
        let urlImage = data.message;
        foto.setAttribute("src", urlImage);
        $.getJSON("https://dog.ceo/api/breeds/list/all", function(lista){
            let lista1 = lista;
            var list = document.getElementsByClassName(".lista");
            let liAutor = document.createElement('li');
            liAutor.innerText = "Rasas: "+list;
            console.log(list);
            list.appendChild(liAutor);
            console.log(lista1);
        })
    })
})

