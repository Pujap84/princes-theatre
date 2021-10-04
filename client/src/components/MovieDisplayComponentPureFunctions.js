/**
 * This file contains all the pure functions which are used in the main MovieDisplay Component. These functions were separated from the main Component MovieDisplay for  testing reasons
 * @author Puja Pradhan
 * @date Oct 2021
 */

/**
 * This function passes the stored api response data array from state(movieDisplay) and goes through the first provider movie titles and stores them all the titles in an array
 * @param {array} moviesData
 * @returns an array of strings with movie titles from first provider
 */
export function getMovieNames(moviesData) {
    if (!moviesData || !moviesData.length) {
        return [];
    }
    let movieNames = moviesData[0]["Movies"];
    // console.log(movieNames);
    const moviesArray = movieNames.map((movie) => {
        return movie["Title"];
    });
    return moviesArray;
}

/**
 * This function passes the stored api response data array from state(movieDisplay) and gets both the provider names in string format and stores them in an array
 * @param {array} moviesData
 * @returns an array of strings with provider names
 */
export function getProviderInfo(moviesData) {
    if (!moviesData || !moviesData.length) {
        return [];
    }
    let movieProvider1 = moviesData[0]["Provider"];
    let movieProvider2 = moviesData[1]["Provider"];
    let array = [];
    array.push(movieProvider1, movieProvider2);
    return array;
}

/**
 * This function passes the user input(movie-name) from dropdown box and uses the stored api response data array from state(movieDisplay) and matches the user-ipnput movie name against the first provider(Cinemaworld) response data and gets the price for that movie and coverts the price into a string with two decimal points
 * @param {array} moviesData
 * @param {string} input
 * @returns a string of movie price with two decimal points
 */
export function getMovieStreamingCostCinemaWorld(moviesData, input) {
    if (!moviesData || !moviesData.length) {
        return [];
    }

    let movieObj1 = moviesData[0].Movies.filter((movie) =>
        movie.Title.includes(input)
    );

    let movieObjCostCinemaWorld = movieObj1[0]["Price"].toFixed(2);

    return movieObjCostCinemaWorld;
}

/**
 * This function passes the user input(movie-name) from dropdown box and uses the stored api response data array from state(movieDisplay) and matches the user-ipnput movie name against the second provider(Filmworld) response data and gets the price for that movie and coverts the price into a string with two decimal points
 * @param {array} moviesData
 * @param {string} input
 * @returns a string of movie price with two decimal points
 */
export function getMovieStreamingCostFilmWorld(moviesData, input) {
    if (!moviesData || !moviesData.length) {
        return [];
    }

    let movieObj1 = moviesData[1].Movies.filter((movie) =>
        movie.Title.includes(input)
    );

    let movieObjCostFilmWorld = movieObj1[0]["Price"].toFixed(2);

    return movieObjCostFilmWorld;
}

/**
 * This function passes the user input(movie-name) from dropdown box and uses the stored api response data array from state(movieDisplay) and matches the user-input movie name against the first provider(Cinemaworld) response data and gets the url for movie image(Poster) for that movie
 * @param {array} moviesData
 * @param {string} input
 * @returns a string of movie image url
 */
export function getCinemaWorldMovieImage(moviesData, input) {
    if (!moviesData || !moviesData.length) {
        return [];
    }

    let movieObj1 = moviesData[0].Movies.filter((movie) =>
        movie.Title.includes(input)
    );

    let movieObjImage = movieObj1[0]["Poster"];

    return movieObjImage;
}

/**
 * When user input from dropdown box is "all movies", this function uses the stored api response data array from state(movieDisplay) and goes through the first provider(Cinemaworld) and gets all objects containing all movies details for that provider and stores them in an array
 * @param {array} moviesData
 * @returns an array of objects containing all movies details from first provider(Cinemaworld)
 */
export function getAllMovies(moviesData) {
    if (!moviesData || !moviesData.length) {
        return [];
    }
    let allMovies = [];
    let allMoviesProvider1 = moviesData[0]["Movies"];
    // let allMoviesProvider2 = moviesData[1]["Movies"];
    allMovies.push(allMoviesProvider1);
    // console.log(allMovies);
    return allMovies;
}

/**
 * This function sets the className for Cinemaworld provider that is providing cheaper streaming rate for a particular movie by passing in the user input(movie-name) from dropdown box and uses the stored api response data array from state(movieDisplay) and passes it on to getAllMovies function
 * @param {array} moviesData
 * @param {string} input
 * @returns string "cheaper" which is set again the className
 */
export function cinemaWorldIsCheaper(moviesData, input) {
    if (
        parseFloat(getMovieStreamingCostCinemaWorld(moviesData, input)) <
        parseFloat(getMovieStreamingCostFilmWorld(moviesData, input))
    ) {
        return "cheaper";
        // console.log("true");
    }
}

/**
 * This function sets the className for Filmworld provider that is providing cheaper streaming rate for a particular movie by passing in the user input(movie-name) from dropdown box and uses the stored api response data array from state(movieDisplay) and passes it on to getAllMovies function
 * @param {array} moviesData
 * @param {string} input
 * @returns string "cheaper" which is set again the className
 */
export function filmWorldIsCheaper(moviesData, input) {
    if (
        parseFloat(getMovieStreamingCostCinemaWorld(moviesData, input)) >
        parseFloat(getMovieStreamingCostFilmWorld(moviesData, input))
    ) {
        return "cheaper";
        // console.log("true");
    }
}
