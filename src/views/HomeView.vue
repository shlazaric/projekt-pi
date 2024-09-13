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
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'HomeView',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user;
    });
  },
  methods: {
    checkAuthAndNavigate() {
      if (this.isLoggedIn) {
        this.$router.push('/favorites');
      } else {
        this.$router.push('/login-view');
      }
    },
  },
};
</script>

<style scoped>
.home-view {
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
}
</style>
