<template>
  <div class="login-view">
    <div class="content">
      <h2>Prijava</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="emailField">E-mail:</label>
          <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Upiši e-mail">
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="passwordField">Lozinka:</label>
          <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Upiši lozinku">
        </div>
        <button type="submit" class="btn btn-primary mt-5">Prijavi se</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
     
      console.log('User email:', this.email);
      console.log('User password:', this.password);
      
     
      this.$router.push('/search-view');
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
