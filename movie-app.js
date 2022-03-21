"use strict";

function getMovies(){
    fetch("movies.json").then(resp => resp.json()).then(data => $("#movie-container").html(createMovieCards(data)));
}

getMovies();

function createMovieCards(data) {
    let html = '';
// creates 5 duplicate cards with different data populated by the API
    for (let i = 0; i < 4; i++) {
// takes in date data in the API and displays it in a more readable format
        html += `<div class="movie-cards">
                            <h5>${data.movies[i].title}</h5>
                            <p>Rating: ${data.movies[i].rating}</p>
                            <p>Id: ${data.movies[i].id}</p>
                    </div>`
    }
    return html;
}

