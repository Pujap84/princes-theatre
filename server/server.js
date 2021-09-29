const express = require("express");

let app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));

// middleware to read JSON body data
app.use(express.json());

// Routes
// app.get("/burgerLayers", (req, res) => {
//     res.json({ burgerLayers });
// });
