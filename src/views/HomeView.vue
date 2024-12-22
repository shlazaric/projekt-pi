<template>
  <div class="home-view">
    <div class="content">
      <h2>Dobrodošli na BookLovers!</h2>

      <div class="auth-links">
        <p>Postani naš korisnik:</p>
        <router-link to="/sign-up" class="button">Registriraj se</router-link>
      </div>

      <div class="auth-links">
        <p>Već jesi naš korisnik?</p>
        <router-link to="/login-view" class="button">Prijavi se</router-link>
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
/* Osnovni stilovi za pozadinu i layout */
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
  padding: 20px;
}

.content {
  background-color: rgba(0, 0, 0, 0.6); /* Poluprovidna pozadina */
  padding: 30px;
  border-radius: 20px; /* Zaobljeni ivici */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Senka oko sadržaja */
  max-width: 450px; /* Maksimalna širina */
  width: 100%;
  animation: fadeIn 1s ease-out;
}

/* Animacija pri učitavanju */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stilovi za tekst */
h2 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  margin: 10px 0;
}

/* Stilovi za linkove - dugmadi */
.button {
  display: inline-block;
  padding: 15px 30px;
  margin-top: 20px;
  background-color: #f1c40f;
  color: black;
  text-decoration: none;
  border-radius: 25px; /* Zaobljeni ivici dugmadi */
  font-size: 16px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.button:hover {
  background-color: #d4ac0d;
  transform: scale(1.05); /* Lagano povećanje dugmeta na hover */
}

/* Responzivni dizajn za uređaje sa širinom manjom od 768px */
@media only screen and (max-width: 768px) {
  .content {
    padding: 20px;
    width: 80%;
  }

  h2 {
    font-size: 22px;
  }

  p {
    font-size: 14px;
  }

  .button {
    padding: 12px 25px;
  }
}

/* Responzivni dizajn za uređaje sa širinom manjom od 480px */
@media only screen and (max-width: 480px) {
  .content {
    padding: 15px;
    width: 90%;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 12px;
  }

  .button {
    padding: 10px 20px;
  }
}
</style>
