<template>
  <div class="favorites-view">
    <h1>Omiljene knjige :</h1>
    
    <div v-if="userId">
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
    
    <div v-else>
      <p>Molimo prijavite se kako biste vidjeli omiljene knjige.</p>
    </div>
  </div>
</template>

<script>
import { db, auth } from '@/firebase';
import { collection, doc, getDocs, setDoc, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  data() {
    return {
      favorites: [],
      reviews: {},
      userId: null,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userId = user.uid;
        this.loadFavorites();
      } else {
        this.userId = null;
        this.$router.push('/login');
      }
    });
  },
  methods: {
    async loadFavorites() {
      const q = query(collection(db, 'favorites'), where('userId', '==', this.userId));
      const querySnapshot = await getDocs(q);
      this.favorites = querySnapshot.docs.map(doc => doc.data().book);
    },
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
          await setDoc(doc(db, 'reviews', `${this.userId}_${book.id}`), {
            userId: this.userId,
            bookId: book.id,
            bookName: book.name,
            review: review,
          });
          this.reviews[book.id] = '';
          alert('Recenzija je poslana!');
        } catch (error) {
          console.error('Greška prilikom dodavanja recenzije: ', error);
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
