import { useRoute } from 'vue-router';

const router = useRoute();

exports.autenticateUser = () => {
  const user = JSON.parse(localStorage.getItem('session'));
  if (!user) {
    router.push({ name: 'signin' });
  } else {
    console.log('access grandted');
    return user;
  }
};
