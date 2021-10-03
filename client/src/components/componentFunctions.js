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

export function getMovieStreamingCostCinemaWorld(moviesData, input) {
    if (!moviesData || !moviesData.length) {
        return [];
    }

    // let array = [];
    let movieObj1 = moviesData[0].Movies.filter((movie) =>
        movie.Title.includes(input)
    );

    let movieObjCostCinemaWorld = movieObj1[0]["Price"].toFixed(2);

    // array.push(movieObjCostCinemaWorld);

    return movieObjCostCinemaWorld;
}

export function getMovieStreamingCostFilmWorld(moviesData, input) {
    if (!moviesData || !moviesData.length) {
        return [];
    }

    // let array = [];
    let movieObj1 = moviesData[1].Movies.filter((movie) =>
        movie.Title.includes(input)
    );

    let movieObjCostFilmWorld = movieObj1[0]["Price"].toFixed(2);

    // array.push(movieObjCostFilmWorld);

    return movieObjCostFilmWorld;
}

export function getCinemaWorldMovieImage(moviesData, input) {
    if (!moviesData || !moviesData.length) {
        return [];
    }
    // let array = [];
    let movieObj1 = moviesData[0].Movies.filter((movie) =>
        movie.Title.includes(input)
    );

    let movieObjImage = movieObj1[0]["Poster"];

    // array.push(movieObjImage);

    return movieObjImage;
}

// export function getAllMovies(moviesData) {
//     if (!moviesData || !moviesData.length) {
//         return [];
//     }
//     let allMovies = [];
//     let allMoviesProvider1 = moviesData[0]["Movies"];
//     let allMoviesProvider2 = moviesData[1]["Movies"];
//     allMovies.push(allMoviesProvider1, allMoviesProvider2);
//     // console.log(allMovies);
//     return allMovies;
// }
