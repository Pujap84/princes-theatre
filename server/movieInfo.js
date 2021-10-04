// require("dotenv").config();

const axios = require("axios");
const api_key = process.env.MOVIE_API_KEY;

const options = {
    headers: { "x-api-key": api_key },
};

function getMovieInfo() {
    let URLs = [
        "https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies",
        "https://challenge.lexicondigital.com.au/api/v2/filmworld/movies",
    ];
    return Promise.all(URLs.map(getData));
}

function getData(URL) {
    return axios
        .get(URL, options)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return { error: "refresh page" };
            // console.log(error);
        });
}

// getMovieInfo()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         alert("Refresh Page");
//         // console.log(error);
//     });

module.exports = getMovieInfo;
