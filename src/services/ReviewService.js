export default {
    reviews: [],

    addReview(bookId, userId, reviewText) {
        this.reviews.push({ bookId, userId, reviewText });
    },

    getReviewsForBook(bookId) {
        return this.reviews.filter(review => review.bookId === bookId);
    },


};
