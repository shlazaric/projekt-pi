export default {
    books: [
        { id: 1, name: 'Nestrpljiva čizmica', image: 'cizmica.jpg', likedByUsers: [] },
        { id: 2, name: 'Gregorov dnevnik', image: 'dnevnik.jpg', likedByUsers: [] },
        { id: 3, name: 'Empatija slušanje srcem', image: 'empatija.jpg', likedByUsers: [] },
        { id: 4, name: 'Mali princ', image: 'princ.jpg', likedByUsers: [] },
        { id: 5, name: 'Zaljubljen do ušiju', image: 'zaljubljen.jpg', likedByUsers: [] },
    ],

    getBookById(id) {
        return this.books.find(book => book.id === id);
    },

    toggleLike(bookId, userId) {
        const book = this.getBookById(bookId);
        if (book) {
            const index = book.likedByUsers.indexOf(userId);
            if (index === -1) {
                book.likedByUsers.push(userId);
            } else {
                book.likedByUsers.splice(index, 1);
            }
        }
    },


};