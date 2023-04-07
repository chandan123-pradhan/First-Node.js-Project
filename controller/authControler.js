const express  = require('express');
const router = express.Router();
const { sendMsg, getLoggedInUserData } = require('../services/sendMessage')

router.post("/app/login", async (req, res) => {
    console.log("kkkk");
    const { email, password } = req.body;

    console.log(email, password);
    
    if (email == 'chandan@gmail.com' && password == '123456') {
        const data = getLoggedInUserData();
        sendMsg(
            {
                user_data: data,
                statusCode: 200,
                response: res
            }
        )
        // res.json({"hhh":"hhh"})

    } else {
        const message = 'unautherized access'
        //res.status(401).send( message ); //for send a single line string message.
        res.status(401).json({ message })
    }

});

module.exports = router