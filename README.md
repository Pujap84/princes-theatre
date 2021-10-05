# Prince's Theatre

This is a price comparison tool to compare movie streaming costs by two cinemas - Cinemaworld & Filmworld. It provides a solution to add to the customer’s website to see which of the two streaming providers are streaming their chosen movie at a cheaper price.

## View app images here

![movie-app-image1](/read-me-images/movie-app-image1.png)
![movie-app-image2](/read-me-images/movie-app-image2.png)
![movie-app-image3](/read-me-images/movie-app-image3.png)

## Live Link to the working app

https://guarded-wave-26538.herokuapp.com/

### Getting started

1. Setup

    - Clone this repo to your desktop and run npm install to install all the dependencies.
    - You might want to look into package.json and server.js file to make changes to the port you want to use.

2. Usage

    - After you clone this repo to your computer, go to its root directory and run "npm install" inside the root directory to download Server Dependencies.
    - Once the dependencies are installed, you can run "npm start" to start in the root directory as well as the client directory.
    - You will then be able to access it at localhost:3000
    - open the browser and type in this url: http://localhost:3000/
    - you will then be all set up.

### Technologies

-   React
-   Express
-   HTML/CSS
-   JavaScript
-   Lexicon Digital API
-   Axios used to connect the frontend application with the given API via Express backend.

### Planning

-   Wireframes
    ![movie-app-wireframe](/read-me-images/movie-app-wireframe.png)

### Key Features

-   Single Page Application
-   Responsive application using the API to engage end-users
-   Sourcing movie providers information from the API
-   Allows users to compare costs from two streaming providers for a chosen movie and making it easier for users to see the cheaper price as it highlighted with flashing animation
-   Drop down menu to select available individual movie or all available movies

### Trade-offs

-   I understand that its a buggy api with unrelaible endpoint and I have tried catching errors but some reason, I havent been able to work out how to catch it in my react component to handle any instability and ensure the site can remain functional
-   There have been testing issues using jest for the app as the react component invloves state in most of the component functions and for that reason I was unable to export the functions into my test files . I resorted to endless searching in stackoverflow, googling, and various youtube videos and they all recommended different things but moresover using enzymes and several other libraries for the jest to work. As I have very limited experience in react testing, I resorted to converting my functions to pure functions and do some very basic form of unit testing which might not solve the purpose of testing the app functions. Nevertheless, if I am provided with jest training I am sure I would be able to overcome this issue.

### Assumptions made

-   It is assumed that the API provides information about only two providers
-   It is assumed that if there is any error generated or no movie information is displayed then the user will need to refresh browser to overcome unreliable endpoint
-   It is also assumed that both the providers have the same available movies

# Further Development

1. User-Login
2. Storing most serached user movies
3. Generate user greeting
