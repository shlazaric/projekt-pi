<template>
  <div class="login-view">
    <div class="content">
      <h2>Prijava</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="emailField">Upiši e-mail</label>
          <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="passwordField">Upiši lozinku</label>
          <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary mt-5">Prijavi se</button>
      </form>
    </div>
  </div>
</template>