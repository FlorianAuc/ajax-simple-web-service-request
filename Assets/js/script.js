let quote = document.getElementById('quote');
let author = document.getElementById('author');
let img = document.getElementById('authorimg')

fetch("https://thatsthespir.it/api")
    .then(response => response.json())//response type
    .then(data => {
        //citation
        quote.innerHTML = data.quote;
        //auteur
        author.innerHTML = data.author;
        //image de l'auteur
        img.setAttribute("src", data.photo);
    })//log data
    
    //instruction en cas d'erreur
    .catch(error => quote.innerHTML = error);