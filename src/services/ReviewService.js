import { firestore } from './firebase';

export default {
    reviews: [],

    async addReview(bookId, userId, reviewText) {

        const newReview = { bookId, userId, reviewText };
        this.reviews.push(newReview);

        try {

            const reviewRef = firestore.collection('reviews').doc();
            await reviewRef.set(newReview);
        } catch (error) {
            console.error('Error adding review to Firestore:', error);
        }
    },

    async getReviewsForBook(bookId) {

        let reviewsForBook = this.reviews.filter(review => review.bookId === bookId);

        try {

            const snapshot = await firestore.collection('reviews').where('bookId', '==', bookId).get();
            snapshot.forEach(doc => {
                reviewsForBook.push(doc.data());
            });
        } catch (error) {
            console.error('Error fetching reviews from Firestore:', error);
        }

        return reviewsForBook;
    },
};
