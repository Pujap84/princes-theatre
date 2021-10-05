import React, { Component } from "react";
import axios from "axios";
import "./MovieDetails.css";
import { getProviderInfo } from "./MovieDisplayComponentPureFunctions";
import { getMovieNames } from "./MovieDisplayComponentPureFunctions";
import { getMovieStreamingCostCinemaWorld } from "./MovieDisplayComponentPureFunctions";
import { getMovieStreamingCostFilmWorld } from "./MovieDisplayComponentPureFunctions";
import { getCinemaWorldMovieImage } from "./MovieDisplayComponentPureFunctions";
import { getAllMovies } from "./MovieDisplayComponentPureFunctions";
import { cinemaWorldIsCheaper } from "./MovieDisplayComponentPureFunctions";
import { filmWorldIsCheaper } from "./MovieDisplayComponentPureFunctions";

/**
 * This is the React class which renders the movies on the screen
 * @author Puja Pradhan
 * @date Oct 2021
 *
 */
export class MovieDetails extends Component {
    state = {
        input: "",
        movieDisplay: [],
        isLoaded: false,
        hasError: false,
    };
    /**
     * The purpose of handleChange is to capture text input in the inputbox when onChange event occurs and save in the state
     * @param event an event listener
     */

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    };

    // This function is invoked immediately after a component is mounted
    /**
     * call api and loads data from a remote endpoint
     * will ensure that the api data is only requested after the initial render of the MovieDetails component
     * Once the response is successfully loaded, the axios response- JSON data is then set in state - movieDisplay
     */
    componentDidMount = () => {
        document.title = "Princes Theatre";
        axios
            .get("/api/message")
            .then((res) => {
                let data = res.data;
                let newdata = data.map((provider) => provider.error);
                if (newdata.includes("refresh page")) {
                    window.location.reload();
                } else {
                    this.setState({
                        movieDisplay: res.data,
                        isLoaded: true,
                    });
                }
            })
            .catch((error) => {
                throw error;
            });
    };

    /**
     * This function uses the stored api response data array from state(movieDisplay) and goes through the first provider movie titles and stores them all the titles in an array
     * @returns getMovieNames function which returns an array of strings with movie titles from first provider
     */
    getMovieNames = () => {
        let moviesData = this.state.movieDisplay;
        return getMovieNames(moviesData);
    };

    /**
     * This function uses the stored api response data array from state(movieDisplay) and gets both the provider names in string format and stores them in an array
     * @returns getProviderInfo function which returns an array of strings with provider names
     */
    getProviderInfo = () => {
        let moviesData = this.state.movieDisplay;
        return getProviderInfo(moviesData);
    };

    /**
     * This function takes the user input(movie-name) from dropdown box and uses the stored api response data array from state(movieDisplay) and matches the user-ipnput movie name against the first provider(Cinemaworld) response data and gets the price for that movie and coverts the price into a string with two decimal points
     * @returns getMovieStreamingCostCinemaWorld function which return a string of movie price with two decimal points
     */
    getMovieStreamingCostCinemaWorld = () => {
        let moviesData = this.state.movieDisplay;
        let input = this.state.input;
        return getMovieStreamingCostCinemaWorld(moviesData, input);
    };

    /**
     * This function takes the user input(movie-name) from dropdown box and uses the stored api response data array from state(movieDisplay) and matches the user-ipnput movie name against the second provider(Filmworld) response data and gets the price for that movie and coverts the price into a string with two decimal points
     * @returns getMovieStreamingCostFilmWorld function which returns a string of movie price with two decimal points
     */
    getMovieStreamingCostFilmWorld = () => {
        let moviesData = this.state.movieDisplay;
        let input = this.state.input;
        return getMovieStreamingCostFilmWorld(moviesData, input);
    };

    /**
     * This function takes the user input(movie-name) from dropdown box and uses the stored api response data array from state(movieDisplay) and matches the user-input movie name against the first provider(Cinemaworld) response data and gets the url for movie image(Poster) for that movie
     * @returns a string of movie image url
     */
    getCinemaWorldMovieImage = () => {
        let moviesData = this.state.movieDisplay;
        let input = this.state.input;
        return getCinemaWorldMovieImage(moviesData, input);
    };

    /**
     * When user input from dropdown box is "all movies", this function uses the stored api response data array from state(movieDisplay) and goes through the first provider(Cinemaworld) and gets all objects containing all movies details for that provider and stores them in an array
     * @returns getAllMovies function which return an array of objects containing all movies details from first provider(Cinemaworld)
     */
    getAllMovies = () => {
        let moviesData = this.state.movieDisplay;
        return getAllMovies(moviesData);
    };

    render() {
        <link
            href="https://allfont.net/allfont.css?fonts=star-jedi"
            rel="stylesheet"
            type="text/css"
        />;

        return (
            <div className="container" data-testid="movieDetails-1">
                <h2 className="sub-heading">Available Movies</h2>
                <div>
                    <div className="input-box-container">
                        <form className="dropdown-menu" action="">
                            <select
                                className="input-box-form"
                                onChange={this.handleChange}
                            >
                                <option value="">Select Movie</option>
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
                                <div className="grid-container">
                                    {this.getAllMovies().map((provider) =>
                                        provider.map((movie) => (
                                            <div className="single-movie">
                                                <h3 className="movie-title">
                                                    {movie["Title"]}
                                                </h3>

                                                <img
                                                    src={movie["Poster"]}
                                                    alt=""
                                                />
                                                <div className="providersandcosts">
                                                    <div className="providers">
                                                        {this.getProviderInfo().map(
                                                            (provider) => (
                                                                <div>
                                                                    <div className="provider-name">
                                                                        {
                                                                            provider
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="costs">
                                                        <div
                                                            id="cinemaworld-cost"
                                                            className={cinemaWorldIsCheaper(
                                                                this.state
                                                                    .movieDisplay,
                                                                movie["Title"]
                                                            )}
                                                        >
                                                            $
                                                            {getMovieStreamingCostCinemaWorld(
                                                                this.state
                                                                    .movieDisplay,
                                                                movie["Title"]
                                                            )}
                                                        </div>
                                                        <div
                                                            id="filmworld-cost"
                                                            className={filmWorldIsCheaper(
                                                                this.state
                                                                    .movieDisplay,
                                                                movie["Title"]
                                                            )}
                                                        >
                                                            $
                                                            {getMovieStreamingCostFilmWorld(
                                                                this.state
                                                                    .movieDisplay,
                                                                movie["Title"]
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            ) : this.state.input !== "" ? (
                                <div className="single-movie">
                                    <h3 className="movie-title">
                                        {this.state.input}
                                    </h3>
                                    <img
                                        src={this.getCinemaWorldMovieImage()}
                                        alt=""
                                    />
                                    <div className="providersandcosts">
                                        <div className="providers">
                                            {this.getProviderInfo().map(
                                                (provider) => (
                                                    <div className="provider-name">
                                                        {provider}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <div className="costs">
                                            <div
                                                id="cinemaworld-cost"
                                                className={cinemaWorldIsCheaper(
                                                    this.state.movieDisplay,
                                                    this.state.input
                                                )}
                                            >
                                                $
                                                {this.getMovieStreamingCostCinemaWorld()}
                                            </div>
                                            <div
                                                id="filmworld-cost"
                                                className={filmWorldIsCheaper(
                                                    this.state.movieDisplay,
                                                    this.state.input
                                                )}
                                            >
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
