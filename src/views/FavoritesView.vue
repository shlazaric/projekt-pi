<template>
  <div class="favorites">
    <router-link to="/search-view" class="back-link">Povratak na pretraživanje</router-link>
    <h2>Omiljene knjige</h2>
    <div v-if="favoriteBooks.length">
      <div v-for="book in favoriteBooks" :key="book.id" class="book-item">
        <img :src="getImagePath(book.image)" :alt="book.name">
        <p>{{ book.name }}</p>
      </div>
    </div>
    <div v-else>
      <p>Nemate omiljenih knjiga.</p>
    </div>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      favoriteBooks: [],
      allBooks: [
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
      ]
    };
  },
  async created() {
    const auth = getAuth();
    const firestore = getFirestore();

    if (auth.currentUser) {
      try {
        const userRef = doc(firestore, 'favorites', auth.currentUser.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const bookIds = docSnap.data().books || [];
          // Filtriramo samo lajkovane knjige
          this.favoriteBooks = this.allBooks.filter(book => bookIds.includes(book.id));
        } else {
          console.log('Dokument nije pronađen za ovog korisnika.');
        }
      } catch (error) {
        console.error("Greška prilikom dohvaćanja omiljenih knjiga:", error);
      }
    } else {
      console.error('Korisnik nije ulogovan.');
    }
  },
  methods: {
    getImagePath(image) {
      try {
        return require(`@/assets/${image}`);
      } catch (error) {
        console.error(`Greška prilikom učitavanja slike: ${image}`, error);
        return '';
      }
    }
  }
};
</script>

<style scoped>
.favorites {
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
  padding: 20px;
}

.book-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.book-item img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.back-link {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.2rem;
  color: #42b983;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
