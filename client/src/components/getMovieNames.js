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
