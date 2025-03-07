<template>
    <header>
      <div class="container">
        <h1 class="logo">AN</h1>
        <nav>
          <div class="menu-icon" @click="toggleMenu">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul class="nav-menu" :class="{ show: menuOpen }">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const menuOpen = ref(false);
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
  </script>
  
  <style scoped>
  header {
  background: none; 
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  text-align: left;
  padding: 20px;
}

header .container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 20px;
}

.logo {
  margin-right: 20px;
}

.menu-icon {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 30px;
}

.menu-icon div {
  background-color: #d4af37;
  height: 4px;
  width: 100%;
  border-radius: 2px;
}

.nav-menu {
  display: none;
  position: absolute;
  top: 10px;
  left: 70px;
  background: #1b1b1b;
  border: 1px solid #444;
  border-radius: 10px;
  padding: 10px 0;
  list-style: none;
}

.nav-menu li {
  padding: 10px 20px;
}

.nav-menu li a {
  color: #f0f0f0;
  text-decoration: none;
  font-size: 1.5em;
  display: block;
}

.nav-menu li a:hover {
  color: #d4af37;
}

.nav-menu.show {
  display: block;
}
  </style>
  