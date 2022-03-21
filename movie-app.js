"use strict";

function getMovies(){
    fetch("movies.json").then(response => response.json()).then(data => $("#movie-container").html(createMovieCards(data)));
}

getMovies()

function createMovieCards(data) {
    let html = '';
// creates 5 duplicate cards with different data populated by the API
    for (let i = 0; i < data.movies.length; i++) {
// takes in date data in the API and displays it in a more readable format
        html += `<div class="movie-cards">
                            <h5>${data.movies[i].title}</h5>
                            <p>Rating: ${data.movies[i].rating}</p>
                            <p>Id: ${data.movies[i].id}</p>
                    </div>`
    }
    return html;
}

const addedMovies = {
        title: $("#title").val(),
        rating: $("#rating").val(),
        id: 5
}

console.log(addedMovies);

const postOption = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(addedMovies)
};

$("button").click(function(){
    console.log("hello");
})

function getBooks(){
    fetch().then(resp => resp.json()).then(data => console.log(data));
}

