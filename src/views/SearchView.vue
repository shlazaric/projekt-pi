<template>
  <div class="search-view">
    <div class="welcome-message">
      <p>Dobrodošao/la!</p>
    </div>

    <nav class="navigation">
      <router-link to="/favorites" class="nav-link">Favoriti</router-link>
    </nav>

    <input v-model="searchQuery" placeholder="Unesite ID knjige">
    <button @click="searchById">Pretraži po ID-u</button>

    <div v-if="selectedBook" class="book-item">
      <img :src="getImagePath(selectedBook.image)" :alt="selectedBook.name">
      <p>{{ selectedBook.name }}</p>

      <div class="like-button" @click="toggleLike">
        <span v-if="isLiked">❤️</span>
        <span v-else>🤍</span>
      </div>

      <div class="review-section">
        <h3>Napiši recenziju:</h3>
        <textarea v-model="reviewText" placeholder="Unesite svoju recenziju ovdje..."></textarea>
        <button @click="submitReview">Pošalji recenziju</button>
      </div>
    </div>

    <div v-if="showNotFoundMessage" class="no-book-message">
      <p>Nije pronađena knjiga sa ID-om {{ searchQuery }}.</p>
    </div>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase'; // Importirajte db iz firebase.js

export default {
  data() {
    return {
      searchQuery: '',
      books: [
        { id: 1, name: 'Nestrpljiva čizmica', image: 'cizmica.jpg', liked: false },
        { id: 2, name: 'Gregorov dnevnik', image: 'dnevnik.jpg', liked: false },
        { id: 3, name: 'Empatija slušanje srcem', image: 'empatija.jpg', liked: false },
        { id: 4, name: 'Mali princ', image: 'princ.jpg', liked: false },
        { id: 5, name: 'Zaljubljen do ušiju', image: 'zaljubljen.jpg', liked: false },
        { id: 6, name: 'Besmrtnost', image: 'besmrtnost.jpg', liked: false },
        { id: 7, name: 'Igre nasljedstva', image: 'igre.jpg', liked: false },
        { id: 8, name: 'Bog podzemlja', image: 'podzemlje.jpg', liked: false },
        { id: 9, name: 'Bonton za djecu i mlade', image: 'bonton.jpg', liked: false },
        { id: 10, name: 'U potrazi za Alaskom', image: 'alaska.jpg', liked: false },
        { id: 11, name: 'Bajkarenje', image: 'bajkarenje.jpg', liked: false },
        { id: 12, name: 'Harry Potter i kamen mudraca', image: 'harry.jpg', liked: false },
        { id: 13, name: 'Kako bolje misliti', image: 'kako.jpg', liked: false },
        { id: 14, name: 'Kako manje misliti', image: 'kakomanje.jpg', liked: false },
        { id: 15, name: 'Kako izbjeći manipulatore', image: 'manipulatori.jpg', liked: false },
        { id: 16, name: 'Knjižnica tajni', image: 'knjiznica.jpg', liked: false },
        { id: 17, name: 'Priča bez kraja', image: 'prica.jpg', liked: false },
        { id: 18, name: 'Slučajni cimeri', image: 'cimeeri.jpg', liked: false },
        { id: 19, name: 'Priča o plavom planetu', image: 'plaviplanet.jpg', liked: false },
        { id: 20, name: 'Soba puna snova', image: 'soba.jpg', liked: false }
      ],
      selectedBook: null,
      showNotFoundMessage: false,
      reviewText: '',
      userId: null
    };
  },
  methods: {
    async searchById() {
      const queryId = parseInt(this.searchQuery);
      this.selectedBook = this.books.find(book => book.id === queryId) || null;
      this.showNotFoundMessage = !this.selectedBook;
      this.reviewText = ''; 
    },
    getImagePath(image) {
      return require(`@/assets/${image}`);
    },
    async submitReview() {
      if (this.reviewText.trim()) {
        alert(`Recenzija za knjigu "${this.selectedBook.name}":\n\n${this.reviewText}`);
        this.reviewText = ''; 
      } else {
        alert('Molimo unesite tekst recenzije.');
      }
    },
    async toggleLike() {
      if (this.selectedBook) {
        const book = this.selectedBook;
        book.liked = !book.liked;
        this.selectedBook = { ...book };

        const user = getAuth().currentUser;
        if (user) {
          this.userId = user.uid;
          const favoritesRef = doc(db, 'favorites', this.userId);
          const docSnap = await getDoc(favoritesRef);

          let favoriteBooks = [];
          if (docSnap.exists()) {
            favoriteBooks = docSnap.data().books || [];
          }

          if (book.liked) {
            if (!favoriteBooks.includes(book.id)) {
              favoriteBooks.push(book.id);
            }
          } else {
            favoriteBooks = favoriteBooks.filter(id => id !== book.id);
          }

          await setDoc(favoritesRef, { books: favoriteBooks });
        } else {
          console.error('User is not authenticated');
        }
      }
    }
  },
  computed: {
    isLiked() {
      return this.selectedBook && this.selectedBook.liked;
    }
  }
};
</script>

<style scoped>
.search-view {
  background-image: url('@/assets/naslovna.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.welcome-message {
  margin-bottom: 10px;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}

button {
  margin-bottom: 20px;
}

.book-item {
  text-align: center;
}

.book-item img {
  width: 100px;
  height: 100px;
}

.like-button {
  cursor: pointer;
  font-size: 2rem;
  margin-top: 10px;
}

.review-section {
  margin-top: 20px;
  text-align: center;
}

textarea {
  width: 80%;
  height: 100px;
  margin-bottom: 10px;
}

.no-book-message {
  margin-top: 10px;
  color: red;
}

.navigation {
  margin-bottom: 20px;
}

.nav-link {
  color: #42b983;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 15px;
}
</style>
