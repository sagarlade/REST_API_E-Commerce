const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

// Route to get all reviews
router.get('/', reviewController.getAllReviews);

// Route to get a review by ID
router.get('/:id', reviewController.getReview);

// Route to create a new review
router.post('/', reviewController.createReview);

// Route to update a review by ID
router.put('/:id', reviewController.updateReview);

// Route to delete a review by ID
router.delete('/:id', reviewController.deleteReview);

module.exports = router;