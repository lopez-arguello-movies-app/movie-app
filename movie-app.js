"use strict";
const moviesUrl = "https://knowledgeable-snow-argument.glitch.me/movies"

function getMovies() {
    fetch(moviesUrl)
        .then(response => {
            $('#movie-container').html('Loading ...');
            return response.json();
        })
        .then(data => {
            $("#movie-container").html(createMovieCards(data));
            });
}
getMovies();

// const posterUrl =  "https://www.omdbapi.com/?i=tt3896198&apikey=" + MOVIE_API + "&te" + data[i].title
//
// $.get(posterUrl, {
//     appid: MOVIE_API,
// }).done(function(data) {
//     console.log(data.Poster);
// });


// fetch("https://pinto-protective-trombone.glitch.me/movies")
// //     .then(function(resp){
// //         $("#output").html("Loading ...");
// //         return resp.json();
// //     })
// //     .then(setTimeout(function(data){
// //         $("#output").html("Request complete");
// //         console.log(data);
// //     }, 5000));

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

const deleteOption = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
}

function createMovieCards(data) {
    let html = '';
// creates 5 duplicate cards with different data populated by the API
    for (let i = 0; i < data.length; i++) {
// takes in date data in the API and displays it in a more readable format
        html += `<div class="movie-cards-${i} movie-cards">
                            <h5>${data[i].title}</h5>
                            <div class="info">
                                <p>Rating: ${data[i].rating}</p>
                                <p>Id: ${data[i].id}</p>
                            </div>
                            <button onclick="deleteCard(${data[i].id})">X</button>
                    </div>`
//accesses movie posters
        const posterUrl =  "https://www.omdbapi.com/?apikey=" + MOVIE_API + "&t=" + data[i].title
        console.log(data[i].title);
        $.get(posterUrl, {
            appid: MOVIE_API,
        }).done(function(info) {
            console.log(info.Poster);
            $('.movie-cards-' + i).css('background-image', `url(${info.Poster})`);
        });
    }
    return html;
}


function deleteCard(id){
    // console.log("hello")
    fetch(moviesUrl + '/' + id, deleteOption).then(getMovies)
}

//update movie info
const updateForm = document.getElementById("edit-Movie");


updateForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const newMovieName = document.getElementById("new-title").value;
    const newMovieRating = document.getElementById("new-rating").value;
    const movieToEdit = document.getElementById("to-edit").value;
    console.log(movieToEdit);

    let modification = {
        "title": newMovieName,
        "rating": newMovieRating
    }

    const putOptions = {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(modification)
    }

    fetch(moviesUrl + '/' + movieToEdit, putOptions).then(getMovies);

});




