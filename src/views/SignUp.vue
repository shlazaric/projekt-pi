<template>
    <div class="registration-view">
      <div class="content">
        <h2>Registracija</h2>
        <form @submit.prevent="signup">
          <div class="form-group">
            <label for="emailField">Upiši e-mail</label>
            <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="passwordField">Upiši lozinku</label>
            <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="confirmPasswordField">Ponovi lozinku</label>
            <input v-model="passwordRepeat" type="password" class="form-control" id="confirmPasswordField" placeholder="Confirm password">
          </div>
          <button type="submit" class="btn btn-primary mt-5">Registriraj se</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { auth } from '@/firebase';
  
  export default {
    name: "registration-view",
    data() {
      return {
        email: "",
        password: "",
        passwordRepeat: ""
      };
    },
    methods: {
      signup() {
        if (this.password !== this.passwordRepeat) {
          alert("Lozinke se ne podudaraju.");
          return;
        }
  
        auth.createUserWithEmailAndPassword(this.email, this.password)
          .then(userCredential => {
           
            console.log(userCredential);
            this.$router.push('/lgin-view');
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  .registration-view {
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
  