<template>
    <section id="hero">
      <div class="container">
        <h2 class="hero-title">Angel Nivar</h2>
        <p class="hero-subtitle">Exploring the infinite possibilities of technology.</p>
        <a href="#projects" class="btn">Explore My Work</a>
      </div>
      <div id="particles-js"></div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 150,
          density: { enable: true, value_area: 1000 }
        },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.7, random: false },
        size: { value: 2, random: true },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out'
        }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'bubble' },
          onclick: { enable: true, mode: 'push' }
        },
        modes: {
          bubble: {
            distance: 200,
            size: 4,
            duration: 2,
            opacity: 0.8
          },
          push: { particles_nb: 4 }
        }
      }
    });
  });
  </script>
  
  <style scoped>
  #hero {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    color: #fff;
  }
  
  #particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    top: 0;
    left: 0;
    z-index: -1;
  }
  
  .hero-title {
    font-size: 3.5em;
    font-family: 'Playfair Display', serif;
    color: #d4af37;
  }
  
  .hero-subtitle {
    font-size: 1.5em;
    color: #c0c0c0;
    margin-bottom: 20px;
  }
  
  .btn {
    padding: 15px 30px;
    background: #d4af37;
    color: #1b1b1b;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;
  }
  
  .btn:hover {
    background: #a98c37;
  }
  </style>
  