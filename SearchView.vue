<template>
  <div class="search-view">
    <div class="welcome-message">
      <p>Dobrodošao/la!</p>
    </div>

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
      ],
      selectedBook: null,
      showNotFoundMessage: false,
      reviewText: '', 
    };
  },
  methods: {
    searchById() {
      const queryId = parseInt(this.searchQuery);
      this.selectedBook = this.books.find(book => book.id === queryId) || null;
      this.showNotFoundMessage = !this.selectedBook;
      this.reviewText = ''; 
    },
    getImagePath(image) {
      return require(`@/assets/${image}`);
    },
    submitReview() {
      if (this.reviewText.trim()) {
        alert(`Recenzija za knjigu "${this.selectedBook.name}":\n\n${this.reviewText}`);
        this.reviewText = ''; 
      } else {
        alert('Molimo unesite tekst recenzije.');
      }
    },
    toggleLike() {
      if (this.selectedBook) {
        this.selectedBook.liked = !this.selectedBook.liked;
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
</style>
