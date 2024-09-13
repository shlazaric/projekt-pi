<template>
  <div class="login-view">
    <div class="content">
      <h2>Prijava</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="emailField">E-mail:</label>
          <input v-model="email" type="email" class="form-control" id="emailField" placeholder="Upiši e-mail" required>
        </div>
        <div class="form-group">
          <label for="passwordField">Lozinka:</label>
          <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Upiši lozinku" required>
        </div>
        <button type="submit" class="btn btn-primary mt-5">Prijavi se</button>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        console.log('Korisnik prijavljen:', userCredential.user);
        
        this.$router.push('/search-view'); // Preusmjeri na search-view nakon uspješne prijave
      } catch (error) {
        console.error('Greška tijekom prijave:', error);
        alert("Pogrešan e-mail ili lozinka!");
      }
    }
  }
}
</script>

<style scoped>
.login-view {
  background-image: url('@/assets/naslovna.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.content {
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  border-radius: 10px;
  width: 300px; 
}

.form-group {
  margin-bottom: 15px;
}

.btn-primary {
  width: 100%;
}
</style>
