import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/HomeView.vue';
import signin from '@/views/signin.vue';
import signup from '@/views/SignupView.vue';
import profile from '@/views/ProfileView.vue';
import otro from '@/views/OtroView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    },
    {
      path: '/otro',
      name: 'otro',
      component: otro,
    },
  ],
});
export default router;
