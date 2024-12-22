<template>
  <div class="main-container">
    <h1>Popis Knjiga</h1>
    <ul>
      <li v-for="book in books" :key="book.id" class="book-item">
        <div>
          <img :src="require(`@/assets/${book.image}`)" :alt="book.name" class="book-image" />
          <h2>{{ book.name }}</h2>
          <p>{{ book.description }}</p>
        </div>
        <!-- Prikaz recenzija -->
        <div>
          <h3>Recenzije:</h3>
          <ul>
            <li v-for="review in book.reviews" :key="review.id">
              {{ review.text }}
            </li>
          </ul>
          <!-- Forma za unos recenzije -->
          <textarea v-model="newReview[book.id]" placeholder="Napiši svoju recenziju..."></textarea>
          <button @click="addReview(book.id)">Dodaj recenziju</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        { id: 1, name: 'Nestrpljiva čizmica', image: 'cizmica.jpg', description: 'Priča o avanturama male čizmice koja želi upoznati svijet.', reviews: [] },
        { id: 2, name: 'Gregorov dnevnik', image: 'dnevnik.jpg', description: 'Knjiga koja prati život Gregora i njegove zanimljive dogodovštine.', reviews: [] },
        { id: 3, name: 'Empatija slušanje srcem', image: 'empatija.jpg', description: 'Knjiga o važnosti empatije i kako je razviti u svakodnevnom životu.', reviews: [] },
        { id: 4, name: 'Mali princ', image: 'princ.jpg', description: 'Kultna knjiga o prijateljstvu, ljubavi i smislu života.', reviews: [] },
        { id: 5, name: 'Zaljubljen do ušiju', image: 'zaljubljen.jpg', description: 'Priča o mladiću koji otkriva pravu ljubav.', reviews: [] },
        { id: 6, name: 'Besmrtnost', image: 'besmrtnost.jpg', description: 'Duboko filozofsko istraživanje što znači živjeti zauvijek.', reviews: [] },
        { id: 7, name: 'Igre nasljedstva', image: 'igre.jpg', description: 'Napeta priča o obitelji i intrigama u svijetu bogatstva.', reviews: [] },
        { id: 8, name: 'Bog podzemlja', image: 'podzemlje.png', description: 'Fantastična priča o bogovima i njihovim bitkama.', reviews: [] },
        { id: 9, name: 'Bonton za djecu i mlade', image: 'bonton.jpg', description: 'Priručnik za djecu i mlade o pravilima lijepog ponašanja.', reviews: [] },
        { id: 10, name: 'U potrazi za Alaskom', image: 'alaska.png', description: 'Priča o prijateljstvu, gubitku i snazi sjećanja.', reviews: [] },
        { id: 11, name: 'Bajkarenje', image: 'bajkarenje.jpg', description: 'Zbirka čarobnih bajki za sve uzraste.', reviews: [] },
        { id: 12, name: 'Harry Potter i kamen mudraca', image: 'harry.jpg', description: 'Prva knjiga u slavnoj seriji o čarobnjaku Harryju Potteru.', reviews: [] },
        { id: 13, name: 'Kako bolje misliti', image: 'kako.jpg', description: 'Knjiga koja pomaže razjasniti misli i donositi bolje odluke.', reviews: [] },
        { id: 14, name: 'Kako manje misliti', image: 'kakomanje.jpg', description: 'Priručnik o oslobađanju od prekomjernog razmišljanja.', reviews: [] },
        { id: 15, name: 'Kako izbjeći manipulatore', image: 'manipulatori.jpg', description: 'Savjeti za prepoznavanje i izbjegavanje manipulativnih ljudi.', reviews: [] },
        { id: 16, name: 'Knjižnica tajni', image: 'knjiznica.jpg', description: 'Tajanstvena priča o knjižnici punoj zaboravljenih tajni.', reviews: [] },
        { id: 17, name: 'Priča bez kraja', image: 'prica.jpg', description: 'Fantastična avantura koja nema granice.', reviews: [] },
        { id: 18, name: 'Slučajni cimeri', image: 'cimeri.jpg', description: 'Romantična komedija o životu s nepoznatim cimerom.', reviews: [] },
        { id: 19, name: 'Priča o plavom planetu', image: 'plaviplanet.jpg', description: 'Knjiga o ljubavi prema prirodi i očuvanju planeta.', reviews: [] },
        { id: 20, name: 'Soba puna snova', image: 'soba.jpg', description: 'Inspirativna priča o potrazi za vlastitim snovima.', reviews: [] }
      ],
      newReview: {}
    };
  },
  methods: {
    addReview(bookId) {
      const reviewText = this.newReview[bookId]?.trim();
      if (!reviewText) {
        alert('Recenzija ne smije biti prazna.');
        return;
      }
      const book = this.books.find(book => book.id === bookId);
      if (book) {
        book.reviews.push({ id: Date.now(), text: reviewText });
        this.newReview[bookId] = '';
      }
    }
  }
};
</script>
<style scoped>
.main-container {
  background-image: url('@/assets/naslovna.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.book-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.book-info {
  display: flex;
  align-items: center;
}

.book-details {
  margin-left: 20px;
}

.reviews-section {
  margin-top: 20px;
}

textarea {
  width: 100%;
  height: 80px;
  margin-top: 10px;
}

button {
  margin-top: 10px;
}
</style>
