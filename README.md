# E-Commerce RESTful API

This project is a RESTful API for an e-commerce platform, built using Node.js, Express.js, and MongoDB. It provides various endpoints for managing products, users, and authentication.

## Features

- **User Management**:
  - Register new users
  - User login with authentication
  - Token-based authentication (JWT)

- **Product Management**:
  - Create, read, update, and delete products
  - Retrieve product details by ID
  - Get a list of all products

- **Authentication**:
  - Secure endpoints with JWT
  - Middleware for verifying tokens

- **Error Handling**:
  - Comprehensive error responses for invalid requests

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Variables**: Managed using `dotenv`

## Folder Structure

```
├── controllers
│   ├── authController.js
│   ├── productController.js
├── middlewares
│   ├── authMiddleware.js
├── models
│   ├── Product.js
│   ├── User.js
├── routes
│   ├── authRoutes.js
│   ├── productRoutes.js
├── utils
│   ├── generateToken.js
├── index.js
├── .env
├── package.json
```

## Endpoints

### Authentication Endpoints

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: User login

### Product Endpoints

- **GET /api/products**: Get all products
- **GET /api/products/:id**: Get a single product by ID
- **POST /api/products**: Create a new product
- **PUT /api/products/:id**: Update an existing product by ID
- **DELETE /api/products/:id**: Delete a product by ID

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/REST_API_E-Commerce.git
   cd REST_API_E-Commerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

## Usage

1. Use Postman or any REST client to test the API endpoints.
2. Authenticate using the `/api/auth/login` endpoint to receive a token.
3. Use the token in the `Authorization` header (as `Bearer <token>`) to access protected routes.

## Dummy Data

### Sample User Data
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Sample Product Data
```json
{
  "name": "Laptop",
  "description": "A high-performance laptop",
  "price": 1200,
  "category": "Electronics",
  "stock": 10,
  "imageUrl": "http://example.com/laptop.jpg"
}
```

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js
- **mongoose**: MongoDB object modeling tool
- **jsonwebtoken**: JWT implementation for authentication
- **bcryptjs**: Library for hashing passwords
- **dotenv**: Loads environment variables from `.env` file

## License

This project is licensed under the MIT License. See the LICENSE file for details.

