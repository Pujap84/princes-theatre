require("dotenv").config();

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
    return Promise.all(URLs.map(fetchData));
}

function fetchData(URL) {
    return axios
        .get(URL, options)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

getMovieInfo()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

// let URLs = [
//     "https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies",
//     "https://challenge.lexicondigital.com.au/api/v2/filmworld/movies",
// ];

// function getAllData(URLs) {
//     return Promise.all(URLs.map(fetchData));
// }

// function fetchData(URL) {
//     return axios
//         .get(URL, options)
//         .then((response) => {
//             return response.data;
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// getAllData(URLs)
//     .then((resp) => {
//         console.log(resp);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// let URL1 = "https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies";
// let URL2 = "https://challenge.lexicondigital.com.au/api/v2/filmworld/movies";

// const promise1 = axios.get(URL1);
// const promise2 = axios.get(URL2);

// Promise.all([promise1, promise2]).then((values) => {
//     return values;
// });

// function getCinemaworldMovieInfo() {
//     let promise1 = axios.get(
//         `https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies`,
//         options
//     );
//     let promise2 = axios.get(
//         `https://challenge.lexicondigital.com.au/api/v2/filmworld/movies`,
//         options
//     );
//     Promise.all([promise1, promise2])
//         .then((values) => {
//             return values;
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// getCinemaworldMovieInfo();
// module.exports = getCinemaworldMovieInfo;
// getAllData();
module.exports = getMovieInfo;
