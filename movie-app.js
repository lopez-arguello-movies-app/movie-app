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


const form = document.getElementById("add-Movie");


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const movieName = document.getElementById("title").value;
    const movieRating = document.getElementById("rating").value;



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
<!--modal button-->
                    <button type="button" class="btn btn-primary model-button" data-bs-toggle="modal" data-bs-target="#exampleModal_${i}">
                        Info
                    </button>
                    <div class="modal fade" id="exampleModal_${i}" tabindex="-1" aria-labelledby="#exampleModal_${i}" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">${data[i].title}</h5>
                                </div>
                                <div class="modal-body">
                                    <p class="movieInfo-${i}"></p>
                                    <p>Rating: ${data[i].rating}</p>
                                    <p>Id: ${data[i].id}</p>
                                    <p class="movieActors-${i}"></p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                            <button class="close-button" onclick="deleteCard(${data[i].id})">X</button>
                    </div>`
//accesses movie posters
        const posterUrl =  "https://www.omdbapi.com/?apikey=" + MOVIE_API + "&t=" + data[i].title
        console.log(data[i].title);
        $.get(posterUrl, {
            appid: MOVIE_API,
        }).done(function(info) {
            // console.log(info);
            $('.movie-cards-' + i).css('background-image', `url(${info.Poster})`);
            $('.movieInfo-' + i).text(info.Plot);
            $('.movieActors-' + i).text(`Actors: ${info.Actors}`)
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




