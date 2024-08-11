import { firestore } from './firebase';

export default {
    books: [
        { id: 1, name: 'Nestrpljiva čizmica', image: 'cizmica.jpg', likedByUsers: [] },
        { id: 2, name: 'Gregorov dnevnik', image: 'dnevnik.jpg', likedByUsers: [] },
        { id: 3, name: 'Empatija slušanje srcem', image: 'empatija.jpg', likedByUsers: [] },
        { id: 4, name: 'Mali princ', image: 'princ.jpg', likedByUsers: [] },
        { id: 5, name: 'Zaljubljen do ušiju', image: 'zaljubljen.jpg', likedByUsers: [] },
        { id: 6, name: 'Besmrtnost', image: 'besmrtnost.jpg', likedByUsers: [] },
        { id: 7, name: 'Igre nasljedstva', image: 'igre.jpg', likedByUsers: [] },
        { id: 8, name: 'Bog podzemlja', image: 'podzemlje.jpg', likedByUsers: [] },
        { id: 9, name: 'Bonton za djecu i mlade', image: 'bonton.jpg', likedByUsers: [] },
        { id: 10, name: 'U potrazi za Alaskom', image: 'alaska.jpg', likedByUsers: [] },
        { id: 11, name: 'Bajkarenje', image: 'bajkarenje.jpg', likedByUsers: [] },
        { id: 12, name: 'Harry Potter i kamen mudraca', image: 'harry.jpg', likedByUsers: [] },
        { id: 13, name: 'Kako bolje misliti', image: 'kako.jpg', likedByUsers: [] },
        { id: 14, name: 'Kako manje misliti', image: 'kakomanje.jpg', likedByUsers: [] },
        { id: 15, name: 'Kako izbjeći manipulatore', image: 'manipulatori.jpg', likedByUsers: [] },
        { id: 16, name: 'Knjižnica tajni', image: 'knjiznica.jpg', likedByUsers: [] },
        { id: 17, name: 'Priča bez kraja', image: 'prica.jpg', likedByUsers: [] },
        { id: 18, name: 'Slučajni cimeri', image: 'cimeri.jpg', likedByUsers: [] },
        { id: 19, name: 'Priča o plavom planetu', image: 'plaviplanet.jpg', likedByUsers: [] },
        { id: 20, name: 'Soba puna snova', image: 'soba.jpg', likedByUsers: [] },
    ],

    getBookById(id) {
        return this.books.find(book => book.id === id);
    },

    async toggleLike(bookId, userId) {
        const book = this.getBookById(bookId);
        if (book) {
            const index = book.likedByUsers.indexOf(userId);
            if (index === -1) {
                book.likedByUsers.push(userId);
            } else {
                book.likedByUsers.splice(index, 1);
            }

            try {

                const bookRef = firestore.collection('books').doc(`${bookId}`);
                await bookRef.set({
                    likedByUsers: book.likedByUsers
                }, { merge: true });
            } catch (error) {
                console.error('Error updating book likes in Firestore:', error);
            }
        }
    },

};
