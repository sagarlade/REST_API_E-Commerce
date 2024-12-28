const reviews = [];

class ReviewService {
    static addReview(productId, userId, rating, comment) {
        const review = {
            id: reviews.length + 1,
            productId,
            userId,
            rating,
            comment,
            createdAt: new Date()
        };
        reviews.push(review);
        return review;
    }

    static getReviewsByProductId(productId) {
        return reviews.filter(review => review.productId === productId);
    }

    static getReviewsByUserId(userId) {
        return reviews.filter(review => review.userId === userId);
    }

    static deleteReview(reviewId) {
        const index = reviews.findIndex(review => review.id === reviewId);
        if (index !== -1) {
            return reviews.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = ReviewService;