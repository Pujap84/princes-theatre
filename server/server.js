process.env.NODE_ENV === "production" || require("dotenv").config();
const path = require("path");
const express = require("express");

let app = express();
const port =
    process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;

let getMovieInfo = require("./movieInfo.js");

// middleware to read JSON body data
app.use(express.json());

// Routes

app.get("/api/message", async (req, res) => {
    const response = await getMovieInfo();
    console.log(response);
    res.json(response);
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
    app.set("trust proxy", 1);

    app.get("/*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "..", "client", "build", "index.html")
        );
    });
}
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
