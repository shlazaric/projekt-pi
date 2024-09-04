<template>
  <div class="favorites-view">
    <h1>Omiljene Knjige</h1>
    <button @click="goBack">Povratak na pretragu</button>
    
    <div v-if="favorites.length === 0">
      <p>Nema omiljenih knjiga.</p>
    </div>
    
    <div v-for="book in favorites" :key="book.id" class="book-item">
      <img :src="getImagePath(book.image)" :alt="book.name" />
      <p>{{ book.name }}</p>
      <input v-model="reviews[book.id]" placeholder="Napišite recenziju" />
      <button @click="submitReview(book)">Pošalji recenziju</button>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      favorites: [],
      reviews: {},
    };
  },
  mounted() {
    const savedBooks = JSON.parse(localStorage.getItem('likedBooks'));
    if (savedBooks) {
      this.favorites = savedBooks;
    }
  },
  methods: {
    getImagePath(image) {
      return require(`@/assets/${image}`);
    },
    goBack() {
      this.$router.push('/search-view');
    },
    async submitReview(book) {
      const review = this.reviews[book.id] || '';
      if (review) {
        try {
          await addDoc(collection(db, 'reviews'), {
            bookId: book.id,
            bookName: book.name,
            review: review,
          });
          this.reviews[book.id] = '';
          alert('Recenzija je poslana!');
        } catch (error) {
          console.error('Error adding review: ', error);
        }
      } else {
        alert('Molimo unesite recenziju!');
      }
    },
  },
};
</script>

<style scoped>
.favorites-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-image: url('@/assets/naslovna.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
}

.book-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.book-item img {
  width: 150px;
  height: 200px;
}

button {
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;
}

input {
  margin-top: 10px;
  padding: 8px;
  width: 300px;
}
</style>
