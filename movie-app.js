"use strict";

// fetch("movies.json").then(response => response.json()).then(data => $("#movie-container").html(createMovieCards(data)));

const form = document.getElementById("add-Movie");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const movieName = document.getElementById("title").value;
    const movieRating = document.getElementById("rating").value;
    const id = 5;

    fetch("movies.json/",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: movieName,
            rating: movieRating,
            id: id
        }),
    })
        .then(function(response){
            console.log(response)
        return response.json()
    })
        .then(function(data){
        console.log(data)

        $("#movie-container").html(createMovieCards(data));
    })
})


// let movieTitle = $("#title").val()
// let movieRating = $("#rating").val()
//
// const addedMovies = {
//         title: movieTitle,
//         rating: movieRating,
//         id: 5
// }
//
// console.log(addedMovies);
//
// const postOption = {
//     method: "POST",
//     headers: {
//         "Content-Type" : "application/json"
//     },
//     body: JSON.stringify(addedMovies)
// };
// console.log(postOption)
//
// fetch("movies.json", postOption).then(res => {return res.json()}).then(data => console.log(data));


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