// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Imprint from '../views/Imprint.vue';
import Privacy from '../views/Privacy.vue';

const base = process.env.NODE_ENV === 'production' ? '/mille-isole/' : '/';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: Imprint
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  }
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
