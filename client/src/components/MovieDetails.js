import React, { Component } from "react";
import axios from "axios";
import "./MovieDetails.css";

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
        if (!moviesData || !moviesData.length) {
            return [];
        }
        let movieNames = moviesData[0]["Movies"];
        // console.log(movieNames);
        const moviesArray = movieNames.map((movie) => {
            return movie["Title"];
        });
        return moviesArray;
    };

    // getMovieNames = () => {
    //     let moviesData = this.state.movieDisplay;
    //     let movieNames = moviesData[0]["Movies"].map((movie) => {
    //         return movie["Title"];
    //     });
    //     return movieNames;
    //     // console.log(movieNames);
    //     // const moviesArray = movieNames
    // };

    // getMovieData() {
    //     return axios.get("/api/message").then((res) => {
    //         const currentMovieData = [...this.state.movieDisplay];
    //         currentMovieData.push({ movieDisplay: res.data });

    //         this.setState({
    //             movieDisplay: currentMovieData,
    //         });
    //     });
    // }

    // getMovieData() {
    //     return axios.get("/api/message").then((res) => {
    //         this.setState({
    //             movieDisplay: res.data,
    //         });
    //     });
    // }

    // This function runs every time state gets updated
    // componentDidUpdate() {
    //     axios.post("//api/message", {
    //         movieDisplay: this.state.movieDisplay,
    //     });
    // }

    // getMovieData = () => {
    //     return axios.get("/api/message").then((res) => {
    //         console.log(res.data);
    //     });
    // };

    // getMovieDate = (input) => {
    //     let params = {
    //         input: input,
    //     };
    //     return axios.get("/api/message", { params }).then((res) => {
    //         console.log(res.data);
    //     });
    // };

    render() {
        return (
            <div className="container">
                <div>Available Movies</div>
                <div
                    style={{
                        position: "relative",
                        width: "200px",
                        height: "25px",
                        border: 0,
                        padding: 0,
                        margin: "0 auto",
                        top: 20,
                    }}
                >
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
                        <option>All Movies</option>
                        {this.state.isLoaded &&
                            this.getMovieNames().map((movie) => (
                                <option>{movie}</option>
                            ))}
                    </select>
                    <input
                        name="displayValue"
                        id="displayValue"
                        style={{
                            position: "absolute",
                            top: "3px",
                            left: "3px",
                            width: "175px",
                            border: "1px solid #A9A9A9",
                        }}
                        // onFocus={this.select}
                        // type="text"
                        // onChange={this.onIdFilterChange}
                        // onMouseDown={this.onMouseDown}
                        // onMouseUp={this.onMouseUp}
                        // placeholder="Filter by Movie"
                    />
                    {/* <p
                        style={{
                            padding: "50px",
                        }}
                    >
                        {this.state.isLoaded &&
                            this.getMovieNames().map((movie) => <p>{movie}</p>)}
                    </p> */}

                    {/* <div
                        style={{
                            padding: "50px",
                        }}
                    >
                        {this.state.movieDisplay[0]["Movies"].map((movie) => {
                            return movie["Title"];
                        })}
                    </div> */}
                </div>
            </div>
        );
    }
}
