<template>
  <div class="search-view">
    <h2>Dobrodošao/la !</h2>
    <input v-model="searchQuery" placeholder="Unesite naziv knjige" />
    <button @click="searchByName">Pretraži</button>

    <div v-if="selectedBook" class="book-item">
      <img :src="getImagePath(selectedBook.image)" :alt="selectedBook.name" />
      <p>{{ selectedBook.name }}</p>

      <div class="like-button" @click="toggleLike">
        <span v-if="isLiked">❤️</span>
        <span v-else>🤍</span>
      </div>
      <button @click="submitLike">Označi sa "sviđa mi se" </button>
    </div>

    <div v-if="showNotFoundMessage">
      <p>Knjiga sa nazivom "{{ searchQuery }}" nije pronađena.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedBook: null,
      showNotFoundMessage: false,
      likedBooks: [],
      books: [
        { id: 1, name: 'Nestrpljiva čizmica', image: 'cizmica.jpg' },
        { id: 2, name: 'Gregorov dnevnik', image: 'dnevnik.jpg' },
        { id: 3, name: 'Empatija slušanje srcem', image: 'empatija.jpg' },
        { id: 4, name: 'Mali princ', image: 'princ.jpg' },
        { id: 5, name: 'Zaljubljen do ušiju', image: 'zaljubljen.jpg' },
        { id: 6, name: 'Besmrtnost', image: 'besmrtnost.jpg' },
        { id: 7, name: 'Igre nasljedstva', image: 'igre.jpg' },
        { id: 8, name: 'Bog podzemlja', image: 'podzemlje.jpg' },
        { id: 9, name: 'Bonton za djecu i mlade', image: 'bonton.jpg' },
        { id: 10, name: 'U potrazi za Alaskom', image: 'alaska.jpg' },
        { id: 11, name: 'Bajkarenje', image: 'bajkarenje.jpg' },
        { id: 12, name: 'Harry Potter i kamen mudraca', image: 'harry.jpg' },
        { id: 13, name: 'Kako bolje misliti', image: 'kako.jpg' },
        { id: 14, name: 'Kako manje misliti', image: 'kakomanje.jpg' },
        { id: 15, name: 'Kako izbjeći manipulatore', image: 'manipulatori.jpg' },
        { id: 16, name: 'Knjižnica tajni', image: 'knjiznica.jpg' },
        { id: 17, name: 'Priča bez kraja', image: 'prica.jpg' },
        { id: 18, name: 'Slučajni cimeri', image: 'cimeeri.jpg' },
        { id: 19, name: 'Priča o plavom planetu', image: 'plaviplanet.jpg' },
        { id: 20, name: 'Soba puna snova', image: 'soba.jpg' }
      ],
    };
  },computed: {
    isLiked() {
      return this.selectedBook && this.likedBooks.some(book => book.id === this.selectedBook.id);
    }
  },
  mounted() {
    const savedBooks = JSON.parse(localStorage.getItem('likedBooks'));
    if (savedBooks) {
      this.likedBooks = savedBooks;
    }
  },
  methods: {
    searchByName() {
      const queryName = this.searchQuery.toLowerCase().trim();
      this.selectedBook = this.books.find(book => book.name.toLowerCase() === queryName) || null;
      this.showNotFoundMessage = !this.selectedBook;
    },
    toggleLike() {
      if (this.selectedBook) {
        const index = this.likedBooks.findIndex(book => book.id === this.selectedBook.id);
        if (index === -1) {
          this.likedBooks.push(this.selectedBook);
        } else {
          this.likedBooks.splice(index, 1);
        }
        localStorage.setItem('likedBooks', JSON.stringify(this.likedBooks));
      }
    },
    submitLike() {
      if (this.selectedBook && !this.isLiked) {
        this.toggleLike();
      }
    },
    getImagePath(image) {
      return require(`@/assets/${image}`);
    }
  }
};
</script>

<style scoped>
.search-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-image: url('@/assets/naslovna.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 300px;
}

button {
  padding: 8px 16px;
  margin-bottom: 20px;
  cursor: pointer;
}

.book-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-item img {
  width: 150px;
  height: 200px;
}

.like-button {
  cursor: pointer;
  font-size: 2rem;
  margin-top: 10px;
}

.like-button span {
  font-size: 2rem;
}
</style>