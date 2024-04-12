import movies from './module.js';

// Get the card-container element
const cardContainer = document.querySelector("#card-container");
// Iterate over the movies array
movies.forEach(movie => {
    // Create a new card element
    const card = document.createElement("div");
    card.classList.add("card");

    card.style.backgroundImage = movie.backgroundImage;

    const movieQuallity =document.createElement("h3")
    movieQuallity.textContent = movie.movieQuallity;
    movieQuallity.classList.add("movie-quallity")
    card.classList.add("movie-quallity")

    // Create elements for movie title and rating
    const titleElement = document.createElement("h3");
    titleElement.textContent = movie.title;
    titleElement.classList.add("movie-title");

    const ratingElement = document.createElement("p");
    ratingElement.textContent = `Rating: ${movie.rating}`;
    ratingElement.classList.add("movie-rating");

    // Append elements to the card
    card.appendChild(movieQuallity);
    card.appendChild(titleElement);
    card.appendChild(ratingElement);

    // Append the card to the card-container
    cardContainer.appendChild(card);
});

import {latestMovies} from './module.js';

const rightContainer =document.querySelector("#right-container");

latestMovies.forEach(lMovies => {

    const card = document.createElement("div")
    card.classList.add("rcard")

    card.style.backgroundImage = lMovies.backgroundImage;

    const rcmovieQuallity =document.createElement("h3")
    rcmovieQuallity.textContent = lMovies.movieQuallity;
    rcmovieQuallity.classList.add("movie-quallity")
    card.classList.add("movie-quallity")

    const rctitleElement = document.createElement("h3")
    rctitleElement.textContent = lMovies.title;
    rctitleElement.classList.add("movie-title");
    card.classList.add("movie-title")

    const rcratingElement =document.createElement("p")
    rcratingElement.textContent = `Rating: ${lMovies.rating}`;
    rcratingElement.classList.add("movie-rating");
    card.classList.add("movie-rating")

    card.appendChild(rcmovieQuallity);
    card.appendChild(rctitleElement);
    card.appendChild(rcratingElement);

    rightContainer.appendChild(card);
});