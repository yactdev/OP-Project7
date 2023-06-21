import axios from 'axios';
import { ref } from 'vue';

class UserService {
  #users;
  #user;

  constructor() {
    this.#users = ref([]);
    this.#user = ref([]);
  }

  getUsers() {
    return this.#users;
  }
  getUser() {
    return this.#user;
  }
  async fetchAllUsers() {
    try {
      const storage = await JSON.parse(localStorage.getItem('session'));
      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };
      await axios
        .get('http://localhost:3033//api/users/', headers)

        .then((response) => {
          //   this.posts.value = response.data;

          this.#users.value = response.data;
          console.log(response.data);
        });
    } catch (error) {
      console.log('API Error ');
    }
  }

  async fetchUserById(id) {
    try {
      const storage = await JSON.parse(localStorage.getItem('session'));
      console.log(storage.token);
      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };
      await axios
        .get(`http://localhost:3033/api/users/${id}`, headers)

        .then((response) => {
          //   this.posts.value = response.data;

          this.#user.value = response.data;
        });
    } catch (error) {
      console.log('API Error ');
    }
  }
}
export default UserService;
