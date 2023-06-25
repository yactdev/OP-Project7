import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/HomeView.vue';
import signin from '../views/signin.vue';
import signup from '../views/SignupView.vue';
import profile from '../views/ProfileView.vue';
import post from '../views/PostView.vue';
import createpost from '../views/CreatePostView.vue';
import comment from '../views/CommentView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        authRequired: true,
      },
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
      path: '/profile/:id',
      name: 'profileId',
      component: profile,
      meta: {
        authRequired: true,
      },
    },

    {
      path: '/post/:id',
      name: 'postId',
      component: post,
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/post',
      name: 'post',
      component: createpost,
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment,
      meta: {
        authRequired: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('session') != null;
  const needAuth = to.meta.authRequired;

  if (needAuth && !auth) {
    next('signin');
  } else {
    next();
  }
});
export default router;
