<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import RouterLink  from 'vue-router'

</script>

<template>

  <header>

    <div id="logoContainer">
      <img id="logo" src="./assets/WrathAndGloryLogo.jpg" alt="Wrath and Glory Logo" width="400" height="250">
    </div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/aboutGilead">About Gilead</RouterLink>
      <RouterLink to="/characterCreation">Character Creation</RouterLink>
    </nav>
    <hr/>
  </header>
  <RouterView />

</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>