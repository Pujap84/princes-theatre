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

// app.get("/api/test", (req, res) => {
//     getCinemaworldMovieInfo();
//     res.json({ test: "test" });
// });

// app.get("/api", (req, res) => {
//     res.json({});
// });

// app.get("/api/message", async (req, res) => {
//     console.log(req.body.message);
//     const message = req.body.message;
//     getCinemaworldMovieInfo(message).then((response) =>
//         res.json({ message: response })
//     );
//     res.json({ test: req.body.message });
// });

// app.get("/api/message", async (req, res) => {
//     const response = await getFilmworldMovieInfo(req.query.message);
//     res.json(response);
// });
