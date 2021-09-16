// Setup empty JS object to act as endpoint for all routes
projectData = {};
// port number
const port = 8080;
// Require consts to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express()


/*Starting Middleware*/

//body-parser middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())

/*End of Middleware*/

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, () => {
    console.log("server runing");
    console.log(`runing on localhost : ${port}.`);
})
// get 
app.get("/getWeather", (req, res) => {
    res.send(projectData)
})
// post
app.post("/setWeather", (req, res) => {
    projectData = {
        ...req.body
    }
    res.end()
})