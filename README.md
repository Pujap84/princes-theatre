# Prince's Theatre

Prince's Theatre is a price comparison tool to compare movie streaming costs by two providers - Cinemaworld & Filmworld. It provides a modern, responsive interface utilising APIs to provide the user with latest prices as well as highlighting the cheaper of the two providers.

This solution can be used to add to a customer’s website to see which of the two streaming providers are streaming their chosen movie at a cheaper price.

## Live Demo

https://guarded-wave-26538.herokuapp.com/

### Key Features

-   Single Page Application
-   Responsive application using the API to engage end-users
-   Sourcing movie providers information from the API
-   Allows users to compare costs from two streaming providers for a chosen movie and making it easier for users to see the cheaper price as it highlighted with flashing animation
-   Drop down menu to select available individual movie or all available movies

### View app images here

![movie-app-image1](/read-me-images/movie-app-image1.png)
![movie-app-image2](/read-me-images/movie-app-image2.png)
![movie-app-image3](/read-me-images/movie-app-image3.png)

### Getting started

1. Setup

    - Clone this repo to your desktop and run npm install to install all the dependencies.
    - You might want to look into package.json and server.js file to make changes to the port you want to use.

2. Usage

    - After you clone this repo to your computer, go to its root directory and run "npm install" inside the root directory to download Server Dependencies.
    - Once the dependencies are installed, you can run "npm start" to start in the root directory as well as the client directory.
    - You will then be able to access it at localhost:3000
    - Open the browser and type in this url: http://localhost:3000/

### Planning

-   Wireframes
    ![movie-app-wireframe](/read-me-images/movie-app-wireframe.png)

### Technologies

-   React
-   Express.Js
-   HTML/CSS
-   JavaScript
-   Lexicon Digital API
-   Axios used to connect the frontend application with the given API via Express backend.

### Architectural elements and decisions

-   I decided to use react for front end as it lets you build rich responsive user-interfaces easily ehich can be accessible on all devices. It can also increase productivity by using the reusable components and development tools.
-   Express. Js was used for backend development JavaScript Framework as it helps create Restful API's that accept request from frontend and send the appropriate response.
-   Axios library has been used to make HTTP request on the server as well as the client side as it has good defaults to work with JSON data and has better error handling, especially in this case where the API endpoint is unrelaible. It is also known for protection against cross-site request forgery (CSFR) attacks.
-   Similar wireframe to that was provided has been used but an addititional feature of dropdown input box has been added for users to be able to choose their choice of available movie and it defaults to "Select Movie" which displays no movies until user requests it from the input box, giving users the complete control on viewing available movies.

### Trade-offs

-   In order to provide the end-user with a seamless experience, the web page automatically reloads itself if the API call does not return the expected response.

-   I experienced issues using jest testing the app as the react component involves state in most of the component functions. As a result, I was unable to export the functions into my test files. I briefly explored using other libraries including enzymes but ran out of time to get this working. As a trade-off, I converted my functions to pure functions and I perform basic unit testing for each of the functions in the main react component. This is not an ideal testing solution and remains an issue I will solve once I've had more time to look into options.

### Assumptions made

-   It is assumed that the API provides information about only two providers
-   It is also assumed that both the providers have the same available movies

## Further Development

-   Fix unit testing framework
-   Multiselect movies from input box to view them
