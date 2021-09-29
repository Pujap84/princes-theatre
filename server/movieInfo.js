require("dotenv").config();

const axios = require("axios");
const api_key = process.env.MOVIE_API_KEY;

const options = {
    headers: { "x-api-key": api_key },
};

function getFilmworldMovieInfo() {
    axios
        .get(
            `https://challenge.lexicondigital.com.au/api/v2/filmworld/movies`,
            options
        )
        .then((response) => {
            const movieURL = response.data;
            console.log(movieURL);
        });
}
getFilmworldMovieInfo();
