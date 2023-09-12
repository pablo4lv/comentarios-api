document.addEventListener("DOMContentLoaded",() => {

let api = 'https://jsonplaceholder.typicode.com/comments' ;
let comentarios = document.getElementById("comments-container");
let form = document.getElementById("comment-form");

console.log(comentarios);
let Array = []; 
let lista = document.createElement("ul");
comentarios.appendChild(lista);

function mostrar(){
    lista.innerHTML = ``
    Array.forEach(element => {
        lista.innerHTML += `
        <li>
            <p><strong>Name: ${element.name}</strong></p>
            <p>${element.body}</p>
            <p class="ratings">Puntuacion:${estrellas(element.rating)}</p>
        </li>
        <br>
        `
    });
}

function estrellas(num){
    let stars = "";
    for (let i = 0;i<num;i++){
        stars += '★'
    }
    for (let j=num;j<5;j++){
        stars += `☆`
    }
    return stars;
}

fetch(api)
        .then(response => response.json())
        .then(json => {
            for(let i=0;i<10;i++){
                Array.push(json[i]);
                Array[i].rating = getRandomIntInclusive(1, 5);
            }
        mostrar()
})


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let comentario = {
        name: "user",
        body: document.getElementById("comment").value,
        rating : document.getElementById("rating").value,
    }

    Array.push(comentario);
    mostrar();
    console.log(Array);
})


});

