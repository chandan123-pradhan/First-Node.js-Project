function sendMsg({ user_data, statusCode, response }) {
    const data = {
        status: 'success',
        user: user_data,
    }
    response.status(statusCode).json({ data });
}

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

module.exports = {
    sendMsg,
    getLoggedInUserData
}