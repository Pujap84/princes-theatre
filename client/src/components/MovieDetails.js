import React, { Component } from "react";
import axios from "axios";
import "./MovieDetails.css";
import { getProviderInfo } from "./componentFunctions";
import { getMovieNames } from "./componentFunctions";
import { getMovieStreamingCostCinemaWorld } from "./componentFunctions";
import { getMovieStreamingCostFilmWorld } from "./componentFunctions";
import { getCinemaWorldMovieImage } from "./componentFunctions";
import { getAllMovies } from "./componentFunctions";
import { cinemaWorldIsCheaper } from "./componentFunctions";
import { filmWorldIsCheaper } from "./componentFunctions";

/**
 * This is the React class which renders the movies on the screen
 * @author Puja Pradhan
 * @date Sept 2021
 *
 */
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
