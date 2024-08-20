<template>
  <div class="review-form">
    <h3>Dodaj recenziju</h3>
    <form @submit.prevent="submitReview">
      <div>
        <label for="user">Ime:</label>
        <input v-model="user" id="user" type="text" required>
      </div>
      <div>
        <label for="rating">Ocjena:</label>
        <select v-model.number="rating" id="rating" required>
          <option disabled value="">Odaberi ocjenu</option>
          <option v-for="num in 5" :key="num" :value="num">{{ num }}</option>
        </select>
      </div>
      <div>
        <label for="text">Recenzija:</label>
        <textarea v-model="text" id="text" required></textarea>
      </div>
     
      <button type="submit">Pošalji</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    // Očekuje se da se bookId prosljeđuje kao prop iz roditeljske komponente
    bookId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // Lokalni podaci za ime korisnika, ocjenu i tekst recenzije
      user: '',
      rating: null,
      text: ''
    };
  },
  methods: {
    
    submitReview() {
      // Provjerava je li svaki podatak unesen
      if (this.user && this.rating && this.text) {
        // Emitira događaj 'submit-review' s prikupljenim podacima
        this.$emit('submit-review', {
          user: this.user,
          rating: this.rating,
          text: this.text,
          bookId: this.bookId
        });

        // Očisti formu nakon uspješnog slanja recenzije
        this.user = '';
        this.rating = null;
        this.text = '';
      }
    }
  }
};
</script>

<style scoped>

.review-form {
  margin-top: 20px;
}

.review-form label {
  display: block;
  margin-bottom: 5px;
}

.review-form input,
.review-form select,
.review-form textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}

.review-form button {
  display: block;
  padding: 10px 20px;
}
</style>
