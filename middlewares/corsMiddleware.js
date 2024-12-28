const cors = require('cors');

const corsMiddleware = cors({
    origin: '*', // Allow all origins. Change this to your specific domain in production.
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
});

module.exports = corsMiddleware;