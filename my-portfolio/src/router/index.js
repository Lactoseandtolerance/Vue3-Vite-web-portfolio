import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutMe from '../views/AboutMe.vue';
import Projects from '../views/Projects.vue';
import ContactForm from '../views/ContactForm.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutMe },
  { path: '/projects', component: Projects },
  { path: '/contact', component: ContactForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;