<template>
    <div>
      <h1>Popis Knjiga</h1>
      <ul>
        <li v-for="book in books" :key="book.id">
          <div @click="selectBook(book)">
            <img :src="`/path/to/images/${book.image}`" :alt="book.name" />
            <h2>{{ book.name }}</h2>
          </div>
        </li>
      </ul>
      <div v-if="selectedBook">
        <h2>Recenzija za: {{ selectedBook.name }}</h2>
        <ReviewForm :bookId="selectedBook.id" @submit-review="handleReviewSubmission" />
      </div>
    </div>
  </template>
  
  <script>
  import ReviewForm from '@/components/ReviewForm.vue';
  
  export default {
    components: {
      ReviewForm
    },
    data() {
      return {
        books: [
          { id: 1, name: 'Nestrpljiva čizmica', image: 'cizmica.jpg' },
          { id: 2, name: 'Gregorov dnevnik', image: 'dnevnik.jpg' },
          { id: 3, name: 'Empatija slušanje srcem', image: 'empatija.jpg' },
          { id: 4, name: 'Mali princ', image: 'princ.jpg' },
          { id: 5, name: 'Zaljubljen do ušiju', image: 'zaljubljen.jpg' },
          { id: 6, name: 'Besmrtnost', image: 'besmrtnost.jpg'},
          { id: 7, name: 'Igre nasljedstva', image: 'igre.jpg'},
          { id: 8, name: 'Bog podzemlja', image: 'podzemlje.jpg'},
          { id: 9, name: 'Bonton za djecu i mlade', image: 'bonton.jpg'},
          { id: 10, name: 'u potrazi za Alaskom', image: 'alaska.jpg'},
          { id: 11, name: 'Bajkarenje', image: 'bajkarenje.jpg'},
          { id: 12, name: 'Harry Potter i kamen mudraca', image: 'harry.jpg'},
          { id: 13, name: 'Kako bolje misliti', image:'kako.jpg' },
          { id: 14, name: 'Kako manje misliti', image : 'kakomanje.jpg'},
          {id: 15, name: 'Kako izbjeći manipulatore', image: 'manipulatori.jpg'},
          {id: 16, name: 'Knjižnica tajni', image: 'knjiznica.jpg'},
          {id: 17, name: 'Priča bez kraja', image: 'prica.jpg'},
          {id: 18, name: 'Slučajni cimeri', image: 'cimeeri.jpg'},
          {id: 19, name: 'Priča o plavom planetu', image: 'plaviplanet.jpg'},
          {id: 20, name: 'Soba puna snova', image: 'soba.jpg'}


        ],
        selectedBook: null
      };
    },
    methods: {
      selectBook(book) {
        this.selectedBook = book;
      },
      handleReviewSubmission(reviewData) {
        console.log(`Recenzija dodana za knjigu s ID-om ${reviewData.bookId}: ${reviewData.text}`);
     
      }
    }
  };
  </script>
  

  
  