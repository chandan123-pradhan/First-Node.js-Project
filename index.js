const express = require("express");
const bodyParser = require('body-parser');
const { ROUTE_APP, APP_ROUTE, LOGIN_ROUTE } = require("./constant");
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
app.post(LOGIN_ROUTE, (req, res) => {
    const { email, password } = req.body;

    if (email == 'chandan@gmail.com' && password == '123456') {
        const data = getLoggedInUserData();
        sendMsg(
            {
                user_data: data,
                statusCode: 200,
                response: res
            }
        )

    } else {
        const message = 'unautherized access'
        //res.status(401).send( message ); //for send a single line string message.
        res.status(401).json({ message })
    }



});





app.listen("8080", () => {
    console.log("Server started");
})

/**
 * This method will send our message to the client side.
 */
function sendMsg({ user_data, statusCode, response }) {
    const data = {
        status: 'success',
        user: user_data,
    }
    response.status(statusCode).json({ data });
}

/**
 * This method will make a user data json or will get data from db.
 */
function getLoggedInUserData() {
    const user_data = {
        name: 'chandan pradhan',
        username: 'chandan123',
        email: 'chandan@gmail.com',
        phone_number: '9065974832',
        pincode: '802133'
    }
    return user_data;
}