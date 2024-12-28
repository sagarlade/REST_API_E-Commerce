require('dotenv').config();

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const DB_URL="mongodb+srv://sagarlade07:iLpVQgkbKGDhO3A5@cluster0.z6sgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Import Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');




// Create Express app
const app = express();

// Middleware setup
app.use(express.json());
app.use(cookieParser());  // To parse cookies
app.use(cors());  // Enable CORS for all origins

// Database connection (MongoDB)
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
})
.then(() => console.log('Connected to the database'))
.catch(err => console.log('Database connection error:', err));

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);

// Global error handler (last middleware)


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
