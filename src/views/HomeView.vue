<template>
  <div class="home-view">
    <div class="content">
      <h2>Dobrodošli na BookLovers!</h2>

      <div>
        <p>Postani naš korisnik:</p>
        <router-link to="/sign-up">Registriraj se</router-link>
      </div>

      <div>
        <p>Već jesi naš korisnik?</p>
        <router-link to="/login-view">Prijavi se</router-link>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
