"use strict";
const moviesUrl = "https://knowledgeable-snow-argument.glitch.me/movies"

function getMovies() {
    fetch(moviesUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data[1]);
            $("#movie-container").html(createMovieCards(data));
            })
}
getMovies();

const form = document.getElementById("add-Movie");


form.addEventListener("submit", function(e) {
    e.preventDefault();

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
        "title": movieName,
        "rating": movieRating
    }

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(movieToPost)
};

    fetch(moviesUrl, postOptions).then(getMovies).catch(error => console.log(error));
});



function createMovieCards(data) {
    let html = '';
// creates 5 duplicate cards with different data populated by the API
    for (let i = 0; i < data[i].length; i++) {
// takes in date data in the API and displays it in a more readable format
        html += `<div class="movie-cards">
                            <h5>${data[i].title}</h5>
                            <p>Rating: ${data[i].rating}</p>
                            <p>Id: ${data[i].id}</p>
                    </div>`
    }
    return html;
}

