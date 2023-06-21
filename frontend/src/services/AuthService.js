// import { useRoute } from 'vue-router';

// const router = useRoute();

// exports.autenticateUser = () => {
//   const user = JSON.parse(localStorage.getItem('session'));
//   if (!user) {
//     router.push({ name: 'signin' });
//   } else {
//     console.log('access grandted');
//     return user;
//   }
// };
import { ref } from "vue";

class AuthService {
  constructor() {
    this.jwt = ref('')

  }

  gettwt(){
    return this.jwt
  }
  
  async login(email, password){
try{


}
  
 catch{
    console.log(error)
 } 
}
