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
                                <div className="grid-container">
                                    {this.getAllMovies().map((provider) =>
                                        provider.map((movie) => (
                                            <div className="single-movie">
                                                <div className="movie-info">
                                                    <h3 className="movie-title">
                                                        {movie["Title"]}
                                                    </h3>
                                                </div>

                                                <img
                                                    src={movie["Poster"]}
                                                    alt=""
                                                />
                                                <div className="providersandcosts">
                                                    <div className="providers">
                                                        {this.getProviderInfo().map(
                                                            (provider) => (
                                                                <div>
                                                                    <div>
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
                                <div>
                                    <h3>{this.state.input}</h3>
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
                                            <div
                                                className={cinemaWorldIsCheaper(
                                                    this.state.movieDisplay,
                                                    this.state.input
                                                )}
                                            >
                                                $
                                                {this.getMovieStreamingCostCinemaWorld()}
                                            </div>
                                            <div
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
