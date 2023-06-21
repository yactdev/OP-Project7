import axios from 'axios';
import { ref } from 'vue';

class PostService {
  #posts;
  #post;

  constructor() {
    this.#posts = ref([]);
    this.#post = ref([]);
  }

  getPosts() {
    return this.#posts;
  }
  getPost() {
    return this.#post;
  }
  async fetchAllPosts() {
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
        .get('http://localhost:3033/api/post', headers)

        .then((response) => {
          localStorage.setItem('data', JSON.stringify(response.data));
          this.#posts.value = response.data;
          console.log(response.data);
        });
    } catch (error) {
      console.log('API Error ');
    }
  }

  async fetchPostById(id) {
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
      console.log(id);
      console.log(`http://localhost:3033/api/post/${id}`);
      await axios
        .get(`http://localhost:3033/api/post/${id}`, headers)

        .then((response) => {
          //   this.posts.value = response.data;

          this.#post.value = response.data;
          console.log(response.data);
        });
    } catch (error) {
      console.log('API Error ');
    }
  }
  async readBy(id) {
    try {
      const storage = JSON.parse(localStorage.getItem('session'));
      // Simple GET request using axios
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'aplication/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };

      console.log(id);
      await axios
        .post(
          `http://localhost:3033/api/post/`,
          { userid: storage.userid },
          headers
        )

        .then(() => {
          //   this.posts.value = response.data;
          console.log('User added');
          // this.#posts.value = response.data;
          // console.log('byI : ' + JSON.parse(response.data));
        });
    } catch (error) {
      console.log('API Error ');
    }
  }

  async createPost(id) {
    try {
      const storage = JSON.parse(localStorage.getItem('session'));
      // Simple GET request using axios
      const headers = {
        headers: {
          'content-type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIyNTQ0NTY4Ny1mMTNlLTQxYTktOTZjYy1kMDE0NmU0Y2I1NGMiLCJpYXQiOjE2ODY0NTk3NTMsImV4cCI6MTY4NjU0NjE1M30.izQuWw25PRhOwceUErL1ACNzZIdhfbsM8ESks3Lt6Ko',
        },
      };
      console.log(id);
      await axios
        .post(
          `http://localhost:3033/api/post/readby/${id}`,
          { userid: storage.userid },
          headers
        )

        .then(() => {
          //   this.posts.value = response.data;
          console.log('User added');
          // this.#posts.value = response.data;
          // console.log('byI : ' + JSON.parse(response.data));
        });
    } catch (error) {
      console.log('API Error ');
    }
  }
}
export default PostService;
