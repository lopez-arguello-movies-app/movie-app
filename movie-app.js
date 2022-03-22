"use strict";
const moviesUrl = "https://knowledgeable-snow-argument.glitch.me/movies"
function getMovies() {
    fetch(moviesUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}
getMovies();
const form = document.getElementById("add-Movie");
//
// form.addEventListener("submit", function(e) {
//     e.preventDefault();

    const movieName = document.getElementById("title").value;
    const movieRating = document.getElementById("rating").value;

    // const booksURL = "https://knowledgeable-snow-argument.glitch.me/books";
    //
    // const bookToPost = {
    //     title: "Eleanor of Aquitaine",
    //     author: {
    //         firstName: "Ralph",
    //         lastName: "Turner"
    //     }
    // }
    //
    // const postOptions = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type' : 'application/json'
    //     },
    //     body: JSON.stringify(bookToPost)
    // };
    //
    // function getBooks(){
    //     fetch(booksURL).then(resp => resp.json()).then(data => console.log(data));
    // }
    // getBooks();
    //
    // fetch(booksURL, postOptions).then(getBooks);

    const movieToPost = {
        "title": "Star Wars",
        "rating": "5"
    }

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(movieToPost)
};

    fetch(moviesUrl, postOptions).then(getMovies).catch(error => console.log(error));
// }



