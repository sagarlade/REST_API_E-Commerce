const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    require('dotenv').config();
    const secretKey = process.env.JWT_SECRET; // Replace with your actual secret key
    const expiresIn = '1h'; // Token expiration time

    const token = jwt.sign({ id: userId }, secretKey, { expiresIn });
    console.log('Generated Token:', token); // Log the generated token to the console
    return token;
};

module.exports = generateToken;