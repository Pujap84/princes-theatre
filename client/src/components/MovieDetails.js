import React, { Component } from "react";
import axios from "axios";
import "./MovieDetails.css";
import { getProviderInfo } from "./getMovieNames";
import { getMovieNames } from "./getMovieNames";
import { getMovieStreamingCostCinemaWorld } from "./getMovieNames";
import { getMovieStreamingCostFilmWorld } from "./getMovieNames";
import { getCinemaWorldMovieImage } from "./getMovieNames";

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

                    <div className="movie-info">
                        <div className="movie-name">
                            <p>{this.state.input}</p>
                        </div>

                        <div>
                            {this.state.input !== ""
                                ? this.getCinemaWorldMovieImage().map(
                                      (image) => <img src={image} alt="" />
                                  )
                                : ""}
                        </div>
                        <div className="providersandcosts">
                            <div className="providers">
                                {this.state.input !== ""
                                    ? this.getProviderInfo().map((provider) => (
                                          <div>{provider}</div>
                                      ))
                                    : ""}
                            </div>
                            <div className="costs">
                                {this.state.input !== ""
                                    ? this.getMovieStreamingCostCinemaWorld().map(
                                          (cost) => <div>${cost}</div>
                                      )
                                    : ""}

                                {this.state.input !== ""
                                    ? this.getMovieStreamingCostFilmWorld().map(
                                          (cost) => <div>${cost}</div>
                                      )
                                    : ""}
                            </div>
                        </div>

                        {/* <div className="all-movies">
                            {this.state.input == "all-movies"
                                ? this.getAllMovies().map((provider) =>
                                      provider.map((movie) => (
                                          <div className="">
                                              {movie["Title"]}
                                          </div>
                                      ))
                                  )
                                : ""}
                        </div> */}
                    </div>

                    {/* <div>
                        {" "}
                        {this.state.isLoaded &&
                            this.getMovieNames().map((movie) => (
                                <option>{movie}</option>
                            ))}
                    </div> */}
                </div>
            </div>
        );
    }
}
