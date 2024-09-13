<template> 
  <div id="app">
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login-view">Login</router-link>
    <router-link to="/sign-up">Sign Up</router-link>
    
    </div>
    <router-view/>
    </div>
  
    </template> 

<script>
import { auth } from './firebase'; 
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'App',
  data() {
    return {
      user: null, 
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
};
</script>

<style>
#nav {
  background-color: #333;
  padding: 10px;
  color: white;
}

#nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

#nav a:hover {
  text-decoration: underline;
}
</style>
