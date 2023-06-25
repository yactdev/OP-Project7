import axios from 'axios';
import { ref } from 'vue';

class PostService {
  #posts;
  #post;
  #commented;

  constructor() {
    this.#posts = ref([]);
    this.#post = ref([]);
    this.#commented = ref([]);
  }

  getPosts() {
    return this.#posts;
  }
  getPost() {
    return this.#post;
  }
  getComments() {
    return this.#commented;
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
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };
      const body = { userid: storage.userid };
      console.log(id);

      await axios
        .post(`http://localhost:3033/api/post/readby/${id}`, body, headers)

        .then(() => {
          console.log('User added');
        });
    } catch (error) {
      console.log('API Error ');
    }
  }

  async newPost(body) {
    try {
      const storage = await JSON.parse(localStorage.getItem('session'));
      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${storage.token} `,
        },
      };
      await axios
        .post(`http://localhost:3033/api/post`, body, headers)

        .then(() => {
          //   this.posts.value = response.data;
          console.log('The post has been created');
          // this.#posts.value = response.data;
          // console.log('byI : ' + JSON.parse(response.data));
        });
    } catch (error) {
      console.log(error);
    }
  }
  async Comment(body) {
    try {
      const storage = JSON.parse(localStorage.getItem('session'));

      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };

      await axios
        .post(`http://localhost:3033/api/comment/`, body, headers)

        .then(() => {
          console.log('commentadded');
        });
    } catch (error) {
      console.log('API Error ');
    }
  }

  async fetchComment(id) {
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

      await axios
        .get(`http://localhost:3033/api/comment/${id}`, headers)

        .then((response) => {
          //   this.posts.value = response.data;

          this.#commented.value = response.data;
          console.log(response.data);
        });
    } catch (error) {
      console.log('API Error ');
    }
  }
}

export default PostService;
