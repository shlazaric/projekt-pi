<template>
    <div class="signup-view">
      <div class="content">
        <h2>Registracija</h2>
        <form @submit.prevent="signUp">
          <div class="form-group">
            <label for="nameField">Upiši ime</label>
            <input v-model="name" type="text" class="form-control" id="nameField" placeholder="Enter your name">
          </div>
          <div class="form-group">
            <label for="emailField">Upiši e-mail</label>
            <input v-model="email" type="email" class="form-control" id="emailField" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="passwordField">Upiši lozinku</label>
            <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary mt-5">Registruj se</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUpView",
    data() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      signUp() {
      
        console.log('User name:', this.name);
        console.log('User email:', this.email);
        console.log('User password:', this.password);
        
       
        this.$router.push('/login-view');
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
    width: 300px; 
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .btn-primary {
    width: 100%;
  }
  </style>
  