const express = require("express");

let app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));

let getMovieInfo = require("./movieInfo.js");

// middleware to read JSON body data
app.use(express.json());

// Routes

app.get("/api/message", async (req, res) => {
    const response = await getMovieInfo();
    console.log(response);
    res.json(response);
});
