<template>
  <div id="app">
    <HeaderNav />
    <nav class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
    <FooterSection />
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<style>
/* Global styles */
body {
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  background: #000;
  color: #d4d4d4;
}

.main-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  background: #1b1b1b;
}

.main-nav a {
  color: #d4af37;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
}

.main-nav a:hover {
  text-decoration: underline;
}
</style>
