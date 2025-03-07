<template>
    <section id="contact" class="section contact-section">
      <div class="contact-container">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Fill out the form below or email me at 
          <a href="mailto:anivar.fw@gmail.com">anivar.fw@gmail.com</a>.
        </p>
  
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" placeholder="What's on your mind?" required></textarea>
          </div>
          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    alert(`Thank you, ${form.value.name}, for reaching out!`);
    form.value = { name: '', email: '', message: '' };
  };
  
  watch(form, (newVal) => {
    console.log("Form changed:", newVal);
  }, { deep: true });
  </script>
  
  <style scoped>
  .contact-section {
  background: none;
  color: #f0f0f0;
  padding: 60px 20px;
  position: relative;
}

.contact-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-container h2 {
  font-size: 3em;
  margin-bottom: 10px;
  color: #d4af37;
}

.contact-container p {
  font-size: 1.5em;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
}

.form-group label {
  font-weight: bold;
  color: #f0f0f0;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: #3d3d3d;
  color: #f0f0f0;
  font-size: 1em;
}

.btn {
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 1em;
  background: #d4af37;
  color: #1b1b1b;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #a98c37;
}
  </style>
  