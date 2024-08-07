<template>
  <div class="signup-view">
    <div class="content">
      <h2>Registracija</h2>
      <form @submit.prevent="signUp">
        <div class="form-group">
          <label for="nameField">Ime:</label>
          <input v-model="name" type="text" class="form-control" id="nameField" placeholder="Upiši svoje ime" required>
        </div>
        <div class="form-group">
          <label for="emailField">E-mail:</label>
          <input v-model="email" type="email" class="form-control" id="emailField" placeholder="Upiši e-mail" required>
        </div>
        <div class="form-group">
          <label for="passwordField">Lozinka:</label>
          <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Upiši lozinku" required>
        </div>
        <div class="form-group">
          <label for="confirmPasswordField">Ponovi lozinku:</label>
          <input v-model="confirmPassword" type="password" class="form-control" id="confirmPasswordField" placeholder="Ponovi lozinku" required>
        </div>
        <button type="submit" class="btn btn-primary mt-5">Registriraj se</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from '@/firebase';

export default {
  name: "SignUpView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async signUp() {
      if (this.password !== this.confirmPassword) {
        alert("Lozinke se ne podudaraju!");
        return;
      }

      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        console.log('Korisnik uspješno registriran:', userCredential.user);

        
        await userCredential.user.updateProfile({
          displayName: this.name
        });

        this.$router.push('/login-view');
      } catch (error) {
        console.error('Problem prilikom registracije:', error);
        alert(error.message);
      }
    }
  }
}
</script>

<style scoped>
.signup-view {
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
  width: 100%; 
  max-width: 400px; 
}

.form-group {
  margin-bottom: 15px;
}

.btn-primary {
  width: 100%;
}
</style>
