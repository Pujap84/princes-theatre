import React, { Component } from "react";
import axios from "axios";
import "./MovieDetails.css";
import { getProviderInfo } from "./componentFunctions";
import { getMovieNames } from "./componentFunctions";
import { getMovieStreamingCostCinemaWorld } from "./componentFunctions";
import { getMovieStreamingCostFilmWorld } from "./componentFunctions";
import { getCinemaWorldMovieImage } from "./componentFunctions";

export class MovieDetails extends Component {
    state = {
        input: "",
        movieDisplay: [],
        isLoaded: false,
    };

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    };
    // This function runs every time state gets updated
    componentDidMount = () => {
        axios.get("/api/message").then((res) =>
            this.setState({
                movieDisplay: res.data,
                isLoaded: true,
            })
        );
    };

    getMovieNames = () => {
        let moviesData = this.state.movieDisplay;
        return getMovieNames(moviesData);
    };

    getProviderInfo = () => {
        let moviesData = this.state.movieDisplay;
        return getProviderInfo(moviesData);
    };

    getMovieStreamingCostCinemaWorld = () => {
        let moviesData = this.state.movieDisplay;
        let input = this.state.input;
        return getMovieStreamingCostCinemaWorld(moviesData, input);
    };
    getMovieStreamingCostFilmWorld = () => {
        let moviesData = this.state.movieDisplay;
        let input = this.state.input;
        return getMovieStreamingCostFilmWorld(moviesData, input);
    };

    getCinemaWorldMovieImage = () => {
        let moviesData = this.state.movieDisplay;
        let input = this.state.input;
        return getCinemaWorldMovieImage(moviesData, input);
    };

    getAllMovies = () => {
        let moviesData = this.state.movieDisplay;
        if (!moviesData || !moviesData.length) {
            return [];
        }
        let allMovies = [];
        let allMoviesProvider1 = moviesData[0]["Movies"];
        let allMoviesProvider2 = moviesData[1]["Movies"];
        allMovies.push(allMoviesProvider1, allMoviesProvider2);
        console.log(allMovies);
        return allMovies;
    };
    // all-movies = movie data only!!!

    comparePricing = () => {
        // make sure we actually get out movie data
        let moviesData = this.state.movieDisplay;
        if (!moviesData || !moviesData.length) {
            return [];
        }

        let priceProvider1 = [];
        let priceProvider2 = [];

        moviesData[0].Movies.map((movie) => {
            let moviePrice = movie.Price;
            priceProvider1.push(moviePrice);
        });

        // => priceProvider1 = [12,15,12,14]

        moviesData[1].Movies.map((movie) => {
            let moviePrice = movie.Price;
            priceProvider1.push(moviePrice);
        });

        // => priceProvider1 = [11,15,16,21]

        let combinedPrices = [priceProvider1, priceProvider2];

        // =>   [
        //         [12,15,12,14],   // 0
        //         [11,15,16,21]    // 1
        //      ]

        return [combinedPrices];
    };

    cheapestProvidor = (movieIndex) => {
        let data = this.comparePricing();
        let cheapestOption = "";

        if (data[0][movieIndex] < data[1][movieIndex]) {
            return "provider-0";
        } else {
            return "provider-1";
        }
    };

    // displayCheapestPrice = (movieTitle) => {
    //     let moviesData = this.state.movieDisplay;
    //     if (!moviesData || !moviesData.length) {
    //         return [];
    //     }

    //     let movieIndex = moviesData.findIndex((movie) => movie == movieTitle);

    //     let ticketprices = this.comparePricing();

    //     // => 3
    //     // search for "Rogue One..." => index 3

    //     return (
    //         <div className={this.cheapestProvidor({ movieIndex })}>
    //             {" "}
    //             //cinema world
    //             <p className={moviesData.Provider[0]}>
    //                 {moviesData.Provider[0]} Ticket Price: $
    //                 {ticketprices[0][0][{ movieIndex }]}
    //             </p>{" "}
    //             // cinema world
    //             <p className={moviesData.provider[1]}>
    //                 {moviesData.Provider[1]} Ticket Price: $
    //                 {ticketprices[0][1][{ movieIndex }]}
    //             </p>{" "}
    //             // film world
    //         </div>
    //     );

    //     // have some css to find cheapest provider => style is child that matches
    // };

    render() {
        return (
            <div className="container" data-testid="movieDetails-1">
                <div>Available Movies</div>
                <div>
                    <div
                        style={{
                            position: "relative",
                            width: "200px",
                            height: "25px",
                            border: 0,
                            padding: 0,
                            margin: "0 auto",
                            marginBottom: "20px",
                            top: 20,
                        }}
                    >
                        <form className="dropdown-menu" action="">
                            <select
                                style={{
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: "200px",
                                    height: "25px",
                                    lineHeight: "20px",
                                    margin: 0,
                                    padding: 0,
                                }}
                                onChange={this.handleChange}
                            >
                                <option value="">None</option>
                                <option value="all-movies">All Movies</option>
                                {this.state.isLoaded &&
                                    this.getMovieNames().map((movie) => (
                                        <option>{movie}</option>
                                    ))}
                            </select>
                        </form>
                    </div>
                    <div className="all-movies">
                        <div>
                            {this.state.input === "all-movies" ? (
                                <div>
                                    <div>
                                        {this.getAllMovies().map((provider) =>
                                            provider.map((movie) => (
                                                <div>
                                                    <div>{movie["Title"]}</div>
                                                    <img
                                                        src={movie["Poster"]}
                                                        alt=""
                                                    />
                                                    <div className="providersandcosts">
                                                        <div className="providers">
                                                            {this.getProviderInfo().map(
                                                                (provider) => (
                                                                    <div>
                                                                        {
                                                                            provider
                                                                        }
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                        <div className="costs">
                                                            <div>
                                                                $
                                                                {getMovieStreamingCostCinemaWorld(
                                                                    this.state
                                                                        .movieDisplay,
                                                                    movie[
                                                                        "Title"
                                                                    ]
                                                                )}
                                                            </div>
                                                            <div>
                                                                $
                                                                {getMovieStreamingCostFilmWorld(
                                                                    this.state
                                                                        .movieDisplay,
                                                                    movie[
                                                                        "Title"
                                                                    ]
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            ) : this.state.input !== "" ? (
                                <div>
                                    <p>{this.state.input}</p>
                                    <img
                                        src={this.getCinemaWorldMovieImage()}
                                        alt=""
                                    />
                                    <div className="providersandcosts">
                                        <div className="providers">
                                            {this.getProviderInfo().map(
                                                (provider) => (
                                                    <div>{provider}</div>
                                                )
                                            )}
                                        </div>
                                        <div className="costs">
                                            <div>
                                                $
                                                {this.getMovieStreamingCostCinemaWorld()}
                                            </div>
                                            <div>
                                                $
                                                {this.getMovieStreamingCostFilmWorld()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
