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
          { id: 5, name: 'Zaljubljen do ušiju', image: 'zaljubljen.jpg' }
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
        // Ovdje možete obraditi i pohraniti recenziju (npr. dodati je u listu recenzija)
      }
    }
  };
  </script>
  

  
  