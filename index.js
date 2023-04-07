const express = require("express");
const bodyParser = require('body-parser');
const { ROUTE_APP, APP_ROUTE, LOGIN_ROUTE } = require("./constant");
const LoginMethod = require('./controller/authControler')
const app = express();
app.use(express.json())
// Configure bodyParser to parse request bodies as form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get(APP_ROUTE, (req, res) => {

    res.send("Hello server is running");

})


/**
 * This is a login method which i made. 
 */
app.use('/',LoginMethod);

app.listen("8080", () => {
    console.log("Server started");
})

/**
 * This method will send our message to the client side.
 */


/**
 * This method will make a user data json or will get data from db.
 */
