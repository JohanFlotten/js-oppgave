import movies from './module.js';
// Get the card-container element
const cardContainer = document.getElementById("card-container");

// Iterate over the movies array
movies.forEach(movie => {
    // Create a new card element
    const card = document.createElement("div");
    card.classList.add("card");

    // Create elements for movie title and rating
    const titleElement = document.createElement("h3");
    titleElement.textContent = movie.title;
    titleElement.classList.add("movie-title");

    const ratingElement = document.createElement("p");
    ratingElement.textContent = `Rating: ${movie.rating}`;
    ratingElement.classList.add("movie-rating");

    // Append elements to the card
    card.appendChild(titleElement);
    card.appendChild(ratingElement);

    // Append the card to the card-container
    cardContainer.appendChild(card);
});
